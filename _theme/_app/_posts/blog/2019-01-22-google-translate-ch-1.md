---
layout: post
title: Google Translate &#8208; Ch. 1
description: This post is a part of a series written in collaboration with Indhuja. We are trying to redesign Google Translate from the ground up.
permalink: blog/:title/
tags: Blog
thumbnail: assets/images/ostrich/ostrich-header.png
scheme-text: "#000"
scheme-link: "#3F83F4"
scheme-hero-bg: "#3F83F4"
scheme-hero-text: "#ffffff"
scheme-hero-link: "#ffffff"
plugin: lightense
hide_image_in_post: true
---

As a designer, I believe side projects are of utmost importance. You get to experiment with various scenarios working on a new topic and it dramatically enhances your skill. On the other hand, I also believe that designers are pretty protective about their work. We take immense shame in accepting if we fail at improving a product through design. But as they say, failing and failure are different things.

While trying to improve Google Translate's functional design, Indhuja and I faced a lot of roadblocks. Naturally, these were expected. Firstly, this was a side project and we had no data about the usage of any particular feature. Secondly, our aim was also to keep the Information Architecture unchanged. But given the givens, we still think we are succeeding, through one learning at a time. We understood what a wonderful product Google Translate is, at its core. And this astonishing learning gave us immense respect for the product team at Google Translate who might be facing these issues on a daily basis.

## Inception

The idea came into being when we were looking for a new product to work upon in January. We always try to improve the functional aspect of an app with our redesigns and not just the UI.

We moved to the wunderbar city of Berlin a few months ago and Translate has been a saviour. A tweet from Alex Münch caught Indhuja's eye and it all fell into place. We thought Google translate would be an interesting project to be occupied with. There are googol (pun intended) number of "redesigns" on dribbble which don't really serve any purpose, and we hate it. We started with trying to solve one problem this time - Reachability.

---

## What we changed

Nobody can deny that the technology behind Translate is unparallel but there are some UX issues which we intended to solve. We wanted to keep things at a quick reach. Whenever the user is at home or at a grocery shop they'd want the most used actions, Type and Camera, nearby. So naturally, we thought of putting them all near the thumb.

### Reach

With the home screen, we aimed to keep things near the thumb without changing the Information Architecture of the page. On one hand, we dropped the icon labels for the Camera and Mic. On the other, we added more information to the Conversation and Handwriting actions. The assumption here was that the user would be familiar with buttons like Camera and Mic. And as the Conversation and Handwriting felt focussed more towards power users, they should have more information attached.

![Image](/assets/images/translate-ch-1/home.png){: .size-small}
###### The user can now quickly access the Camera and Mic. The cards for Conversation and Handwriting provide more context.



### Guide with Colour

Taking inspiration from Google Tasks and Assistant for the Material Design 2.0 UI, we went with an all white and blue approach. We wanted the main action of a state to be highlighted with the blue colour. As the primary need for the user while using the app was to view the translated text we tried to keep the translated text in-blue or on-blue.

![Image](/assets/images/translate-ch-1/home-typing-result.png){: .size-small}
###### Colours are used to guide the user’s attention at different stages of the product


In the home state, the language switcher was on-blue. While typing, the real-time translation is in-blue. And finally, in the result screen, the translation is on-blue. This not only brings vibrance in the UI but also directs the user's eye to the highlighted part of the screen.

This notion was shattered when we read the article by [Pendar Yousefi](https://medium.com/@pendar) published while we were doing this project though.


### Making it seamless

There was a need for a smoother experience. Currently, the input boxes 'jump' up and down a lot between the three home-typing-result states. We aimed at cleaning that up by keeping components stacked from the bottom. This should also help in keeping a minimal number of screens as the transitions can be smooth when the keyboard pops up.
Now the problems started cropping up.

---

## Conclusion

### Recents & Suggestions

Generally speaking, showing a "Recents" list is easier if the list has an infinite space below it. The natural behaviour for the user is to scroll that list and view his history in a descending fashion.

But, we had the input box at the bottom! So the list couldn't be infinite. Next, keeping the height of short phones like iPhone 5/SE in mind, there was enough space for only maximum 3 items above the input boxes. So, in the end, we had only this tiny vertical space for all the things - recent, suggestions, "Did you mean" and "Translate from".

![Image](/assets/images/translate-ch-1/sugg-did-from.png){: .size-small}
###### Quick-Suggestions, Did you mean and Translate from — all come in the same location


### Language Switcher

We experimented with placing the language switcher component to many different locations on the screen and somehow gain some more vertical space. This was going contrary to our aim of keeping a minimum number of screens. Changing the language switcher to a small vertical switch on the left helped us gain some vertical space and it inadvertently aligned all the text elements as well.


![Image](/assets/images/translate-ch-1/switcher.png){: .size-small}
###### Few of the many iterations of the language switcher


### Result Screen

This was the straw that broke the camel's back. We morphed the "typing" state into the result screen for a smooth experience. Here the result is on top, highlighted on-blue, and more information is down under the keyboard. It looked good in its own domain but was very different from the home screen. The user could only click the cross icon to go back home.


![Image](/assets/images/translate-ch-1/result.png){: .size-small}
###### Comparison of the result screens. Results are shown on top of the screen.


We can certainly make smooth Flinto prototypes and it will look awesome. But then if you compare this with the current app, you'd say that the simplicity was lost.


![Image](/assets/images/translate-ch-1/flow.gif){: .size-small}
###### A quick Flinto of the 4 major states.



## Lessons Learned

On the first glance of the current app, a redesign looked simple. But we couldn't be more wrong. We just scratched the surface. There was a certain complexity in the simplicity and we missed it.

> There was a certain complexity in the simplicity.

This astonishing reveal is the reason we are now learning more about the product - like the intricacies of the user flows and the original aim of the service as envisioned by Google- "Speak to the World".
We started only with reachability in mind but now we see the product as a whole from a more zoomed out view. And while seeing a product from up there, you tend to notice a few more things from a design standpoint. That's why you need to raise your head above the water once in a while rather than being drowned in it, all day.

We needed the fail to see things clearly. Now, instead of redesigning Google Translate, we have decided to work on the product as a whole.
We'd be writing more about this endeavour as we progress. Stay tuned!

### Interesting links:


* [Designing the UI of Google Translate - Google Design](https://medium.com/google-design/a-fish-in-your-ear-134deed70268)
* [3 UX takeaways from redesigning Google Translate - Google Design](https://medium.com/google-design/3-ux-takeaways-from-redesigning-google-translate-3184038f43bf)
* [Material Design 2.0](https://material.io/design/components/)


![Image](/assets/images/translate-ch-1/credits.png){: .size-small}
###### Co-written with Indhuja.

This post was originally seen [here](https://uxdesign.cc/how-we-succeeded-by-failing-to-redesign-google-translate-e9177e0e146e) on Medium.
