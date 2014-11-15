# Style Guide Resources

Temporary domain: http://styleguides.maban.co.uk

This site lists lots of useful resources to help you learn about and create your own Front-End Style Guides and Pattern Libraries.

Best of all, you can add your own resources to share with others. And you don't even need to download any files to do that, you can do it all within GitHub's web interface.

## To do

* Add screenshots to resources that are examples
* Transfer all the resources from [https://gimmebar.com/collection/4ecd439c2f0aaad734000022/front-end-styleguides](Gimmiebar)
* Set up a domain

## How to add resources the easy way

The site uses a templating system called Jekyll that generates static HTML files, and makes it easy (hopefully) to add files that share the same template. GitHub plays nicely with Jekyll, and lets you add and edit files using the web interface. So no need to download anything, you can do it straight in repository on GitHub.

First, you'll need to decide whether your resource is a book, article, tool, example, or talk.

The only folders you'll need to worry about are:

* _resourcearticle
* _resourcebook
* _resourceexample
* _resourcetalk
* _resourcetool

If it's a tool, open up the _resourcetool folder. In there, you'll find a README that'll explain exactly what to do to.

## How to add resources the hard way

If you want to get this repo running locally on your machine, you'll need to get set up with Jekyll.

To install Jekyll, open up your command line and type…

```
gem install jekyll
```

…then…

```
jekyll serve
```

…to get the server address where the static files are built. You only need to worry about the files in the folders prefixed by _resource, and you can follow the instructions in the README in each folder if you're not sure what to do.
