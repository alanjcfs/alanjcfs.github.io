---
layout: post
category: javascript
title: "Chapter 3"
tags:
  - programming
---

I'm reading through [ Chapter 3 of You Don't Know JavaScript ][ch3]
and it taught me a lot about the new things that are being introduced.
In particular, the module system. The book explained that ES6 and JavaScript
engine is separate from the module loader, which can be different, and is
different especially on the node-based platform (CommonJS) and in the browser
(AMD or Asynchronous Module Definition, RequireJS).

It seems that a module loader for ES6 is still very new, and therefore we
would wisely choose to transpile ES6 to the format most common on the platform
we are targeting and letting the module loader figure it out.

It's also interesting to see that Rails or more accurately Sprockets' approach
of compiling and minifying everything into a single application.js may not
work well with the module loading.

If you want your module to be asynchronously loaded, for example:

{% highlight js %}

import * as foo from "models/foo";
var bar = new foo.Model;
bar.save();

{% endhighlight %}

And in this situation, `models/foo` refers to
`http://example.com/lib/modles/foo.js`, then Rails' original intent of serving
all the assets from a single `/assets` folder does not work at all.

It might even be necessary to create a `lib` namespace in `config/routes.rb`
for the purpose of serving your JavaScript, which I haven't tried out.

[ch3]: https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch3.md
