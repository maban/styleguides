# Adding a book

To add a book:

1. [create a new file within the _resourcebook folder](https://github.com/maban/styleguides/new/gh-pages/_resourcebook) (the same one as this README). 
2. Give it a name that's the same as the title of the book, with words separated by hyphens, with .md at the end.
3. Paste the following templating code into it:

```
---
title: Title of book
link: A static link to the book (preferably the author's own book page on their site)
author: The author's name
publisher: The publisher
---

An optional short description of the book goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Example

Here's an example of a book I've added to the _resourcebook folder:

```
---
title: Front-End Style Guides
link: http://maban.co.uk/projects/front-end-style-guides/
author: Anna Debenham
publisher: Five Simple Steps
---

A book about front-end style guides
```
