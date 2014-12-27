---
layout: post
comments: true
categories: JavaScript
tags:
  - frameworks
  - javascript
---

Web page manipulation with JavaScript exists in a continuum.  If we can put
the most popular frameworks in it, it would look like the following in order
of increasing framework complexity from left to right.

JavaScript - [`jQuery`](//www.jquery.com) - [`Backbone`](//www.backbonejs.org)
- [`Angular`]( //www.angularjs.org ) - [`Ember`]( //www.emberjs.org )

Increasing framework complexity is different from learning curve complexity.
In this case, JavaScript has a low learning curve complexity. Its syntax is
relatively simple, but programming complex applications in it requires a lot
of manual grunt work and awareness of cross-browser compatibility. Even if
cross-browser compatibility isn't a concern, the amount of code needed to
create functions to do common things already accomplished by libraries like
jQuery makes any implementation more for your own learning purpose and not for
production work.

jQuery is a step up from JavaScript by providing a library that abstracts the
complexity of cross-browser compatibility in addition to doing common
manipulations ([like making a dancing monkey][2]) and a large community of
open-source and/or free-software developers have created plugins to help you
make your web page appear dynamic.

Unfortunately, there is a real possibility of clutter, a possibility of
constructing your code overtly around simply checking that an element exists
and then reacting based on certain events.

It is still possible to create a <a
href="http://www.amazon.com/gp/product/1617290750/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1617290750&linkCode=as2&tag=trilanwebsite&linkId=CZZDZUA33GFFXDX2">modularized
single-page application</a><img
src="http://ir-na.amazon-adsystem.com/e/ir?t=trilanwebsite&l=as2&o=1&a=1617290750"
width="1" height="1" border="0" alt="" style="border:none !important;
margin:0px !important;" /> (affiliate link), but as the book will demonstrate,
there is a large amount of boilerplate code required to even set things up.

In spite of this, the book is still a good introduction to how to create your
application without using a framework. I consider it an important guide to
understanding how frameworks work. It also makes good use of data
encapsulation available in JavaScript that might be considered
counterintuitive. It is best to think of the use of function in parenthesis as
a way to create a shield bubble, like the USS Enterprise on yellow alert,
except in the inverse. Unlike ancient times, we are building walls not to keep
barbarians out, but to lock variables in. Gandalf's fight against the balrog
is an example you must use in your long journey toward ensuring that a
variable doesn't pass into the global scope. Future implementations of
JavaScript may move toward giving an error when an undeclared variable is
used, but right now [`"use strict";`][3] is available as a free incantation
for your containment spell.

Backbone provides basic structures that jQuery doesn't have?  Backbone sits in
the middle because it provides a light layer of abstractions for dealing with
APIs like an ORM, but does not enforce a way of doing things. If you don't
want to use `render`, you don't have to, but it's there to be overridden in a
constructor. It gives you a way to designate the behaviors of each component.
The different between it and jQuery is most likely that to save data to a
server in jQuery, you would have to write `$.ajax('POST', data)`, but in
Backbone you can can call `foo.save()`.

The very smallness of it means that not everything is provided for you, which
is why many plugins have been created to help extend Backbone, like
[Marionette][4]. Its ability to be extended, however, can be an issue because
people can go about it in different ways, and so no two Backbone projects are
ever alike in the way that different Angular projects are alike.

Angular is a framework. It has constructs like providers, factories, and
services that may be incomprehensible except to [people used to Java][1].
Unlike Backbone, which requires initialization as including Backbone by itself
will not do anything, an Angular app can be started by adding `ng-app` to your
document. Upon requiring the angular files, it takes over and automatically
starts binding things together. You are free to cobble together different
section of a page with different controllers and behaviors.

Angular is designed to allow you to keep your HTML pages as you like it, which
makes its difference from Ember quite interesting.

Ember tends to require the control of the entire document. You are supposed to
add `{{outlet}}` within which Ember will reside and draw everything. As such,
it cannot be said to be extending an HTML page and makes it truly for
ambitious applications.

If you're considering the different frameworks and libraries to use and are
undecided, the most important step is to simply pick one framework and use it.
It truly is up to you which framework or library to use, because in the end,
you will understand that the magic isn't that magical, that it is simply a set
of instructions for manipulating your web document.

[1]: http://codeofrob.com/entries/you-have-ruined-javascript.html "You have ruined JavaScript"
[2]: http://www.newyorker.com/tech/elements/group-rules-web "The Group that rules the web"
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
[4]: http://marionettejs.com
