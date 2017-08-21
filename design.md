---
layout: landing
title: Design
landing-title: 'Design'
nav-menu: true
description: 'All things Design.<br />Posts related to Sketch.'
image: null
style: style2
---
<!-- Main -->
<div id="main" class="alt">
	<section class="spotlights">
		{% for post in site.categories["Design"] %}
			<section>
				{% if post.image %}
					<a href="{{ site.baseurl }}{{ post.url }}" class="image">
						<img src="{{ site.baseurl }}/{{ post.image }}" alt="" data-position="25% 25%" />
					</a>
				{% endif %}
				<div class="content">
					<div class="inner">
						<header class="major">
							<h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
						</header>
						<p>{{ post.excerpt }}</p>
						<ul class="actions">
							<li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Read more</a></li>
						</ul>
					</div>
				</div>
			</section>
		{% endfor %}
	</section>
</div>
