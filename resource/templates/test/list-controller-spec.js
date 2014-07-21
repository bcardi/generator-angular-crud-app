/**
 * Created by Bob on 7/7/2014.
 */
describe('<%= resourceNamePluralTitleCase %>ListController', function() {

    var <%= resourceNamePluralCamelCase %>ListController;
    var httpBackend;

    beforeEach(module("<%= appNameCamelize %>"));

    beforeEach(inject(function ($controller, $httpBackend) {

        httpBackend = $httpBackend;

        httpBackend.when("GET", "app/<%= resourceNamePlural %>/list-metadata.json").respond(
            {
                "form":{"sections": {"search": {"isOpen": true}}}
            }
        );

        /*
         httpBackend.when("GET", /http:\/\/[^/]*\/api\/<%= resourceNamePlural %>\?institution=111/).respond(
            []
         );
         */

        httpBackend.when("GET", /http:\/\/[^/]*\/api\/<%= resourceNamePlural %>/).respond(
            []
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
    });

    describe('list all rows', function(){
        it('should find 0 rows', function() {
            <%= resourceNamePluralCamelCase %>ListController.searchModel = {};
            <%= resourceNamePluralCamelCase %>ListController.getList();
            httpBackend.flush();
            expect(<%= resourceNamePluralCamelCase %>ListController.viewModel.length).toBe(0);
        })
    });

    /*
    describe('search by ?field-name', function(){
        it('should find ? rows', function() {
            <%= resourceNamePluralCamelCase %>ListController.searchModel = {"?field-name": "?field-value"};
            <%= resourceNamePluralCamelCase %>ListController.getList();
            httpBackend.flush();
            expect(<%= resourceNamePluralCamelCase %>ListController.viewModel.length).toBe(0);
        })
    });
    */

})