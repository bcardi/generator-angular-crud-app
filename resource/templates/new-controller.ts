///<reference path='../references.ts' />

/*
 Todo: Define default metadata
 Todo: Edit list-metadata.json
 */

class <%= resourceNamePluralTitleCase %>NewController extends BaseNewController {

    constructor($injector, context) {
        "use strict";
        super($injector, context);
        this.viewModel.tabStatus = "";
        this.viewModel.isReadonly = false;
    }

    createItem(item) {
        "use strict";
        super.createItem(item);
    }
}

angular.module('app.<%= resourceNamePluralCamelCase %>')
    .controller('<%= resourceNamePluralTitleCase %>NewController', ['$injector', '<%= resourceNamePluralTitleCase %>ResourceService', 'MetadataService',
        ($injector, ResourceService, MetadataService) => new <%= resourceNamePluralTitleCase %>NewController(
            $injector,
            {
                resourceName: "<%= resourceNamePlural %>",
                formTag: "detail",
                ngRefs: [],
                resourceService: ResourceService,
                metadataService: MetadataService
            }
        )]);
