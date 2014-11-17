# Adding a podcast episode

To add a podcast episode:

1. [create a new file within the _resourcepodcast folder](https://github.com/maban/styleguides/new/gh-pages/_resourcepodcast) (the same one as this README). 
2. Give the file a name that's the podcast's name (eg webahead), a hyphen, and episode number, with .md at the end.
3. Paste the following templating code into it:

```
---
title: Title of podcast episode
link: A static link to the podcast (preferably a link to the episode on the podcast's website rather than an iTunes link)
people: The names of the people talking on the podcast
podcast: The name of the podcast
date: The date the talk was given
---

An optional short description of the podcast episode goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Example

Here's an example of a talk I've added to the _resourcepodcast folder:

```
---
title: Starbucks
link: http://responsivewebdesign.com/podcast/starbucks.html
people: Lincoln Mongillo, Karen McGrane and Ethan Marcotte
podcast: Responsive Web Design
---

Starbucks considers mobile to be the first customer touchpoint. Lincoln Mongillo tells us why managing for “one web” forces them to focus on what’s important, and puts performance, accessibility, and security at the center of their design process.
```
