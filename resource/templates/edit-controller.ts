///<reference path='../references.ts' />

/*
    Todo: Define default metadata
    Todo: Edit detail-metadata.json
 */

class <%= resourceNamePluralTitleCase %>EditController extends BaseEditController {

    public init(): void {
        /* @@Default metadata@@ */
        this.metadataBase = {
            "form": {
                "tabs": {
                },
                "sections": {
                }
            }
        }
        super.init();
    }

    public onGetItemSuccess(result): void {
        "use strict";
        super.onGetItemSuccess(result);
        this.showEditable = !this.viewModel.isReadonly;
        this.isReadonly = this.viewModel.isReadonly;
    }

    public validateForm(thisForm): string {
        "use strict";
        return super.validateForm(thisForm);
    }

    public updateItem(item): void {
        "use strict";
        /***** Special processing for couchdb sample app *****/
        item.metadata.form.tabs.functionality.isDisabled = false;
        /***** Special processing for couchdb sample app *****/
        super.updateItem(item);
    }
}

angular.module('app.<%= resourceNamePluralCamelCase %>')
    .controller('<%= resourceNamePluralTitleCase %>EditController', ['$injector', '<%= resourceNamePluralTitleCase %>ResourceService', 'MetadataService',
        ($injector, ResourceService, MetadataService) => new <%= resourceNamePluralTitleCase %>EditController(
            $injector,
            {
                resourceName: "<%= resourceNamePlural %>",
                formTag: "detail",
                ngRefs: [],
                resourceService: ResourceService,
                metadataService: MetadataService
            }
        )]);