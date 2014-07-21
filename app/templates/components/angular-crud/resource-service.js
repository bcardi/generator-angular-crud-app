///<reference path='../angular-crud/angular-crud.d.ts' />
var ResourceService = (function () {
    function ResourceService($resource) {
        this.metadata = [];
        "use strict";
    }
    ResourceService.prototype.onGetListSuccess = function (httpResponse) {
        "use strict";
        return null;
    };

    ResourceService.prototype.onGetListError = function (httpResponse) {
        "use strict";
        return null;
    };

    ResourceService.prototype.getList = function (params) {
        "use strict";
        return null;
    };

    ResourceService.prototype.createItem = function (params, item) {
        "use strict";
        return null;
    };

    ResourceService.prototype.getItem = function (params) {
        "use strict";
        return null;
    };

    ResourceService.prototype.updateItem = function (params, item) {
        "use strict";
        return null;
    };

    ResourceService.prototype.deleteItem = function (params, item) {
        "use strict";
        return null;
    };
    return ResourceService;
})();

angular.module('angularCrud').factory('ResourceService', ['$resource', function ($resource) {
        return new ResourceService($resource);
    }]);
//# sourceMappingURL=resource-service.js.map
