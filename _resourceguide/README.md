# Adding a guide

A guide is focused either on how a site or organisation write their markup or content. This might be a set of CSS guidelines, or instructions on how to write content for the site.

To add a guide:

1. [create a new file within the _resourceguide folder](https://github.com/maban/styleguides/new/gh-pages/_resourceguide) (the same one as this README). 
2. Give the file a name that's the guide's name, with words separated by hyphens, and .md at the end.
3. Paste the following templating code into it:

```
---
title: Title of guide
link: A static link to the guide
author: The person/company that wrote the guide
type: What type of guide it is
---

An optional short description of the guide goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Example

Here's an example of a talk I've added to the _resourceguide folder:

```
---
title: GitHub CSS Styleguide
link: https://github.com/styleguide/css
author: Github
type: CSS Style Guide
---

Github's guidelines on writing CSS
```
