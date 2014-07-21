///<reference path='../angular-crud/angular-crud.d.ts' />
///<reference path='references.ts' />
/**
* Created by Bob on 5/4/2014.
*/
var ResourceService = (function () {
    function ResourceService($resource) {
        this.metadata = [];
        "use strict";
        this.name = "web-api";
        this.type = "service";
        this.resource = $resource('http://localhost:59263/api/:resourceName/:id', { id: '@id' }, {
            update: { method: 'PUT' }
        });
    }
    ResourceService.prototype.getList = function (params) {
        "use strict";
        var queryParams = { resourceName: params.resourceName };
        _.merge(queryParams, params.searchModel);
        return this.resource.query(queryParams).$promise;
    };

    ResourceService.prototype.createItem = function (params, item) {
        "use strict";
        return this.resource.create({ resourceName: params.resourceName }, item).$promise;
    };

    ResourceService.prototype.getItem = function (params) {
        "use strict";
        return this.resource.get({ resourceName: params.resourceName }, { id: params.id }).$promise;
    };

    ResourceService.prototype.updateItem = function (params, item) {
        "use strict";
        return this.resource.update({ resourceName: params.resourceName }, item).$promise;
    };

    ResourceService.prototype.deleteItem = function (params, item) {
        "use strict";
        return this.resource.delete({ resourceName: params.resourceName }, item).$promise;
    };
    return ResourceService;
})();

angular.module('angularCrud').factory('ResourceService', ['$resource', function ($resource) {
        return new ResourceService($resource);
    }]);
//# sourceMappingURL=resource-service.js.map
