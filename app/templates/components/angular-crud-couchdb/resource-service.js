///<reference path='../angular-crud/angular-crud.d.ts' />
///<reference path='references.ts' />
/**
* Created by e1009811 on 5/1/2014.
*/
var ResourceService = (function () {
    function ResourceService($resource) {
        this.metadata = [];
        "use strict";
        this.name = "couchdb";
        this.type = "nosql";
        this.resource = $resource('', { protocol: 'http:', server: 'localhost:5984' }, {
            create: {
                url: ':protocol//:server/:resourceName/_design/api/_update/save/:docId',
                method: 'POST',
                params: { docId: '@id' }
            },
            update: {
                url: ':protocol//:server/:resourceName/_design/api/_update/save/:docId',
                method: 'PUT',
                params: { docId: '@id' }
            },
            delete: {
                url: ':protocol//:server/:resourceName/:docId',
                method: 'DELETE',
                params: { docId: '@id', rev: '@_rev' }
            },
            query: {
                url: ':protocol//:server/:resourceName/_design/api/_list/all/default',
                method: 'GET',
                isArray: true
            },
            get: {
                url: ':protocol//:server/:resourceName/_design/api/_show/detail/:docId',
                method: 'GET',
                params: { docId: '@id' }
            },
            counter: {
                url: ':protocol//:server/counters/_design/api/_update/counter/:resourceName',
                method: 'POST',
                params: { resourceName: '@resourceName' }
            }
        });
    }
    ResourceService.prototype.getList = function (params) {
        "use strict";
        return this.resource.query({ resourceName: params.resourceName }).$promise;
    };

    ResourceService.prototype.createItem = function (params, item) {
        var _this = this;
        "use strict";

        //var _this = this;
        if (item.id) {
            return this.resource.create({ resourceName: params.resourceName }, item).$promise;
        } else {
            return this.resource.counter({}, { resourceName: params.resourceName }).$promise.then(function (data) {
                item.id = '' + data.counter;
                return _this.resource.create({ resourceName: params.resourceName }, item).$promise;
            });
        }
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
/*
Create "_design/api" document in database
curl -X PUT http://127.0.0.1:5984/work-requests
curl -X PUT http://127.0.0.1:5984/work-requests/_design/api --data-binary @mydesign.json
{
"_id": "_design/api",
"lists": {
"all": "function(head, req) { var values = []; while (row = getRow()) { values.push(row.value); } return JSON.stringify(values); }"
},
"shows": {
"detail": "function(doc, req) { var myDoc = JSON.parse(JSON.stringify( doc )); delete myDoc['_revisions']; myDoc.id = myDoc._id; return { 'json': myDoc }; }"
},
"views": {
"default": {
"map": "function (doc){ var myDoc = JSON.parse(JSON.stringify( doc )); myDoc.id = myDoc._id; emit(myDoc._id, myDoc); }"
}
}
}
*/
//# sourceMappingURL=resource-service.js.map
