# Adding a tool

To add a tool:

1. [create a new file within the _resourcetool folder](https://github.com/maban/styleguides/new/gh-pages/_resourcetool) (the same one as this README). 
2. Give it a name that's the same as the tool, with words separated by hyphens, with .md at the end.
3. Paste the following templating code into it:

```
---
title:  Title of talk
link: A static link to the site or GitHub repo
author: The creator's name
language: The language/s used other than HTML and CSS (e.g. PHP, Jekyll, Sass) and platform if relevant (e.g. Wordpress)
---

An optional short description of the tool goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Example

Here's an example of a tool I've added to the _resourcetool folder:

```
---
title: Barebones
link: http://barebones.paulrobertlloyd.com/
author: Paul Robert Lloyd
language: PHP
---
An initial directory setup, style guide and pattern primer
```
