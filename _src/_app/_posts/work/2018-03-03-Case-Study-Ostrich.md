---
layout: post
title: Ostrich Books
description: We wanted to inspire a billion people to read and learn.
permalink: work/:title/
thumbnail: assets/images/ostrich/ostrich-header.png
# scheme-text: "#000"
# scheme-link: "#007885"
# scheme-hero-bg: "#007885"
# scheme-hero-text: "#ffffff"
# scheme-hero-link: "#ffffff"
tags: Work
plugin: lightense
hide_image_in_post: true
---
Ostrich Books was started to solve problems with book availability and the high cost. Books are either not available in the local store or are costly if ordered online. Getting suggestion online is even worse. If you are an avid reader, you'd not like the Amazon and Goodreads recommendation system. If you are an avid reader, you'd have a really bad time online.


![Image](/assets/images/ostrich/app-showcase.png){: .size-small}

---

## The Problem


There are only a few good bookstores in Bangalore and even lesser number of libraries. And after making an astronomical number of calls to a bookstore and confirming they have the book, you chicken out because of the worsening Bangalore traffic. One of the biggest store in Bangalore would have almost all of the book and frankly it was a major point of purchase for Ostrich too; but the quality is not that great.

![Image](/assets/images/ostrich/amazon.jpeg){: .size-small}
###### The pop culture and increasing number of book-to-movie adaptation have skewed the bestselling lists in Amazon India and Goodreads. 

<blockquote>
  <p>A woman walking on the pavement overtook my car eight times and my car overtook her eight times. Two more times and we would have been engaged.</p>
  <footer>
    <cite><a href="https://www.deccanherald.com/content/582631/jeffrey-archer-amused-blurus-infamous.html">Jeffrey Archer on Bangalore traffic</a></cite>
  </footer>
</blockquote>

![Image](/assets/images/ostrich/blr-traffic-library.png){: .size-small}
###### (Left) Blossom book store. (Right) Bangalore's daily traffic."

## The Process

Being the designer &amp; engineer co-founder of the team, I had all the non-business responsibilities. We needed a customer facing app and a working admin dashboard, and all of it in just 2 months. Prior to Ostrich, I had done that multiple times but this time the catch was that those products were from an established company. Creating new product(s) for a new company is different. You conceptualize the logo, branding, present it, argue about it and go back to the drawing board. Developing an app comes after that.

![Image](/assets/images/ostrich/git-trello.png){: .size-small}
###### My Gantt charts were off the charts.

Being the solo developer, I built the Android app, laid down the foundation for the backend, created serverless modules, created admin panels and many other side projects. I also lead the product marketing and community engagement. As the internet was undergoing an incredible transformation in India and the number of Android users was increasing by the day, I chose to go with Google's Material Design. It was 2015 and users were getting comfortable with this new design system.

Next, I chose not to go with some fancy animations as phones in India are pretty slow. In one of my user interview, I saw a user open the <i>Book Detail</i> page with an extreme stutter because of the element transition animation from the bottom. I decided to scrap that animation and went with the simple translation like a bottom sheet.

![Image](/assets/images/ostrich/rapid-proto.png){: .size-small}
###### Rapid prototyping was done; not with After Effects but directly in the code. There was very little time to create a design prototype and then implementing it.


Another result of rapid prototyping was that our internal processes were also made rapid. We would do the <b>User Research</b> while delivering the book. We would ask them about their experience with the app. If they were a returning user, we would have a list of old conversations and interview them about the latest changes that they see.

![Image](/assets/images/ostrich/notif.png){: .size-small}
###### Notifications played an important role. I made a GCM module where in you could send a trending Facebook post and it would be shown to interested users, on the fly.
	
## The Product
Ostrich was launched. To promote reading and making it easy was our main objective.
You search for a book and start reading a physical copy in a matter of hours.
You can lend your own books and get 3 in return.
You could rent a full book set or buy it at a discounted price.
Meet an author or chat with fellow readers at specially organised event.
<strong>Experience books not just the story.</strong>

