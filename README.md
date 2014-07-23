# Create a new CRUD project

## Prerequisites

You must know the singular and plural name of at least one resource you will access on the server

### Install Yeoman

Since we are installing Yeoman on the global npm workspace, you can run the command from any folder.

    > npm install -g yo

### Install the generator

1. Get the generator-angular-crud-app from version control
1. From a command prompt, run the `npm link` command from within the generator-angular-crud-app folder. The first time
you run this command, npm will download all of the required dependencies.

        generator-angular-crud-app> npm link

**Note:** When updates are made to the generator-angular-crud-app, you will need to repeat these steps.

### Choose and setup a backend

The generated apps require a backend for storing and retrieving data. The default is ElasticSearch, which provides 
all of the features for rapid prototyping of a CRUD app. You can also use CouchDB, but it requires more setup and you will 
not be able to filter search requests. Another option is using your own custom web services application.

You can download the ElasticSearch Windows installer from here: 
[https://github.com/salyh/elasticsearch-msi-installer/releases](https://github.com/salyh/elasticsearch-msi-installer/releases). Simply
download and run the latest "*.msi" file. You should be able to use all the chosen defaults during the install process.

You can download the CouchDB Windows installer from here:
[http://couchdb.apache.org](http://couchdb.apache.org). Follow the instructions on the site to
download and run the latest installer. You should be able to use all the chosen defaults during the install process. 
Install instructions can be found here: [http://docs.couchdb.org/en/latest](http://docs.couchdb.org/en/latest).

## Create new project

**Note:** All of the terminal commands can be run from either a Windows command prompt or the WebStorm Terminal. 

1. Create a folder for your new project. The folder name should either be specified in TitleCase or words-and-dashes.

        > mkdir my-new-project
        
1. Set the current folder to your new project folder

        > cd my-new-project
        
1. Now, run yeoman to create your project files.

        my-new-project> yo angular-crud-app

    **Note:** It is normal to see a lot of output from this command. Bower and npm will also install dependencies.
    
1. Review the output of the previous step and correct all bower or npm install errors.
    
1. Open your new project in WebStorm
    
1. Follow the instructions in the README.MD file for the resource created for your app (app/resource/README.MD)

1. Create the following file watchers (File > Settings > Project Settings > File Watchers). Accept all file watcher defaults unless otherwise specified.
    1. TypeScript
        * **Compile main files only:** checked
        * **Arguments:** $FileNameWithoutExtension$.ts --out $FileNameWithoutExtension$.js --sourcemap --declaration
        * **Output paths to refresh:** $FileNameWithoutExtension$.js:$FileNameWithoutExtension$.js.map:$FileNameWithoutExtension$.d.ts
    1. Less
        * **Track only root files:** checked
        
1. Manually run the file watchers
    1. Select the project folder in Project View panel
    1. Select "Help > Find Action" or (Ctrl + Shift + A) to open the find action popup window
    1. Set “Include non-menu items” to true
    1. Type the following text in the available input box: Run file watchers
    1. Double-click “Run File Watchers” from the drop down list
    1. See [Trigger file watcher manually](http://youtrack.jetbrains.com/issue/WEB-10043) for details on other ways to manually run the file watchers.
    
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
