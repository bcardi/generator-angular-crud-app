/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../lodash/lodash.d.ts" />
/**
* Created by Bob on 5/17/2014.
*/
declare var filters: ng.IModule;
/**
* Created by Bob on 5/4/2014.
*/
declare class MetadataService implements IMetadataService {
    public resource: any;
    constructor($resource: any);
    public get(params: any): ng.IPromise<any>;
}
/**
* Created by Bob on 6/17/2014.
*/
interface IMetadataService {
    resource: any;
    get(params: any): ng.IPromise<any>;
}
/**
* Created by Bob on 7/8/2014.
*/
interface IResourceService {
    name: string;
    type: string;
    resource: any;
    items: any[];
    currentItem: any;
    currentItemIndex: number;
    searchModel: any;
    getListTime: any;
    metadata: any[];
    getList(params: any): ng.IPromise<any>;
    createItem(params: any, item: any): ng.IPromise<any>;
    getItem(params: any): ng.IPromise<any>;
    updateItem(params: any, item: any): ng.IPromise<any>;
    deleteItem(params: any, item: any): ng.IPromise<any>;
}
/**
* Created by Bob on 6/17/2014.
*/
interface IControllerContext {
    resourceName: string;
    formTag: string;
    ngRefs: string[];
    resourceService: any;
    metadataService: any;
}
/**
* Created by Bob on 5/5/2014.
*/
/**
* @area api
* @module angularCrud
* @ngdoc type
* @name BaseController
* @param {object} context ????.
* @description
* ????
*/
declare class BaseController {
    public ng: any;
    public context: IControllerContext;
    public resetFocus: boolean;
    public isModelLoaded: boolean;
    public showEditable: boolean;
    public isReadonly: boolean;
    public viewModel: any;
    public searchModel: any;
    public metadataBase: any;
    public metadata: any;
    public messages: string;
    public primaryGridOptions: any;
    public clearSearchModel(): void;
    static addNgRef(context: any, item: any): void;
    constructor($injector: any, context: IControllerContext);
    public init(): void;
    public loadData(): void;
    public getFormMetadata(): void;
    public onGetFormMetadataSuccess(result: any): void;
    public isTrue(value: any, defaultValue: any): void;
    public collapseAll(): void;
    public expandAll(): void;
    public onGetFormMetadataError(result: any): void;
    public getData(): void;
    public getList(): void;
    public onGetListSuccess(result: any): void;
    public onGetListError(result: any): void;
    public createItem(item: any): void;
    public onCreateSuccess(result: any): void;
    public onCreateError(result: any): void;
    public showItem(item: any): void;
    public showPreviousItem(): void;
    public showNextItem(): void;
    public getItem(id: any): void;
    public onGetItemSuccess(result: any): void;
    public refreshMetadata(metadata: any): void;
    public onGetItemError(result: any): void;
    public updateItem(item: any): void;
    public onUpdateItemSuccess(result: any): void;
    public onUpdateItemError(result: any): void;
    public deleteItem(item: any): void;
    public onDeleteItemSuccess(result: any): void;
    public onDeleteItemError(result: any): void;
    public doSubmit(isValid: any): void;
    public validateForm(thisForm: any): string;
}
declare class BaseDetailController extends BaseController {
    constructor($injector: any, context: any);
    public doSubmit(isValid: any): void;
}
declare class BaseEditController extends BaseController {
    constructor($injector: any, context: any);
    public getData(): void;
    public doSubmit(isValid: any): void;
}
declare class BaseListController extends BaseController {
    public getData(): void;
}
declare class BaseNewController extends BaseController {
    public init(): void;
    public doSubmit(isValid: any): void;
}
declare class BaseShowController extends BaseController {
    constructor($injector: any, context: any);
    public getData(): void;
    public doSubmit(isValid: any): void;
}
/**
* Created by Bob on 5/13/2014.
*/
declare class NavigationController {
    private $location;
    constructor($location: any);
    public isActive(viewLocation: string): boolean;
}
