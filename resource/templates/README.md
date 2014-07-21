## Todo: Add to app/index.ts

    ///<reference path='<%= resourceNamePlural %>/index.ts' />

## Todo: Add to index.html

    <li ng-class="{ active: nc.isActive('/<%= resourceNamePlural %>')}"><a href="#/<%= resourceNamePlural %>"><%= resourceNameTitle %></a></li>

## Todo: Add to the 'var app = angular.module' statement in app/app.ts

    'app.<%= resourceNamePluralCamelCase %>'

## Todo: Add to your routing statement in the app/app.ts file

    .when('/<%= resourceNamePlural %>/new', {
        templateUrl: 'app/<%= resourceNamePlural %>/detail.html',
        controller: '<%= resourceNamePluralTitleCase %>NewController',
        controllerAs: "dc"
    })
    .when('/<%= resourceNamePlural %>/:id', {
        templateUrl: 'app/<%= resourceNamePlural %>/detail.html',
        controller: '<%= resourceNamePluralTitleCase %>EditController',
        controllerAs: "dc"
    })
    .when('/<%= resourceNamePlural %>', {
        templateUrl: 'app/<%= resourceNamePlural %>/list.html',
        controller: '<%= resourceNamePluralTitleCase %>ListController',
        controllerAs: "dc"
    })
    
## Todo: Layout list page in app/<%= resourceNamePlural %>/list.html

## Todo: Layout detail page in app/<%= resourceNamePlural %>/detail.html

## Todo: Update test spec test/<%= resourceNamePlural %>//list-controller-spec.js
