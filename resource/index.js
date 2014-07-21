'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ResourceGenerator = yeoman.generators.Base.extend({

    constructor: function() {
        // Calling the super constructor is important so our generator is correctly setup
        yeoman.generators.Base.apply(this, arguments);
        //console.log('this.options='+JSON.stringify(this.options));
    },

    init: function (args) {
        //console.log('You called the resource subgenerator with the argument ' + this.name + '.');

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

    askForResource: function () {
        var done = this.async();

        var resourceNameSingularPrompt = {
            name: 'resourceNameSingular',
            message: 'What is the singular name of your first resource (lower-case-with-dashes)?'
        };

        var resourceNamePluralPrompt = {
            name: 'resourceNamePlural',
            message: 'What is the plural name of your first resource (lower-case-with-dashes)?'
        };

        this.prompt(resourceNameSingularPrompt, function (props) {
            this.resourceNameSingular = props.resourceNameSingular;
            resourceNamePluralPrompt.default = this.resourceNameSingular+'s';
            this.prompt(resourceNamePluralPrompt, function (props) {
                this.resourceNamePlural = props.resourceNamePlural;
                done();
            }.bind(this));
        }.bind(this));
    },

    prep: function() {
        this.resourceNameSingularCamelCase = this.resourceNameSingular.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        this.resourceNamePluralCamelCase = this.resourceNamePlural.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });

        this.resourceNameTitle = this.resourceNamePlural.replace(/-/g, ' ');
        this.resourceNameTitle = this.resourceNameTitle.replace(/\b./g, function(m){ return m.toUpperCase(); });
        this.resourceNamePluralTitleCase = this.resourceNameTitle.replace(' ', '');
    },

    createFolders: function() {
        //this.mkdir('app/'+this.resourceNamePlural);
        //this.mkdir('test/'+this.resourceNamePlural);
    },

    create: function() {
        this.directory('detail', 'app/'+this.resourceNamePlural+'/detail');
        this.copy('detail.html', 'app/'+this.resourceNamePlural+'/detail.html');
        this.copy('detail-metadata.json', 'app/'+this.resourceNamePlural+'/detail-metadata.json');
        this.copy('detail-metadata.json', 'app/'+this.resourceNamePlural+'/detail-metadata.sample.json');
        this.template('edit-controller.ts', 'app/'+this.resourceNamePlural+'/edit-controller.ts');
        this.copy('index.ts', 'app/'+this.resourceNamePlural+'/index.ts');
        this.copy('list.html', 'app/'+this.resourceNamePlural+'/list.html');
        this.template('list-controller.ts', 'app/'+this.resourceNamePlural+'/list-controller.ts');
        this.copy('list-metadata.json', 'app/'+this.resourceNamePlural+'/list-metadata.json');
        this.template('module.ts', 'app/'+this.resourceNamePlural+'/module.ts');
        this.template('new-controller.ts', 'app/'+this.resourceNamePlural+'/new-controller.ts');
        this.template('resource-service.ts', 'app/'+this.resourceNamePlural+'/resource-service.ts');
        this.template('README.md', 'app/'+this.resourceNamePlural+'/README.md');

        this.template('test/list-controller-spec.js', 'test/'+this.resourceNamePlural+'/list-controller-spec.js');
    }
});

module.exports = ResourceGenerator;



/*
 this.prompt(prompts, function (props) {
 this.appNameDashes = props.appNameDashes;
 this.resourceNameSingular = props.resourceNameSingular;
 this.resourceNamePlural = props.resourceNamePlural;

 done();
 }.bind(this));
 */