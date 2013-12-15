---
layout: post
title: "Getting Scala Syntax in Vim"
date: 2013-05-23 14:54
comments: true
categories: 
---

Vim unfortunately does not currently have syntax, indentation, and filetype detection
built in for Scala. It turned out that there is an answer to that question on
[Stackover](http://stackoverflow.com/questions/3626203/text-editor-for-scala).

Basically, the Scala distribution comes with those files, which can be added to
your `~/.vim/` directory.

Or, just type this in:

    mkdir -p ~/.vim/{ftdetect, indent, syntax}
    for d in ftdetect index syntax;
      do wget -O ~/.vim/$d/scala.vim http://github.com/scala/scala-dist/raw/master/tool-support/src/vim/$d/scala.vim;
    done

It creates the `ftdetect`, `indent`, and `syntax` directories, creating `.vim`
if it doesn't exist yet, and then go through each directory to wget
the file from the Scala distribution.
