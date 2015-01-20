---
title: "Changing to JSONB in Postgres"
layout: post
category: postgresql
tags: postgresql
---

If you have a column as an existing json datatype, you can convert to the new
jsonb datatype by using the following command:

    -- If you have already set a default type, you must drop it
    -- Subtitute table and column with your own
    ALTER TABLE table ALTER COLUMN column DROP DEFAULT;

    ALTER TABLE table ALTER COLUMN column TYPE jsonb CAST(column AS jsonb);

    -- Restore the default. In this case, it is set to an Object.
    ALTER TABLE table ALTER COLUMN column SET DEFAULT '{}'::jsonb;
