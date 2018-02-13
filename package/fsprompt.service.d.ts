import { MatDialog } from '@angular/material/dialog';
import { IFsPromptConfig, FsValuesFunction } from './interfaces';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
export declare enum PromptType {
    confirm = "confirm",
    input = "input",
    select = "select",
    autocomplete = "autocomplete",
}
export declare enum ConverterType {
    observable = 0,
    promise = 1,
    array = 2,
}
export declare class FsPrompt {
    private dialog;
    /**
     * Values converter
     *
     * @param {Observable<T> | Promise<T> | Array<T> | FsValuesFunction} values
     * @returns {any}
     */
    static valuesConverter<T>(values: Observable<T> | Promise<T> | Array<T> | FsValuesFunction): any;
    constructor(dialog: MatDialog);
    /**
     * Open confirmation window and return close observable
     *
     * @param {IFsPromptConfig} config
     * @returns {Observable<any>}
     */
    confirm(config?: IFsPromptConfig): Observable<any>;
    /**
     * Open window with input field for filling
     *
     * @param {IFsPromptConfig} config
     * @returns {Observable<any> | boolean}
     */
    input(config?: IFsPromptConfig): Observable<any>;
    /**
     * Open modal with list
     *
     * @param {IFsPromptConfig} config
     */
    select(config?: IFsPromptConfig): Observable<any>;
    /**
     * Open modal with autocomplete
     *
     * @param {IFsPromptConfig} config
     * @returns {Observable<any> | boolean}
     */
    autocomplete(config?: IFsPromptConfig): Observable<any>;
    /**
     * Open modal dialog depends from type
     *
     * @param {IFsPromptConfig} config
     * @param {PromptType} type
     * @returns {any}
     */
    private open(config, type);
}
