---
layout: landing
title: Blog
landing-title: 'Blog'
nav-menu: true
description: 'All things written.<br />Android, Design.'
image: assets/images/blog.jpg
style: style1
button: Read More

---
<!-- Main -->
<div id="main" class="alt">
	<section class="spotlights">
		{% for post in site.categories["Blog"] %}
			<section>
				{% if post.image %}
				<a href="{{ site.baseurl }}{{ post.url }}" class="image1">
					<img src="{{ site.baseurl }}/{{ post.image }}" alt="" data-position="center center" />
				</a>
				{% endif %}
				<div class="content">
					<div class="inner">
						<header class="major">
							<h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
						</header>
						<p>{{ post.excerpt }}</p>
						<ul class="actions">
							<li><a href="{{ site.baseurl }}{{ post.url }}" class="button">{{ page.button }}</a></li>
						</ul>
					</div>
				</div>
				{% if post.image %}
				<a href="{{ site.baseurl }}{{ post.url }}" class="image2">
					<img src="{{ site.baseurl }}/{{ post.image }}" alt="" data-position="center center" />
				</a>
				{% endif %}
			</section>
		{% endfor %}
	</section>
</div>
