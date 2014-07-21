///<reference path='../references.ts' />

/*
 Todo: Define default metadata
 Todo: Edit list-metadata.json
 */

class <%= resourceNamePluralTitleCase %>ListController extends BaseListController {
}

angular.module('app.<%= resourceNamePluralCamelCase %>')
    .controller('<%= resourceNamePluralTitleCase %>ListController', ['$injector', '<%= resourceNamePluralTitleCase %>ResourceService', 'MetadataService',
        ($injector, ResourceService, MetadataService) => new <%= resourceNamePluralTitleCase %>ListController(
            $injector,
            {
                resourceName: "<%= resourceNamePlural %>",
                formTag: "list",
                ngRefs: [],
                resourceService: ResourceService,
                metadataService: MetadataService
            }
        )]);