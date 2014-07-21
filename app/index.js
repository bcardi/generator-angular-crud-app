'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var AngularCrudAppGenerator = yeoman.generators.Base.extend({

    constructor: function() {
        // Calling the super constructor is important so our generator is correctly setup
        yeoman.generators.Base.apply(this, arguments);
    },

    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });

        this.appName = this.appname;

        if (this.appname.length >=3 && this.appname.toLowerCase().substring(this.appname.length-3) !== 'app') {
            this.appName += "App";
        }

        this.appNameWithDashes = this.appName.replace(/\s+/g, '-');
        this.appNameWithDashes = this.appNameWithDashes.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1] }).toLowerCase();

        this.appTitle = this.appNameWithDashes.replace(/-/g, ' ');
        this.appTitle = this.appTitle.replace(/\b./g, function(m){ return m.toUpperCase(); });

        this.appNameCamelize = this.appNameWithDashes.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    },

    askFor: function() {
        /*
        var done = this.async();

        // Have Yeoman greet the user.
        //this.log(yosay('Welcome to the marvelous AngularCrudApp generator!'));

        var projectNamePrompt = {
                name: 'appNameDashes',
                message: 'What is the name of your project (lower-case-with-dashes)?',
                default : this.appNameWithDashes
        };

        var projectTitlePrompt = {
                name: 'appTitle',
                message: 'What is the title of your project?'
        };

        this.prompt(projectNamePrompt, function (props) {
            this.appNameDashes = props.appNameDashes;

            projectTitlePrompt.default = this.appNameDashes.replace(/-/g, ' ');
            projectTitlePrompt.default = projectTitlePrompt.default.replace(/\b./g, function(m){ return m.toUpperCase(); });

            this.prompt(projectTitlePrompt, function (props) {
                this.appTitle = props.appTitle;
                done();
            }.bind(this));
        }.bind(this));
        */

    },

    prep: function() {
    },

    callSubGenerators: function() {
        var done = this.async();
        this.invoke("angular-crud-app:resource", {options:{}}, function() {
            done();
        });
    },

    app: function () {
        this.mkdir('app');
        this.mkdir('test');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_karma.conf.js', 'karma.conf.js');
    },

    projectfiles: function () {
        //this.copy('editorconfig', '.editorconfig');
        this.template('index.html', 'index.html');
        this.copy('app/app.less', 'app/app.less');
        this.template('app/app.ts', 'app/app.ts');
        this.copy('app/home.html', 'app/home.html');
        this.template('app/index.ts', 'app/index.ts');
        this.copy('app/references.ts', 'app/references.ts');
        //this.directory('typings', 'typings');
        this.directory('components', 'components');
        this.directory('images', 'images');
    }

});

module.exports = AngularCrudAppGenerator;
