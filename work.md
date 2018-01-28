---
layout: landing
title: Work
landing-title: 'Work'
nav-menu: true
description: 'All things created.<br />Portfolio, Case Study.'
image: null
style: style2
---
<!-- Main -->
<div id="main" class="alt">
	<section class="spotlights">
		{% for post in site.categories["Work"] %}
			<section>
				{% if post.image %}
					<a href="{{ site.baseurl }}{{ post.url }}" class="image">
						<img src="{{ site.baseurl }}/{{ post.image }}" alt="" data-position="center center" />
					</a>
				{% endif %}
				<div class="content">
					<div class="inner">
						<header class="major">
							<h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
						</header>
						<p>{{ post.description }}</p>
						<ul class="actions">
							<li><a href="{{ site.baseurl }}{{ post.url }}" class="button">Take a Peek</a></li>
						</ul>
					</div>
				</div>
			</section>
		{% endfor %}
	</section>
</div>
