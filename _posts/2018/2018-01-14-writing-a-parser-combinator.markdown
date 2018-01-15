---
title: "Writing a Parser Combinator in Rust"
layout: post
tags:
  - programming
  - rust
category: programming
subtitle: "I'm trying to write a parser combinator in Rust and I'm halfway
through"

---

## Writing a Parser Combinator in Rust

I've been following along the guide introducing [parser combinator in Ruby][1]
in an attempt to rewrite it in Rust. Here's a gist of my output with an
explanation to follow

<script src="https://gist.github.com/alanjcfs/8494a8ed62faf1b6a6d021bfe5a88fbc.js"></script>

I got as far as creating `alt` for a kind of switch statements, but I haven't
been able to figure out how to do `ref`, which requires referring to functions
so that they can be called without getting into infinite recursion. I'm still
thinking about how to do it.

[1]: https://blog.jcoglan.com/2017/07/06/introduction-to-parser-combinators/
