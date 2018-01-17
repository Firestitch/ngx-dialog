"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Modal
var dialog_1 = require("@angular/material/dialog");
// Components for open in modal
var fs_confirm_component_1 = require("./fs-confirm/fs-confirm.component");
var fs_input_component_1 = require("./fs-input/fs-input.component");
var fs_prompt_select_component_1 = require("./fs-prompt-select/fs-prompt-select.component");
var fs_prompt_autocomplete_component_1 = require("./fs-prompt-autocomplete/fs-prompt-autocomplete.component");
// Configs
var fsprompt_config_1 = require("./configs/fsprompt.config");
var fsprompt_confirm_config_1 = require("./configs/fsprompt-confirm.config");
// RX
require("rxjs/add/observable/of");
require("rxjs/add/operator/switchMap");
var Observable_1 = require("rxjs/Observable");
var PromptType;
(function (PromptType) {
    PromptType[PromptType["confirm"] = 0] = "confirm";
    PromptType[PromptType["input"] = 1] = "input";
    PromptType[PromptType["select"] = 2] = "select";
    PromptType[PromptType["autocomplete"] = 3] = "autocomplete";
})(PromptType = exports.PromptType || (exports.PromptType = {}));
var ConverterType;
(function (ConverterType) {
    ConverterType[ConverterType["observable"] = 0] = "observable";
    ConverterType[ConverterType["promise"] = 1] = "promise";
    ConverterType[ConverterType["array"] = 2] = "array";
})(ConverterType = exports.ConverterType || (exports.ConverterType = {}));
var FsPrompt = /** @class */ (function () {
    function FsPrompt(dialog) {
        this.dialog = dialog;
    }
    /**
     * Values converter
     *
     * @param {Observable<T> | Promise<T> | Array<T> | FsValuesFunction} values
     * @returns {any}
     */
    FsPrompt.valuesConverter = function (values) {
        var nativeObjectToString = Object.prototype.toString;
        if (nativeObjectToString.call(values) === '[object Function]') {
            return this.valuesConverter(values());
        }
        else {
            if (values instanceof Observable_1.Observable) {
                return {
                    type: ConverterType.observable,
                    values: values
                };
            }
            else if (!!values && (typeof values === 'object' || typeof values === 'function') // check if it Promise
                && typeof values.then === 'function') {
                return {
                    type: ConverterType.promise,
                    values: values
                };
            }
            else if (Array.isArray(values)) {
                return {
                    type: ConverterType.array,
                    values: values
                };
            }
            else {
                return false;
            }
        }
    };
    /**
     * Open confirmation window and return close observable
     *
     * @param {IFsPromptConfig} config
     * @returns {Observable<any>}
     */
    FsPrompt.prototype.confirm = function (config) {
        if (config === void 0) { config = {}; }
        var openConfig = new fsprompt_confirm_config_1.FsPromptConfirmConfig(config);
        return this.open(openConfig, PromptType.confirm);
    };
    /**
     * Open window with input field for filling
     *
     * @param {IFsPromptConfig} config
     * @returns {Observable<any> | boolean}
     */
    FsPrompt.prototype.input = function (config) {
        if (config === void 0) { config = {}; }
        var openConfig = new fsprompt_config_1.FsPromptConfig(config);
        return this.open(openConfig, PromptType.input);
    };
    /**
     * Open modal with list
     *
     * @param {IFsPromptConfig} config
     */
    FsPrompt.prototype.select = function (config) {
        if (config === void 0) { config = {}; }
        var openConfig = new fsprompt_config_1.FsPromptConfig(config);
        return this.open(openConfig, PromptType.select);
    };
    /**
     * Open modal with autocomplete
     *
     * @param {IFsPromptConfig} config
     * @returns {Observable<any> | boolean}
     */
    FsPrompt.prototype.autocomplete = function (config) {
        if (config === void 0) { config = {}; }
        var openConfig = new fsprompt_config_1.FsPromptConfig(config);
        return this.open(openConfig, PromptType.autocomplete);
    };
    /**
     * Open modal dialog depends from type
     *
     * @param {IFsPromptConfig} config
     * @param {PromptType} type
     * @returns {any}
     */
    FsPrompt.prototype.open = function (config, type) {
        switch (type) {
            case PromptType.confirm: {
                return this.dialog.open(fs_confirm_component_1.FsConfirmComponent, config.dialogConfig).afterClosed()
                    .switchMap(function (value) { return (value) ? Observable_1.Observable.of(value) : Observable_1.Observable.throw('error'); });
            }
            case PromptType.input: {
                return this.dialog.open(fs_input_component_1.FsInputComponent, config.dialogConfig).afterClosed();
            }
            case PromptType.select: {
                return this.dialog.open(fs_prompt_select_component_1.FsPromptSelectComponent, config.dialogConfig).afterClosed();
            }
            case PromptType.autocomplete: {
                return this.dialog.open(fs_prompt_autocomplete_component_1.FsPromptAutocompleteComponent, config.dialogConfig).afterClosed();
            }
            default: return Observable_1.Observable.throw('Erorr');
        }
    };
    FsPrompt = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dialog_1.MatDialog])
    ], FsPrompt);
    return FsPrompt;
}());
exports.FsPrompt = FsPrompt;
//# sourceMappingURL=fsprompt.service.js.map