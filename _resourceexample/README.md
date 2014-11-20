# Adding an example

To add an example:

1. [create a new file within the _resourceexample folder](https://github.com/maban/styleguides/new/gh-pages/_resourceexample) (the same one as this README). 
2. Give it a name that's the same as the site the example is from, with words separated by hyphens, with .md at the end.
3. Paste the following templating code into it:

```
---
title: Title of site
link: A static link to the example or GitHub repo
image: file name with extension
tags:
 - atag
 - anothertag
---

An optional short description of the site goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Tags

You can add optional tags to a resource, but they must be from one of the following existing tags:

* branding
* frontend
* backend
* voiceandtone
* writing
* designlanguage
* code
* patterns

## Adding an image

*Images will only show on the homepage if the resource is also recommended*. This is to keep the page weight down.

If you want to add an image, the dimensions will need to be **800px x 400px**. The file size should be no larger than 90KB. Save it in the images/screenshots folder, and give it a file name that's the same or similar to the title of the site.

## Example

Here's an example of an example I've added to the _resourceexample folder:

```
---
title: Starbucks
link: http://www.starbucks.com/static/reference/styleguide/
image: starbucks.jpg
tags:
 - frontend
---

A style guide for Starbucks's website
```
