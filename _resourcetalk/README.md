# Adding a talk

To add a talk:

1. [create a new file within the _resourcetalk folder](https://github.com/maban/styleguides/new/gh-pages/_resourcetalk) (the same one as this README). 
2. Give it a name that's the same as the title of the talk, with words separated by hyphens.
3. Paste the following templating code into it:

```
---
title:  Title of talk
link: A static link to the talk (A Lanyrd link is preferable because further resources about the talk can be added)
author: The speaker's name
conference: The conference that the talk was given at
---

An optional short description of the talk goes here
```

The text sandwiched between the --- --- is called "YAML front matter" and this takes the data and inserts it all into the template. The bit after that is the actual content.

**Do not add any links to the content** because the whole thing is wrapped in a link tag, so adding another link will stop it working.

## Example

Here's an example of a talk I've added to the _resourcetalk folder:

```
---
title: Design systems
link: https://www.youtube.com/watch?v=z_ZLkEZtwLk
author: Richard Saunders
conference: Zengenti Rocket Conference 2014
---
We are not designing for mobiles, tablets or desktops but a medium that is volatile. Richard Saunders looks at the elements that make up a responsible responsive design project in an ever changing landscape.
```