(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/material/dialog"), require("rxjs/add/observable/of"), require("rxjs/add/operator/switchMap"), require("rxjs/Observable"), require("@angular/forms"), require("rxjs/operators"), require("@angular/common"), require("@angular/material"));
	else if(typeof define === 'function' && define.amd)
		define("@firestitch/fs-dialog", ["@angular/core", "@angular/material/dialog", "rxjs/add/observable/of", "rxjs/add/operator/switchMap", "rxjs/Observable", "@angular/forms", "rxjs/operators", "@angular/common", "@angular/material"], factory);
	else if(typeof exports === 'object')
		exports["@firestitch/fs-dialog"] = factory(require("@angular/core"), require("@angular/material/dialog"), require("rxjs/add/observable/of"), require("rxjs/add/operator/switchMap"), require("rxjs/Observable"), require("@angular/forms"), require("rxjs/operators"), require("@angular/common"), require("@angular/material"));
	else
		root["@firestitch/fs-dialog"] = factory(root["@angular/core"], root["@angular/material/dialog"], root["rxjs/add/observable/of"], root["rxjs/add/operator/switchMap"], root["rxjs/Observable"], root["@angular/forms"], root["rxjs/operators"], root["@angular/common"], root["@angular/material"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_material_dialog__, __WEBPACK_EXTERNAL_MODULE_rxjs_add_observable_of__, __WEBPACK_EXTERNAL_MODULE_rxjs_add_operator_switchMap__, __WEBPACK_EXTERNAL_MODULE_rxjs_Observable__, __WEBPACK_EXTERNAL_MODULE__angular_forms__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_material__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./fsprompt.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  display: block;\n}\n\n", "", {"version":3,"sources":["/Users/Basters/dev/firestitch/fs-dialog/src/src/fsprompt.scss","/Users/Basters/dev/firestitch/fs-dialog/fsprompt.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;CCCD","file":"fsprompt.scss","sourcesContent":[".mat-form-field {\n  display: block;\n}\n",".mat-form-field {\n  display: block;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./configs/fsprompt-confirm.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fsprompt_config_1 = __webpack_require__("./configs/fsprompt.config.ts");
var FsPromptConfirmConfig = /** @class */ (function (_super) {
    __extends(FsPromptConfirmConfig, _super);
    function FsPromptConfirmConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FsPromptConfirmConfig.prototype.applyConfig = function (config) {
        _super.prototype.applyConfig.call(this, config);
        if (!config.title) {
            config.title = 'Confirm';
        }
        if (!config.class) {
            config.class = 'fs-modal-confirm';
        }
    };
    FsPromptConfirmConfig.prototype.applyDialogConfig = function (config) {
        _super.prototype.applyDialogConfig.call(this, config);
        var inputDialogConfig = config.dialogConfig;
        // Confrim has small width by default than other types
        if (!inputDialogConfig || inputDialogConfig.width === void 0) {
            this._dialogConfig.width = '250px';
        }
    };
    return FsPromptConfirmConfig;
}(fsprompt_config_1.FsPromptConfig));
exports.FsPromptConfirmConfig = FsPromptConfirmConfig;


/***/ }),

/***/ "./configs/fsprompt.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FsPromptConfig = /** @class */ (function () {
    function FsPromptConfig(config) {
        this.config = config;
        this.title = '';
        this.template = '';
        this.hint = '';
        this.label = '';
        this.class = '';
        this.commitLabel = 'Ok';
        this.cancelLabel = 'Cancel';
        this.values = [];
        this._defaultDialogConfig = {
            width: '500px',
            heigth: 'auto'
        };
        this.applyDialogConfig(config);
        this.applyConfig(config);
    }
    Object.defineProperty(FsPromptConfig.prototype, "dialogConfig", {
        get: function () {
            var config = Object.assign({}, this._dialogConfig);
            config.data = {
                title: this.title,
                template: this.template,
                hint: this.hint,
                label: this.label,
                class: this.class,
                commitLabel: this.commitLabel,
                cancelLabel: this.cancelLabel,
                values: this.values
            };
            return config;
        },
        enumerable: true,
        configurable: true
    });
    FsPromptConfig.prototype.applyConfig = function (config) {
        Object.assign(this, config);
    };
    FsPromptConfig.prototype.applyDialogConfig = function (config) {
        var inputDialogConfig = config.dialogConfig;
        // Previously let's assign default config
        this._dialogConfig = Object.assign({}, this._defaultDialogConfig);
        // Then assign passed config
        if (inputDialogConfig) {
            Object.assign(this._dialogConfig, inputDialogConfig);
        }
        // Assign panel class (class for modal container) only if we don't have this class in modal options
        if (config.class) {
            this._dialogConfig.panelClass = config.class;
        }
    };
    return FsPromptConfig;
}());
exports.FsPromptConfig = FsPromptConfig;


