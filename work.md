---
layout: landing
title: Work
landing-title: 'Work'
nav-menu: true
description: 'All things created.<br />Portfolio, Case Studies.'
image: assets/images/work.jpg
style: style2
button: Take a Peek

---
<!-- Main -->
<div id="main" class="alt">
	<section class="spotlights">
		{% for post in site.categories["Work"] %}
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

	<!-- Dribbble -->
	{% include dribbble.html %}
</div>
