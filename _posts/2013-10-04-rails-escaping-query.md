---
layout: post
title: "Rails escaping query"
date: 2013-10-04 23:50
comments: true
categories: Rails ActiveRecord
---

Occasionally, I got notified about errors like a bad query involving a name like
O'Brian.  I didn't understand what the problem might have been, because it looked
perfectly fine.  O'Brian is a named faked for protection of privacy.

Recently, I took a closer look at what the problem might be, especially with my
greater understanding of SQL.  It looked like "O'Brian" wasn't being properly
escaped.  To query for a name like O'Brian, it is required that you use O''Brian.

This began an adventure of figuring out how to get ActiveRecord to escape the
name.  It turned out to be @connection.quote("O'Brian")@.  This happened because
we were using a search gem that was designed to query for a single term.  On
more than one columns, we used the Ruby map block, but the way it was handled
before turned out to have been unsafe.

In the end, the code was doing something like @#{column_name} ILIKE '%#{term}%'@,
and I knew enough that using string interpolation would mean it wasn't being
properly escaped.

Someone could probably type @%'; DROP TABLE clients; --@ and we would have been
screwed.  Even though it was an internal site that isn't for outside users, it's
still excellent practice.