/***/ }),

/***/ "./configs/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./configs/fsprompt.config.ts"));
__export(__webpack_require__("./configs/fsprompt-confirm.config.ts"));


/***/ }),

/***/ "./fs-confirm/fs-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button [mat-dialog-close]=\"true\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./fs-confirm/fs-confirm.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var dialog_1 = __webpack_require__("@angular/material/dialog");
var FsConfirmComponent = /** @class */ (function () {
    function FsConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FsConfirmComponent = __decorate([
        core_1.Component({
            selector: 'fs-confirm',
            template: __webpack_require__("./fs-confirm/fs-confirm.component.html"),
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsConfirmComponent);
    return FsConfirmComponent;
}());
exports.FsConfirmComponent = FsConfirmComponent;


/***/ }),

/***/ "./fs-confirm/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-confirm/fs-confirm.component.ts"));


/***/ }),

/***/ "./fs-dialog.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var forms_1 = __webpack_require__("@angular/forms");
// Material
var material_1 = __webpack_require__("@angular/material");
// Dialog
var fs_confirm_1 = __webpack_require__("./fs-confirm/index.ts");
var fs_input_1 = __webpack_require__("./fs-input/index.ts");
var fs_prompt_select_1 = __webpack_require__("./fs-prompt-select/index.ts");
var fsprompt_service_1 = __webpack_require__("./fsprompt.service.ts");
var fs_prompt_autocomplete_1 = __webpack_require__("./fs-prompt-autocomplete/index.ts");
var FsDialogModule = /** @class */ (function () {
    function FsDialogModule() {
    }
    FsDialogModule_1 = FsDialogModule;
    FsDialogModule.forRoot = function () {
        return {
            ngModule: FsDialogModule_1,
            providers: [fsprompt_service_1.FsPrompt]
        };
    };
    FsDialogModule = FsDialogModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                // Angular
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                // Material
                material_1.MatDialogModule,
                material_1.MatButtonModule,
                material_1.MatInputModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatAutocompleteModule,
            ],
            entryComponents: [
                fs_confirm_1.FsConfirmComponent,
                fs_input_1.FsInputComponent,
                fs_prompt_select_1.FsPromptSelectComponent,
                fs_prompt_autocomplete_1.FsPromptAutocompleteComponent,
            ],
            declarations: [
                fs_confirm_1.FsConfirmComponent,
                fs_input_1.FsInputComponent,
                fs_prompt_select_1.FsPromptSelectComponent,
                fs_prompt_autocomplete_1.FsPromptAutocompleteComponent,
            ],
            providers: [
                fsprompt_service_1.FsPrompt,
            ],
        })
    ], FsDialogModule);
    return FsDialogModule;
    var FsDialogModule_1;
}());
exports.FsDialogModule = FsDialogModule;


/***/ }),

/***/ "./fs-input/fs-input.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n  <mat-form-field>\n    <input matInput [placeholder]=\"data.label\" [(ngModel)]=\"inputValue\">\n    <mat-hint>{{data.hint}}</mat-hint>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button (click)=\"complete()\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./fs-input/fs-input.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var dialog_1 = __webpack_require__("@angular/material/dialog");
var FsInputComponent = /** @class */ (function () {
    function FsInputComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.inputValue = '';
    }
    FsInputComponent.prototype.complete = function () {
        this.dialogRef.close(this.inputValue);
    };
    FsInputComponent = __decorate([
        core_1.Component({
            selector: 'fs-input',
            template: __webpack_require__("./fs-input/fs-input.component.html"),
            styles: [__webpack_require__("./fsprompt.scss")],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsInputComponent);
    return FsInputComponent;
}());
exports.FsInputComponent = FsInputComponent;


/***/ }),

/***/ "./fs-input/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-input/fs-input.component.ts"));


