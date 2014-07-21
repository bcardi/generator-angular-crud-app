///<reference path='index.ts' />
///<reference path='references.ts' />

/*
 Todo: Set all @@ values
 */

var app = angular.module('<%= appNameCamelize %>',['ui.bootstrap', 'xeditable', 'ngRoute', 'ngGrid', 'angularCrud'])
    .config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {

            //commenting out this line (switching to hashbang mode) breaks the app
            //-- unless # is added to the templates
            //$locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'app/home.html'
                })
        }]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});