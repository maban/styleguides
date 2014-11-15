# Adding an article

To add an article:

1. [create a new file within the _resourcearticle folder](https://github.com/maban/styleguides/new/gh-pages/_resourcearticle) (the same one as this README). 
2. Give it a name that's the same as the title of the article, with words separated by hyphens, with .md at the end.
3. Paste the following templating code into it:

```
---
title:  Title of article
link: A static link to the article
author: The author's name
site: The site that the linked article is published on
---

An optional short description of the article goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Example

Here's an example of an article I've added to the _resourcearticle folder:

```
---
title:  Front-End Style Guides
link: http://24ways.org/2011/front-end-style-guides/
author: Anna Debenham
site: 24 ways
---
An introduction to Front-End Style Guides.
```
