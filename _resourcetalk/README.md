# Adding a talk

To add a talk:

1. [create a new file within the _resourcetalk folder](https://github.com/maban/styleguides/new/gh-pages/_resourcetalk) (the same one as this README). 
2. Give it a name that's the same as the title of the talk, with words separated by hyphens, with .md at the end.
3. Paste the following templating code into it:

```
---
title: Title of talk
link: A static link to the talk (A Lanyrd link is preferable because further resources about the talk can be added)
author: The speaker's name
conference: The conference that the talk was given at
date: The date the talk was given
image: file name with extension
---

An optional short description of the talk goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Adding an image

*Images will only show on the homepage if the resource is also recommended*. This is to keep the page weight down.

If you want to add an image, the dimensions will need to be **800px x 600px**. The file size should be no larger than 90KB. Save it in the images/screenshots folder, and give it a file name that's the same or similar to the title of the talk.

## Example

Here's an example of a talk I've added to the _resourcetalk folder:

```
---
title: Future Friendly Style Guides
link: https://speakerdeck.com/lukebrooker/future-friendly-style-guides
author: Luke Brooker
conference: Web Directions
status: recommended
image: future-friendly-styleguides.jpg
---

How style guides can help in a responsive design workflow.
```
