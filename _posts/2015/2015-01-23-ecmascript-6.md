---
title: "ECMAScript 2015 Module"
layout: post
tags:
  - programming
category: javascript
---

I was confused about the module system because I had a pre-existing idea of how
JS applications were supposed to be written, which was that all the files are
supposed to be compiled into one megafile (such as application.js in Rails).
This megafile is downloaded once. You would use Sprockets to compile
everything. However, a negative of this approach is that you must know the
exact order in which to put the files before compiling. But otherwise,
Sprockets ( and UglifyJS and other compilers) is essentially the same as
putting multiple `<script>` in the browser (with the same order-dependent
caveat).

In ES6's module system it feels like we are going back to requiring
multiple files again:

{% highlight javascript %}
import { foo } from foo;
 import { bar } from 'bar';
 import { sqrt, exp } from 'lib/math';
{% endhighlight %}

The browser would need to request foo, bar, and lib/math from the server,
which would be three requests. And if those foo and bars all import their own
files, this would result in many more server requests.

But ... now I know this is wrong. You can still compile everything. Traceur can
do that for you.

ES6 modules just mean that multiple `<script>` now can require files on their
own instead of remember to add `<script>` beforehand, and you would be able to go
into browser inspector and import files _right there_ in the console. As far as I
know, there's no way to usefully require a file in the browser.

I have had several acute moments of, in the single-page application I'm working
on, of wanting to be able to call a certain function defined in a certain file,
but not being able to do so because it was all wrapped up in an
"immediately-executed function expression".

Sprockets defines one way, to use `window.App` or similar, but it means that your
users can go into the console to snoop around. IEFE seemingly allows you to
obfuscate behind a pair of parentheses.
