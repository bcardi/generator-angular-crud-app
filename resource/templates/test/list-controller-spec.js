/**
 * Created by Bob on 7/7/2014.
 */
describe('<%= resourceNamePluralTitleCase %>ListController', function() {

    var <%= resourceNamePluralCamelCase %>ListController;

    beforeEach(module("<%= appNameCamelize %>"));
    beforeEach(inject(function ($controller, $httpBackend) {

        httpBackend = $httpBackend;

        httpBackend.when("GET", "app/<%= resourceNamePlural %>/list-metadata.json").respond(
            {
                "form":{"sections": {"search": {"isOpen": true}}}
            }
        );

        httpBackend.when("GET", "http://localhost:9200/angularjs-crud/<%= resourceNamePlural %>/_search").respond(
            {
                "took" : 1,
                "timed_out" : false,
                "_shards" : {
                    "total" : 5,
                    "successful" : 5,
                    "failed" : 0
                },
                "hits" : {
                    "total" : 4,
                    "max_score" : 1.0,
                    "hits" : [ {
                        "_index" : "angularjs-crud",
                        "_type" : "<%= resourceNamePlural %>",
                        "_id" : "41",
                        "_score" : 1.0,
                        "_source":{"requestTypeId":"ADDATM","stateId":"DRAFT","expedited":false,"tabStatus":"","isReadonly":false,"custRequestNo":"222","institution":"444","deviceId":"222","installDate":"2014-07-31","metadata":{"form":{"tabs":{"request":{"isDisabled":false},"location":{"isDisabled":false},"functionality":{"isDisabled":false},"telecom":{"isDisabled":true},"surcharging":{"isDisabled":true},"monitoring":{"isDisabled":true},"contacts":{"isDisabled":true},"comments":{"isDisabled":true},"staging":{"isDisabled":true}}}},"id":"41"}
                    }, {
                        "_index" : "angularjs-crud",
                        "_type" : "<%= resourceNamePlural %>",
                        "_id" : "40",
                        "_score" : 1.0,
                        "_source":{"requestTypeId":"ADDATM","stateId":"DRAFT","expedited":false,"tabStatus":"","isReadonly":false,"custRequestNo":"111","institution":"111","deviceId":"111","installDate":"2014-07-31","metadata":{"form":{"tabs":{"request":{"isDisabled":false},"location":{"isDisabled":false},"functionality":{"isDisabled":true},"telecom":{"isDisabled":true},"surcharging":{"isDisabled":true},"monitoring":{"isDisabled":true},"contacts":{"isDisabled":true},"comments":{"isDisabled":true},"staging":{"isDisabled":true}}}},"id":"40"}
                    }, {
                        "_index" : "angularjs-crud",
                        "_type" : "<%= resourceNamePlural %>",
                        "_id" : "42",
                        "_score" : 1.0,
                        "_source":{"requestTypeId":"ADDATM","stateId":"DRAFT","expedited":false,"tabStatus":"","isReadonly":false,"custRequestNo":"777","institution":"777","deviceId":"777","installDate":"2014-07-31","metadata":{"form":{"tabs":{"request":{"isDisabled":false},"location":{"isDisabled":false},"functionality":{"isDisabled":true},"telecom":{"isDisabled":true},"surcharging":{"isDisabled":true},"monitoring":{"isDisabled":true},"contacts":{"isDisabled":true},"comments":{"isDisabled":true},"staging":{"isDisabled":true}}}},"id":"42"}
                    }, {
                        "_index" : "angularjs-crud",
                        "_type" : "<%= resourceNamePlural %>",
                        "_id" : "43",
                        "_score" : 1.0,
                        "_source":{"requestTypeId":"ADDATM","stateId":"DRAFT","expedited":false,"tabStatus":"","isReadonly":false,"custRequestNo":"123","institution":"111","deviceId":"123","installDate":"2014-07-31","metadata":{"form":{"tabs":{"request":{"isDisabled":false},"location":{"isDisabled":false},"functionality":{"isDisabled":true},"telecom":{"isDisabled":true},"surcharging":{"isDisabled":true},"monitoring":{"isDisabled":true},"contacts":{"isDisabled":true},"comments":{"isDisabled":true},"staging":{"isDisabled":true}}}},"id":"43"}
                    } ]
                }
            }
        );

        <%= resourceNamePluralCamelCase %>ListController = $controller('<%= resourceNamePluralTitleCase %>ListController');

        httpBackend.flush();
    }))

    it('should initialize properly', function(){
        expect(<%= resourceNamePluralCamelCase %>ListController.context.resourceName).toBe("<%= resourceNamePlural %>");
        expect(<%= resourceNamePluralCamelCase %>ListController.context.formTag).toBe("list");
        expect(<%= resourceNamePluralCamelCase %>ListController.context.ngRefs).toEqual([]);
        expect(<%= resourceNamePluralCamelCase %>ListController.resetFocus).toBe(true);
        expect(<%= resourceNamePluralCamelCase %>ListController.isModelLoaded).toBe(false);
        expect(<%= resourceNamePluralCamelCase %>ListController.showEditable).toBe(false);
        expect(<%= resourceNamePluralCamelCase %>ListController.isReadonly).toBe(true);
        expect(<%= resourceNamePluralCamelCase %>ListController.searchModel).toEqual({});
        //expect(<%= resourceNamePluralCamelCase %>ListController.messages).toBe("");
        //expect(<%= resourceNamePluralCamelCase %>ListController.primaryGridOptions).toEqual({});

        expect(<%= resourceNamePluralCamelCase %>ListController.metadata.form.sections.search.isOpen).toBe(true);
        expect(<%= resourceNamePluralCamelCase %>ListController.viewModel.length).toBe(4);
    });

    describe('search by institution', function(<%= resourceNamePluralCamelCase %>ListController){

        beforeEach(inject(function ($controller, $httpBackend) {

            httpBackend = $httpBackend;

            httpBackend.when("GET", "http://localhost:9200/angularjs-crud/<%= resourceNamePlural %>/_search?q=%2Binstitution:111+").respond(
                {
                    "took" : 1,
                    "timed_out" : false,
                    "_shards" : {
                        "total" : 5,
                        "successful" : 5,
                        "failed" : 0
                    },
                    "hits" : {
                        "total" : 2,
                        "max_score" : 0.30685282,
                        "hits" : [ {
                            "_index" : "angularjs-crud",
                            "_type" : "<%= resourceNamePlural %>",
                            "_id" : "40",
                            "_score" : 0.30685282,
                            "_source":{"requestTypeId":"ADDATM","stateId":"DRAFT","expedited":false,"tabStatus":"","isReadonly":false,"custRequestNo":"111","institution":"111","deviceId":"111","installDate":"2014-07-31","metadata":{"form":{"tabs":{"request":{"isDisabled":false},"location":{"isDisabled":false},"functionality":{"isDisabled":true},"telecom":{"isDisabled":true},"surcharging":{"isDisabled":true},"monitoring":{"isDisabled":true},"contacts":{"isDisabled":true},"comments":{"isDisabled":true},"staging":{"isDisabled":true}}}},"id":"40"}
                        }, {
                            "_index" : "angularjs-crud",
                            "_type" : "<%= resourceNamePlural %>",
                            "_id" : "43",
                            "_score" : 0.30685282,
                            "_source":{"requestTypeId":"ADDATM","stateId":"DRAFT","expedited":false,"tabStatus":"","isReadonly":false,"custRequestNo":"123","institution":"111","deviceId":"123","installDate":"2014-07-31","metadata":{"form":{"tabs":{"request":{"isDisabled":false},"location":{"isDisabled":false},"functionality":{"isDisabled":true},"telecom":{"isDisabled":true},"surcharging":{"isDisabled":true},"monitoring":{"isDisabled":true},"contacts":{"isDisabled":true},"comments":{"isDisabled":true},"staging":{"isDisabled":true}}}},"id":"43"}
                        } ]
                    }
                }
            );

            <%= resourceNamePluralCamelCase %>ListController = $controller('<%= resourceNamePluralTitleCase %>ListController');
            httpBackend.flush();
        }))

        it('should find 2 rows', function() {
            <%= resourceNamePluralCamelCase %>ListController.searchModel = {"institution": "111"};
            <%= resourceNamePluralCamelCase %>ListController.getList();
            httpBackend.flush();
            expect(<%= resourceNamePluralCamelCase %>ListController.viewModel.length).toBe(2);
        })
    });

})