/***/ }),

/***/ "./fs-prompt-autocomplete/fs-prompt-autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n\n  <mat-form-field *ngIf=\"!loading && !error\">\n    <input aria-label=\"State\" matInput\n           [placeholder]=\"data.label\"\n           [matAutocomplete]=\"auto\"\n           [value]=\"inputControl\"\n           [formControl]=\"inputControl\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\" (optionSelected)=\"setSelectedValue($event)\">\n      <mat-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\n        <small>{{item.name}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <ng-container *ngIf=\"loading\">Please wait...</ng-container>\n  <ng-container *ngIf=\"error\">Something went wrong. Please, try again</ng-container>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button (click)=\"complete()\" *ngIf=\"!error && !loading\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./fs-prompt-autocomplete/fs-prompt-autocomplete.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
var dialog_1 = __webpack_require__("@angular/material/dialog");
var fsprompt_service_1 = __webpack_require__("./fsprompt.service.ts");
var operators_1 = __webpack_require__("rxjs/operators");
var FsPromptAutocompleteComponent = /** @class */ (function () {
    function FsPromptAutocompleteComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.inputControl = new forms_1.FormControl('', []);
        this.loading = false;
        this.items = [];
        this.error = false;
    }
    FsPromptAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadItems();
        this.filteredItems = this.inputControl.valueChanges
            .pipe(operators_1.startWith(''), operators_1.map(function (item) { return typeof item === 'string' ? item : item.name; }), operators_1.map(function (item) { return item ? _this.filterItems(item) : _this.items.slice(); }));
    };
    FsPromptAutocompleteComponent.prototype.complete = function () {
        this.dialogRef.close(this.result);
    };
    FsPromptAutocompleteComponent.prototype.setSelectedValue = function (event) {
        if (event) {
            this.result = event.option.value.value;
        }
    };
    FsPromptAutocompleteComponent.prototype.displayWith = function (value) {
        return value ? value.name : undefined;
    };
    /**
     * Load items depend from values type
     */
    FsPromptAutocompleteComponent.prototype.loadItems = function () {
        var _this = this;
        var result = fsprompt_service_1.FsPrompt.valuesConverter(this.data.values);
        switch (result.type) {
            case fsprompt_service_1.ConverterType.observable:
                {
                    this.loading = true;
                    result.values.subscribe(function (response) {
                        _this.items = response;
                        _this.loading = false;
                    }, function () {
                        _this.error = true;
                        _this.loading = false;
                    });
                }
                break;
            case fsprompt_service_1.ConverterType.promise:
                {
                    this.loading = true;
                    result.values.then(function (response) {
                        _this.items = response;
                        _this.loading = false;
                    }, function () {
                        _this.error = true;
                        _this.loading = false;
                    });
                }
                break;
            case fsprompt_service_1.ConverterType.array:
                {
                    this.items = this.data.values;
                }
                break;
            default: {
                this.error = true;
            }
        }
    };
    /**
     * Filter items by name
     * @param {string} name
     * @returns {any[]}
     */
    FsPromptAutocompleteComponent.prototype.filterItems = function (name) {
        return this.items.filter(function (item) {
            return item.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    FsPromptAutocompleteComponent = __decorate([
        core_1.Component({
            selector: 'fs-prompt-autocomplete',
            template: __webpack_require__("./fs-prompt-autocomplete/fs-prompt-autocomplete.component.html"),
            styles: [__webpack_require__("./fsprompt.scss")],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptAutocompleteComponent);
    return FsPromptAutocompleteComponent;
}());
exports.FsPromptAutocompleteComponent = FsPromptAutocompleteComponent;


/***/ }),

/***/ "./fs-prompt-autocomplete/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-prompt-autocomplete/fs-prompt-autocomplete.component.ts"));


/***/ }),

