/// <reference path="../angular-crud/angular-crud.d.ts" />
/**
* Created by e1009811 on 5/1/2014.
*/
declare class ResourceService implements IResourceService {
    public name: string;
    public type: string;
    public resource: any;
    public items: any[];
    public currentItem: any;
    public currentItemIndex: number;
    public searchModel: any;
    public getListTime: any;
    public metadata: any[];
    constructor($resource: any);
    public onGetListSuccess(httpResponse: any): any;
    public onGetListError(httpResponse: any): void;
    public getList(params: any): ng.IPromise<any>;
    public createItem(params: any, item: any): ng.IPromise<any>;
    public getItem(params: any): ng.IPromise<any>;
    public updateItem(params: any, item: any): ng.IPromise<any>;
    public deleteItem(params: any, item: any): ng.IPromise<any>;
}