In the end, after an app update was released, we'd have learned a lot from the process and implement the design changes in our social media posts as well. I think I won't be wrong saying that iterating UI design helped us in improving our social media content too.

![Image](/assets/images/ostrich/logo.png){: .size-small}
###### The name and the logo for Ostrich defined progress, a fast one. Ostrich being the fastest land bird with a long neck denoted the pace and the reach we wanted to have, respectively.

The colors were soothing; primary teal and complimentary amber. Colors and fonts were taken from <b>Material Design</b> to adopt the Android ecosystem. The app should not look out of place in the user's phone.

![Image](/assets/images/ostrich/color-font.png){: .size-small}
###### I used the system font, Roboto, so as to keep the app size minimum, under 4 MB.

The users loved the simplicity of the app. You had only two diverging flows - you are either looking to borrow a book or lend it. When you were borrowing a book you were also given an option to borrow a specially packaged collection. Lending a book was easier. Either speak the book title, enter it or just scan the book's barcode.

I had designed the "Enter Book Title" card, with intricate detail in the animation choreography, to keep user's attention to the same place.

The "Profile page" component is now commonly known as "Bottom Sheet", but was nowhere to be seen in 2015. I had always envisioned a UI where all the temporary pages like Settings, Profile etc float over the main UI. This doesn't intrude the user's normal flow.

Another major component which became popular was the <a href="https://github.com/sahildave/Search-View-Layout">Search View Layout</a>. I eventually released it on GitHub and with only a single line you could integrate a beautiful transition, which is now used by almost all Google Apps.

---


## App Flows & Interactions

Below is the demo which I had recorded for pitching purposes. Writing a case study was a long shot at the moment. Please bear with the low quality gifs and videos.

![Image](/assets/images/ostrich/inline-search.gif){: .size-center}

Enter Book Title: I wanted the user's eye to remain on the card and used inline crossfade animation for that.

![Image](/assets/images/ostrich/profile.gif){: .size-center}

Profile screen had a translate up animation, now called a bottom sheet. This was one of the components which became mainstream.

<iframe height="640"  width="100%" src="https://drive.google.com/file/d/1rR9CcfhelBeDcTAFN1IxustPcI6AgcGe/preview"></iframe>{: .size-small}

Borrowing a book was easy. Just search for your book, select address and slot.

<iframe height="640" width="100%" src="https://drive.google.com/file/d/1C8Qz1Gxg2FF8hyghqrPonRlSElQAx9by/preview"></iframe>{: .size-small}

If you wanted to lend a book, you'd get three books in return for renting as Ostrich Credits.

---

We had a running product. Ostrich ran, pretty fast, as long as it had food. They say that the Ostrich eats everything and so did we. We did corporate marketing, created and sold merchandise, travelled everyday hours in scorching heat in public transports to deliver a book, built side projects, worked out of 3 different places, organised meetups and kept our customers happy. We had over a thousand returning customers and much more readers through our corporate ventures.

Apart from the customer facing app, we started a B2B model where we created digitally maintained library for an organizations. Had many companies including PayPal India as our partner. 

![Image](/assets/images/ostrich/gym.png){: .size-small}
###### We even placed our books in a gym. How about that!

![Image](/assets/images/ostrich/bookmarks.jpg){: .size-small}
###### Who wouldn't love these cute little bookmarks?

![Image](/assets/images/ostrich/event.png){: .size-small}
###### Ostrich events: We sold books, coasters, notebooks at many startup like PayPal, redBus.


## The Outcome

As a result of this experience, I grew a lot professionally and personally. It takes a great deal of courage to get out of your bubble and do things for the first time. I can't even imagine how I went door to door to deliver a book, conversed with them about their experience, asked them for their suggestions, talked to a lot of authors, publishers &amp; distributors.

![Image](/assets/images/ostrich/tired.jpg){: .size-large}
###### It was a helluva-ride!