/***/ "./fs-prompt-select/fs-prompt-select.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n  <mat-form-field *ngIf=\"!loading && !error\">\n    <mat-select [placeholder]=\"data.label\" [(value)]=\"result\">\n      <mat-option *ngFor=\"let item of items\" [value]=\"item.value\">\n        {{ item.name }}\n      </mat-option>\n    </mat-select>\n    <mat-hint>{{data.hint}}</mat-hint>\n  </mat-form-field>\n  <ng-container *ngIf=\"loading\">Please wait...</ng-container>\n  <ng-container *ngIf=\"error\">Something went wrong. Please, try again</ng-container>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button (click)=\"complete()\" *ngIf=\"!error && !loading\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./fs-prompt-select/fs-prompt-select.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var dialog_1 = __webpack_require__("@angular/material/dialog");
var fsprompt_service_1 = __webpack_require__("./fsprompt.service.ts");
var FsPromptSelectComponent = /** @class */ (function () {
    function FsPromptSelectComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loading = false;
        this.items = [];
        this.error = false;
    }
    FsPromptSelectComponent.prototype.ngOnInit = function () {
        this.loadItems();
    };
    FsPromptSelectComponent.prototype.complete = function () {
        this.dialogRef.close(this.result);
    };
    FsPromptSelectComponent.prototype.loadItems = function () {
        var _this = this;
        var result = fsprompt_service_1.FsPrompt.valuesConverter(this.data.values);
        switch (result.type) {
            case fsprompt_service_1.ConverterType.observable:
                {
                    this.loading = true;
                    result.values.subscribe(function (response) {
                        _this.items = response;
                        _this.loading = false;
                    }, function () {
                        _this.error = true;
                        _this.loading = false;
                    });
                }
                break;
            case fsprompt_service_1.ConverterType.promise:
                {
                    this.loading = true;
                    result.values.then(function (response) {
                        _this.items = response;
                        _this.loading = false;
                    }, function () {
                        _this.error = true;
                        _this.loading = false;
                    });
                }
                break;
            case fsprompt_service_1.ConverterType.array:
                {
                    this.items = this.data.values;
                }
                break;
            default: {
                this.error = true;
            }
        }
    };
    FsPromptSelectComponent = __decorate([
        core_1.Component({
            selector: 'fs-prompt-select',
            template: __webpack_require__("./fs-prompt-select/fs-prompt-select.component.html"),
            styles: [__webpack_require__("./fsprompt.scss")],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptSelectComponent);
    return FsPromptSelectComponent;
}());
exports.FsPromptSelectComponent = FsPromptSelectComponent;


/***/ }),

/***/ "./fs-prompt-select/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-prompt-select/fs-prompt-select.component.ts"));


/***/ }),

/***/ "./fsprompt.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js?{\"sourceMap\":true}!../node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!../node_modules/resolve-url-loader/index.js?{\"sourceMap\":true}!../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./fsprompt.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./fsprompt.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("@angular/core");
// Modal
var dialog_1 = __webpack_require__("@angular/material/dialog");
// Components for open in modal
var fs_confirm_component_1 = __webpack_require__("./fs-confirm/fs-confirm.component.ts");
var fs_input_component_1 = __webpack_require__("./fs-input/fs-input.component.ts");
var fs_prompt_select_component_1 = __webpack_require__("./fs-prompt-select/fs-prompt-select.component.ts");
var fs_prompt_autocomplete_component_1 = __webpack_require__("./fs-prompt-autocomplete/fs-prompt-autocomplete.component.ts");
// Configs
var fsprompt_config_1 = __webpack_require__("./configs/fsprompt.config.ts");
var fsprompt_confirm_config_1 = __webpack_require__("./configs/fsprompt-confirm.config.ts");
// RX
__webpack_require__("rxjs/add/observable/of");
__webpack_require__("rxjs/add/operator/switchMap");
var Observable_1 = __webpack_require__("rxjs/Observable");
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


/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./fs-dialog.module.ts"));
__export(__webpack_require__("./configs/index.ts"));
__export(__webpack_require__("./fs-confirm/index.ts"));
__export(__webpack_require__("./fs-input/index.ts"));
__export(__webpack_require__("./fs-prompt-autocomplete/index.ts"));
__export(__webpack_require__("./fs-prompt-select/index.ts"));
__export(__webpack_require__("./fsprompt.service.ts"));


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_forms__;

/***/ }),

/***/ "@angular/material":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material__;

/***/ }),

/***/ "@angular/material/dialog":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material_dialog__;

/***/ }),

/***/ "rxjs/Observable":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_Observable__;

/***/ }),

/***/ "rxjs/add/observable/of":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_add_observable_of__;

/***/ }),

/***/ "rxjs/add/operator/switchMap":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_add_operator_switchMap__;

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.map