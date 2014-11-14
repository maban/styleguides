# Adding a link to an article

To add an article, [create a new file within the _resourcearticle folder](https://github.com/maban/styleguides/new/gh-pages/_resourcearticle) and paste this templating code into it:

```
---
title:  Title of article
link: A static link to the article
author: The author's name
site: The site that the linked article is published on
---

An optional short description of the article goes here
```

The bit sandwiched between the --- is called YAML front matter and this takes the links and inserts the author's name into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag.

## Example

```
---
title:  Front-End Style Guides
link: http://24ways.org/2011/front-end-style-guides/
author: Anna Debenham
site: 24 ways
---
An introduction to Front-End Style Guides.
```