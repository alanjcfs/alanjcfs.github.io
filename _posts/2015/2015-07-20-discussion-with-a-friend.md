---
layout: post
category: devops
title: "Discussion of Rust, Haskell, and JavaScript with a Friend"
tags:
  - programming
  - rust
  - javascript
  - haskell
---
# Trying to Learn

So, I am trying to learn Rust, but I definitely struggled with the basic parts,
which was how the module system worked.  Now that I have gotten through that
step, which was my failure to recognize that I don't need to use `mod` inside a
file when I am trying to reference that file using `use`.

The [Mostly Adequate Guide to Functional Programming](3) is a great introduction and
I want to do the exercise and see if it expands my mind a little more, if only
temporarily.

# Summary of Book

The explanation on Hindley-Milner could be fleshed out a bit more, but it is a
good explanation otherwise. And though it referred to Haskell only with a wink,
it does bring up the use of the mysterious `>>=` operator, but first starting
with the basics of composing and currying functions.

It built up to the use of a Container (the mighty burrito that James and I had
talked about), to an explanation of a functor (a wrapped function I think),
the use of Maybe and Either to explain how we can automatically cut off the
execution of a chain of actions when it encounters a nil-like value.

The problem of Monad is that it is an onion. You don't want to find yourself
dealing with a value that's inside a container inside of another container. So,
the container may need to be unwrapped. Before putting it to another function,
it is necessary to unwrap. Haskell then provides `flatMap` and `>>=` to handle
this.  I believe Rust has unwrap, but discourages its use in favor of pattern
matching.  The book gave an example of composition, joining, and chaining, and
turning that into a JS version of `>>=`

I did wonder before if JS Promise almost represents an idea of a Monad due to
how all return values are supposed to be wrapped up in a Promise.all or
Promise.when, but DrBoolean answered my question by saying it wasn't a real
monad because it was impure (side effects are possible). And yes, I can see
that, I read earlier something that went over my head about how Promise doesn't
provide the necessary identity equality or something the way Monads do.

I would say that the more I learn, the more I can see how Ruby made a design
tradeoffs in making the use of parentheses for function call optional. In JS,
it's possible to pass around a function as easily as a variable, whereas in
Ruby, it's necessary to use method(:function_name) to get that method. Even
then, the ability to unbind a method to pass it around is limited to the class
that it was defined in, whereas in JS, the function can be passed around and
bound to any other objects as needed.

See also:

* [Arcaders' Rust Tutorial](1)
* [Writing chat in Rust](2)

[1]: http://jadpole.github.io/arcaders/arcaders-1-1/
[2]: https://nbaksalyar.github.io/2015/07/10/writing-chat-in-rust.html
[3]: https://github.com/DrBoolean/mostly-adequate-guide
