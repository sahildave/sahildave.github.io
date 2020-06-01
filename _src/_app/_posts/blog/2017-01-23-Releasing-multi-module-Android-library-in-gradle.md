---
layout: post
title: Multi-module Android library
description: In this post I would share how we release multiple split libraries and have interdependencies similar to how Google releases play-services or appcompat libraries.
thumbnail: assets/images/multi_library.png
tags: Archive
permalink: blog/:title/
hide_image_in_post: true
---

In the last post I had discussed how we are using product flavors to release different versions of the code base with minor changes. It had helped us serve different clients with different requirements.
In this post I would share how we release multiple split libraries and have interdependencies similar to how Google releases play-services or appcompat libraries. It seems easy till the publishing day, until it is not! The problem with inter-dependency is maven does not add the version number in the pom file for local module dependencies.

![Dependency Tree: Release Libraries are public libraries which are released using Maven.]({{ site.baseurl }}/assets/images/multi_library.png)


## Problem

The problem arises when you try to release the super-library and its pom file includes an `unspecified` version number for the core-library in the dependency node.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <modelVersion>4.0.0</modelVersion>
  <groupId>lib-groupId</groupId>
  <artifactId>lib-artifactId</artifactId>
  <version>0.0.1</version>
  <packaging>aar</packaging>
  <dependencies>
    <dependency>
      <groupId>com.android.support</groupId>
      <artifactId>appcompat-v7</artifactId>
      <version>25.1.0</version>
      <scope>compile</scope>
    </dependency>
    <!-- Highlighted -->
    <dependency>
      <groupId>MultiLibrary</groupId>
      <artifactId>core-library</artifactId>
      <version>unspecified</version>
      <scope>compile</scope>
    </dependency>
    <!-- Highlighted -->
  </dependencies>
</project>
```

### Highlighted above:
* **groupId** is the rootProject of the library. Here the repo name MultiLibrary.  
* **version** is `unspecified`

When the client adds it in the their dependencies list, it wont compile throwing an error:

```
Failed to resolve: MultiLibrary.core-library:unspecified
```

## Solution

We can inject a function just after pom evaluation is done. We would go through each dependency added in the pom file and edit the particular dependency node if its version is `unspecified`. You should check for both, `groupId` and `version`.

``` groovy
uploadArchives {
    repositories {
        mavenDeployer {
            repository(url: "file://${buildDir}/outputs/maven")
            pom.groupId = GROUP
            pom.artifactId = ARTIFACT_ID
            pom.version = VERSION
            pom.whenConfigured { pom ->
                println("Current Dependencies ${pom.dependencies}")
                pom.dependencies.each { dep ->
                    println("Processing ${dep}")
                    if (dep.getVersion() == "unspecified" && dep.getGroupId() == rootProjectDir) {
                        println("Updating Dependencies")
                        dep.setGroupId(GROUP)
                        dep.setVersion(VERSION)
                        println("Updated ${dep}")
                    }
                }
            }
        }
    }
}
```

Now the `core-library` dependency in the pom file looks like:

``` xml
<dependency>
  <groupId>lib-groupId</groupId>
  <artifactId>core-library</artifactId>
  <version>0.0.1</version>
  <scope>compile</scope>
</dependency>
```

Now the dependency is release ready and the client can integrate the super library. Also the sub libraries can be released as separate modules.

---

This post originally appear [here](https://android.jlelse.eu/releasing-multi-module-android-library-in-gradle-7286cd667b4b) on Medium
