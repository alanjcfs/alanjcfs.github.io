---
layout: post
title: "Efficient ActiveRecord Queries"
date: 2013-10-13 11:48
comments: true
categories: 
---

My experience with Rails and ActiveRecord has given me a perspective into how
the ORM works.  I understand why people don't like it.  Moreover, there are a
lot of different solutions to helping developers not have to deal with SQL,
which can be detrimental to the efficiencies of code.  Keeping ever in mind that
premature optimization is the root of all evil, it is important to know how to
make your query more efficient after successfully getting what you want.

Let's say you have a query that finds the owners with the last name of Williams,
and you are trying to get their accounts and the establishments that each
account owns.

An inefficient query would be:

{% highlight ruby %}
# establishments_controller.rb
owners = Owner.where(last_name: "Williams")

owners.collect(&:accounts).flatten.collect(&:establishments).select {
|establishment| establishment.name.include?("Foo") }
{% endhighlight %}

It uses the list of owners, get all the accounts for each owner, flatten the
list, then get the establishments for each account, and filter them by "Foo".
But that is a N+1 query because in SQL it does

{% highlight sql %}
-- Queries seen from development log.
SELECT * FROM accounts WHERE accounts.owner_id = 1
SELECT * FROM accounts WHERE accounts.owner_id = 2
SELECT * FROM accounts WHERE accounts.owner_id = 3
{% endhighlight %}

and then if each owner has 5 accounts, it would do 5 separate queries for each
owner:

{% highlight sql %}
SELECT * FROM establishments WHERE establishments.account_id = 1
SELECT * FROM establishments WHERE establishments.account_id = 2
SELECT * FROM establishments WHERE establishments.account_id = 3
SELECT * FROM establishments WHERE establishments.account_id = 4
SELECT * FROM establishments WHERE establishments.account_id = 5
{% endhighlight %}

The database is being hit more than necessary.  Moreover, it's not necessarily
that the database can't handle inefficient queries, but the connection between
the application and the database is a big bottleneck.

This being ActiveRecord, the efficient solution would have been:

{% highlight ruby %}
owners = Owner.where(name: "Williams")

Establishment.joins(accounts: :owner)
  .where(accounts: { owner_id: owners })
  .where("establishments.name ILIKE :term", term: "%Foo%")
{% endhighlight %}

{% highlight sql %}
  -- roughly equivalent SQL reconstructed in my head.
SELECT * FROM owners WHERE name = 'Williams';

SELECT * FROM establishments
INNER JOIN accounts
ON establishments.account_id = accounts.id
INNER JOIN owners
ON accounts.owner_id = owners.id
WHERE owners.id IN (1, 2, 3) AND
{% endhighlight %}

Only two queries needed.  It could probably be reduced to one query
using the lesser-known ActiveRecord method `merge`, which would add the query
for owners within the establishments query instead of using numbers like
`IN (1, 2, 3)`
