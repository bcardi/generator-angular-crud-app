# generator-angular-crud-app [![Build Status](https://secure.travis-ci.org/bcardi/generator-angular-crud-app.png?branch=master)](https://travis-ci.org/bcardi/generator-angular-crud-app)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-angular-crud-app from npm, run:

```bash
$ npm install -g generator-angular-crud-app
```

Finally, initiate the generator:

```bash
$ yo angular-crud-app
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Create a new CRUD project

### Prerequisites

You must know the singular and plural name of at least one resource you will access on the server

### Steps

1. Open WebStorm
1. If you had a previous project open, close it
1. Click on “Create New Project”
1. Enter a project name and location. Project type should be “Empty project”.
    * Suggestion: The project name should either be specified in TitleCase or words-and-dashes.
1. Open the terminal from View > Tool Windows > Terminal
1. In the terminal window, run yeoman to create your project files using the following command:
`
yo angular-crud-app
`
    * Note: It is normal to see a bunch of npm commands
1. Review the README setup instructions for the new resource (app/resource/README.MD)
1. Create the following file watchers (File > Settings > Project Settings > File Watchers). Accept all file watcher defaults unless otherwise specified.
    1. TypeScript
        * Compile main files only: checked
        * Arguments: $FileNameWithoutExtension$.ts --out $FileNameWithoutExtension$.js --sourcemap --declaration
        * Output paths to refresh: $FileNameWithoutExtension$.js:$FileNameWithoutExtension$.js.map:$FileNameWithoutExtension$.d.ts
    1. Less
        * Track only root files: checked
1. Manually run the file watchers
    1. Select the project folder in Project View panel
    1. Select "Help > Find Action" or (Ctrl + Shift + A) to open the find action popup window
    1. Set “Include non-menu items” to true
    1. Type the following text in the available input box: Run file watchers
    1. Double-click “Run File Watchers” from the drop down list
    1. See [Trigger file watcher manually](http://youtrack.jetbrains.com/issue/WEB-10043) for more details
1. Add Karma run configuration
    1. Select “Run > Edit Configurations”
    1. Click the plus icon and select Karma
    1. Set the following values. Accept defaults unless specified.
        * Name: All Tests
        * Configuration file: (select karma.conf.js from drop down)
1. Test Karma
    1. Set the current configuration drop down to “All Tests”
    1. Click the run icon
    1. When instructed, click the link to open the browser
    1. All tests should run without errors


## License

MIT
