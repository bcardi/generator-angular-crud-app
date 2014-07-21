/*
 Todo: Define default metadata
 Todo: Edit list-metadata.json
 */

class <%= resourceNamePluralTitleCase %>ResourceService extends ResourceService implements IResourceService {
}

angular.module('app.<%= resourceNamePluralCamelCase %>')
    .factory('<%= resourceNamePluralTitleCase %>ResourceService', ['$resource', ($resource) => new <%= resourceNamePluralTitleCase %>ResourceService($resource)]);