---
layout: post
title: Product Flavors for Android Library
description: Product flavors is a powerful feature of the gradle plugin in Android Studio. Several developers use it to create free/paid or full/demo versions, releasing customized versions of their product. In…
image:
permalink: :categories/:title/
categories: Blog
---

Product flavors is a powerful feature of the gradle plugin in Android Studio. Several developers use it to create free/paid or full/demo versions, releasing customized versions of their product.
In this post I would add product flavors to one of the libraries that I am working on. This library is an enterprise entity and different clients have different requirements with respect to `minSdkVersion`, `targetSdkVersion`, support library versions and other internal dependencies.

## Product Flavors on Applications

Using product flavors on a regular applications is easy. Just add the productFlavors block and you are good to go.

``` groovy
> app/build.gradle

productFlavors {
    free {
        applicationId "xyz.sahildave.flavoredlibrary.free"
    }
    paid {
        applicationId "xyz.sahildave.flavoredlibrary.paid"
    }
}
```

You can now create sourceSets folders `app/src/paid/` and `app/src/free/` parallel to `app/src/main/`. The common classes and resources can stay in `app/src/main` while the flavor dependent code can go in the respective folders. Hold on to this concept, we’d use it later.

## Product Flavors in Android Library

Creating the product flavor in the library’s `build.gradle` file is basically the same as above, the thing that changes is the dependency management in the app module. Here I create 2 flavors with different sdk versions.

Please note that publishing of all variants are not enabled by default. You need to use the `publishNonDefault` variable in the `android` scope. Read more about `publishNonDefault` here.



``` groovy
> library/build.gradle

android {
    publishNonDefault true
    productFlavors {
        sdk1521 {
            minSdkVersion 15
            targetSdkVersion 21
            compileSdkVersion 21
        }
        sdk1524 {
            minSdkVersion 15
            targetSdkVersion 24
            compileSdkVersion 24
        }
    }
}
```

For using these two product flavors in the demo app, I created two different configurations with the same SDK versions.

``` groovy
>app/build.gradle

android {
    // Other configurations and buildtypes
    productFlavors {
        app1521 {
            minSdkVersion 15
            targetSdkVersion 21
            compileSdkVersion 21
            applicationId "xyz.sahildave.flavoredlibrary.app1521"
        }
        app1524 {
            minSdkVersion 15
            targetSdkVersion 24
            compileSdkVersion 24
            applicationId "xyz.sahildave.flavoredlibrary.app1524"
        }
    }
}

configurations {
    app1521DebugCompile
    app1524DebugCompile
}
dependencies {
    compile 'com.android.support:appcompat-v7:24.2.0'
    app1521DebugCompile project(path: ':mylibrary', configuration: 'sdk1521Debug')
    app1524DebugCompile project(path: ':mylibrary', configuration: 'sdk1524Debug')
}
```

I have only created the debug configurations because I wanted to test the integration in the demo app and not release it on any store.


## Potential Bugs

### 1. Mismatched Support Library Version in the Library Module

While you are building the flavored library, you’d want to use the correct support library with the corresponding library flavor, i.e.

``` groovy
>library/build.gradle

android {
    publishNonDefault true
    productFlavors {
        sdk1521 {
            minSdkVersion 15
            targetSdkVersion 21
            compileSdkVersion 21
        }
        sdk1524 {
            minSdkVersion 15
            targetSdkVersion 24
            compileSdkVersion 24
        }
    }
}
dependencies {
//    compile 'com.android.support:appcompat-v7:24.2.1'
    sdk1524Compile 'com.android.support:appcompat-v7:24.2.1'
    sdk1521Compile 'com.android.support:appcompat-v7:21.0.3'
}
```

Lint does not give a warning for flavored apps (tried in AS 2.1 and AS 2.2) but you can try to replicate it by creating a separate application module and setting `compileSdkVersion` and support library version different. You’d see this lint warning:

```
This support library should not use a different version (24) than the compileSdkVersion (21):
There are some combinations of libraries, or tools and libraries, that are incompatible, or can lead to bugs. One such incompatibility is compiling with a version of the Android support libraries that is not the latest version (or in particular, a version lower than your targetSdkVersion.)
```

### 2. Multiple Support Library Versions in App Module

Now that the library variants are dependent on different versions of support library, the current dependencies system in the app module would use two versions of support library at the same time for the flavor 1521. To cope with this problem, you should make the app variants depend upon the correct support library versions as well.

``` groovy
>app/build.gradle

android {
    // Other configurations and buildtypes
    productFlavors {
        app1521 {
            minSdkVersion 15
            targetSdkVersion 21
            compileSdkVersion 21
            applicationId "xyz.sahildave.flavoredlibrary.app1521"
        }
        app1524 {
            minSdkVersion 15
            targetSdkVersion 24
            compileSdkVersion 24
            applicationId "xyz.sahildave.flavoredlibrary.app1524"
        }
    }
}
configurations {
    app1521DebugCompile
    app1524DebugCompile
}
dependencies {
//    compile 'com.android.support:appcompat-v7:24.1.0'
    app1521DebugCompile project(path: ':mylibrary', configuration: 'sdk1521Debug')
    app1524DebugCompile project(path: ':mylibrary', configuration: 'sdk1524Debug')
    app1521DebugCompile 'com.android.support:appcompat-v7:21.0.3'
    app1524DebugCompile 'com.android.support:appcompat-v7:24.2.0'
}
```

### 3. AppCompatActivity not available in flavor targeting 21
Now that we have made the flavor app1521 and sdk1521 dependent on `support-library` 21+, we can’t extend the good old `AppCompatActivity` and have to fallback to ActionBarActivity. For this we use the flexibility of `sourcesSets`. We create the parallel folders and abstract out the superclass for `LibraryActivity`. This way we can have different superclass dependent upon the flavor of the library we are dealing with. The plan is to make the `FlavoredActivity` extend `ActionBarActivity` in sdk1521 and `AppCompatActivity` in sdk1524:

```
library
    |
    |--src
    |    |--main
    |    |    |--java
    |    |    |    |--xyz.sahildave.mylibrary
    |    |    |    |    |--LibraryActivity.java
    |    |
    |    |--sdk1521
    |    |    |--java
    |    |    |    |--xyz.sahildave.mylibrary
    |    |    |    |    |--FlavoredActivity.java
    |    |
    |    |--sdk1524
    |    |    |--java
    |    |    |    |--xyz.sahildave.mylibrary
    |    |    |    |    |--FlavoredActivity.java
```

``` java
>Flavor: sdk1521

public abstract class FlavoredActivity extends ActionBarActivity {
    abstract String generateLibraryText();
}
```

``` java
>Flavor: sdk1524

public abstract class FlavoredActivity extends AppCompatActivity {
    abstract String generateLibraryText();
}
```
Now that we have abstracted out the `FlavoredActivity`, we can extend it in our main `LibraryActivity`. The same thing can be done for other flavor dependent entities.

You can see all of this running in action at this project repo. https://github.com/sahildave/Flavored-Library

---

This post was originally seen [here](https://android.jlelse.eu/product-flavors-for-android-library-d3b2d240fca2) on Medium.
