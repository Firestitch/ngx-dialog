webpackJsonp([2],{

/***/ "../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!../src/fsprompt.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  display: block;\n}", "", {"version":3,"sources":["/Users/mendor/work/fs-dialog/fsprompt.css"],"names":[],"mappings":"AAAA;EACE,eAAA;CACD","file":"fsprompt.css","sourcesContent":[".mat-form-field {\n  display: block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "../src/configs/fsprompt-confirm.config.ts":
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
var fsprompt_config_1 = __webpack_require__("../src/configs/fsprompt.config.ts");
var FsPromptConfirmConfig = (function (_super) {
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

/***/ "../src/configs/fsprompt.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FsPromptConfig = (function () {
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
            height: 'auto'
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
    FsPromptConfig.prototype.addDefaultPanelClasses = function (type) {
        // FIXME replace this with FsUtil or something else
        if (typeof this._dialogConfig.panelClass === 'string' || this._dialogConfig.panelClass instanceof String) {
            this._dialogConfig.panelClass = this._dialogConfig.panelClass.split(' ');
        }
        if (!Array.isArray(this._dialogConfig.panelClass)) {
            this._dialogConfig.panelClass = [];
        }
        this._dialogConfig.panelClass.push('fs-prompt', 'fs-prompt-' + type);
    };
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

/***/ "../src/configs/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/configs/fsprompt.config.ts"));
__export(__webpack_require__("../src/configs/fsprompt-confirm.config.ts"));


/***/ }),

/***/ "../src/fs-dialog.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var common_1 = __webpack_require__("../node_modules/@angular/common/esm2015/common.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
// Material
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
// Dialog
var fs_prompt_confirm_1 = __webpack_require__("../src/fs-prompt-confirm/index.ts");
var fs_prompt_input_1 = __webpack_require__("../src/fs-prompt-input/index.ts");
var fs_prompt_select_1 = __webpack_require__("../src/fs-prompt-select/index.ts");
var fsprompt_service_1 = __webpack_require__("../src/fsprompt.service.ts");
var fs_prompt_autocomplete_1 = __webpack_require__("../src/fs-prompt-autocomplete/index.ts");
var FsDialogModule = (function () {
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
                fs_prompt_confirm_1.FsPromptConfirmComponent,
                fs_prompt_input_1.FsPromptInputComponent,
                fs_prompt_select_1.FsPromptSelectComponent,
                fs_prompt_autocomplete_1.FsPromptAutocompleteComponent,
            ],
            declarations: [
                fs_prompt_confirm_1.FsPromptConfirmComponent,
                fs_prompt_input_1.FsPromptInputComponent,
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

/***/ "../src/fs-prompt-autocomplete/fs-prompt-autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n\n  <mat-form-field *ngIf=\"!loading && !error\">\n    <input aria-label=\"State\" matInput\n           [placeholder]=\"data.label\"\n           [matAutocomplete]=\"auto\"\n           [value]=\"inputControl\"\n           [formControl]=\"inputControl\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayWith\" (optionSelected)=\"setSelectedValue($event)\">\n      <mat-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\n        <small>{{item.name}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <ng-container *ngIf=\"loading\">Please wait...</ng-container>\n  <ng-container *ngIf=\"error\">Something went wrong. Please, try again</ng-container>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button (click)=\"complete()\" *ngIf=\"!error && !loading\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../src/fs-prompt-autocomplete/fs-prompt-autocomplete.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var dialog_1 = __webpack_require__("../node_modules/@angular/material/esm2015/dialog.js");
var fsprompt_service_1 = __webpack_require__("../src/fsprompt.service.ts");
var operators_1 = __webpack_require__("../node_modules/rxjs/operators.js");
var FsPromptAutocompleteComponent = (function () {
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
            template: __webpack_require__("../src/fs-prompt-autocomplete/fs-prompt-autocomplete.component.html"),
            styles: [__webpack_require__("../src/fsprompt.css")],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptAutocompleteComponent);
    return FsPromptAutocompleteComponent;
}());
exports.FsPromptAutocompleteComponent = FsPromptAutocompleteComponent;


/***/ }),

/***/ "../src/fs-prompt-autocomplete/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-prompt-autocomplete/fs-prompt-autocomplete.component.ts"));


/***/ }),

/***/ "../src/fs-prompt-confirm/fs-prompt-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button [mat-dialog-close]=\"true\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../src/fs-prompt-confirm/fs-prompt-confirm.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var dialog_1 = __webpack_require__("../node_modules/@angular/material/esm2015/dialog.js");
var FsPromptConfirmComponent = (function () {
    function FsPromptConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FsPromptConfirmComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../src/fs-prompt-confirm/fs-prompt-confirm.component.html"),
            styles: [__webpack_require__("../src/fsprompt.css")],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptConfirmComponent);
    return FsPromptConfirmComponent;
}());
exports.FsPromptConfirmComponent = FsPromptConfirmComponent;


/***/ }),

/***/ "../src/fs-prompt-confirm/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-prompt-confirm/fs-prompt-confirm.component.ts"));


/***/ }),

/***/ "../src/fs-prompt-input/fs-prompt-input.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title *ngIf=\"data.title\">{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n  <mat-form-field>\n    <input matInput [placeholder]=\"data.label\" [(ngModel)]=\"inputValue\">\n    <mat-hint>{{data.hint}}</mat-hint>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button (click)=\"complete()\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../src/fs-prompt-input/fs-prompt-input.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var dialog_1 = __webpack_require__("../node_modules/@angular/material/esm2015/dialog.js");
var FsPromptInputComponent = (function () {
    function FsPromptInputComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.inputValue = '';
    }
    FsPromptInputComponent.prototype.complete = function () {
        this.dialogRef.close(this.inputValue);
    };
    FsPromptInputComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("../src/fs-prompt-input/fs-prompt-input.component.html"),
            styles: [__webpack_require__("../src/fsprompt.css")],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptInputComponent);
    return FsPromptInputComponent;
}());
exports.FsPromptInputComponent = FsPromptInputComponent;


/***/ }),

/***/ "../src/fs-prompt-input/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-prompt-input/fs-prompt-input.component.ts"));


/***/ }),

/***/ "../src/fs-prompt-select/fs-prompt-select.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content tabindex=\"-1\">\n  {{data.template}}\n  <mat-form-field *ngIf=\"!loading && !error\">\n    <mat-select [placeholder]=\"data.label\" [(value)]=\"result\">\n      <mat-option *ngFor=\"let item of items\" [value]=\"item.value\">\n        {{ item.name }}\n      </mat-option>\n    </mat-select>\n    <mat-hint>{{data.hint}}</mat-hint>\n  </mat-form-field>\n  <ng-container *ngIf=\"loading\">Please wait...</ng-container>\n  <ng-container *ngIf=\"error\">Something went wrong. Please, try again</ng-container>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">{{data.cancelLabel}}</button>\n  <button mat-button (click)=\"complete()\" *ngIf=\"!error && !loading\">{{data.commitLabel}}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../src/fs-prompt-select/fs-prompt-select.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var dialog_1 = __webpack_require__("../node_modules/@angular/material/esm2015/dialog.js");
var fsprompt_service_1 = __webpack_require__("../src/fsprompt.service.ts");
var FsPromptSelectComponent = (function () {
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
            template: __webpack_require__("../src/fs-prompt-select/fs-prompt-select.component.html"),
            styles: [__webpack_require__("../src/fsprompt.css")],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptSelectComponent);
    return FsPromptSelectComponent;
}());
exports.FsPromptSelectComponent = FsPromptSelectComponent;


/***/ }),

/***/ "../src/fs-prompt-select/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-prompt-select/fs-prompt-select.component.ts"));


/***/ }),

/***/ "../src/fsprompt.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("../node_modules/css-loader/index.js??ref--2-1!../node_modules/postcss-loader/lib/index.js??ref--2-2!../node_modules/resolve-url-loader/index.js??ref--2-3!../src/fsprompt.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "../src/fsprompt.service.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
// Modal
var dialog_1 = __webpack_require__("../node_modules/@angular/material/esm2015/dialog.js");
// Components for open in modal
var fs_prompt_confirm_component_1 = __webpack_require__("../src/fs-prompt-confirm/fs-prompt-confirm.component.ts");
var fs_prompt_input_component_1 = __webpack_require__("../src/fs-prompt-input/fs-prompt-input.component.ts");
var fs_prompt_select_component_1 = __webpack_require__("../src/fs-prompt-select/fs-prompt-select.component.ts");
var fs_prompt_autocomplete_component_1 = __webpack_require__("../src/fs-prompt-autocomplete/fs-prompt-autocomplete.component.ts");
// Configs
var fsprompt_config_1 = __webpack_require__("../src/configs/fsprompt.config.ts");
var fsprompt_confirm_config_1 = __webpack_require__("../src/configs/fsprompt-confirm.config.ts");
// RX
__webpack_require__("../node_modules/rxjs/add/observable/of.js");
__webpack_require__("../node_modules/rxjs/add/operator/switchMap.js");
var Observable_1 = __webpack_require__("../node_modules/rxjs/Observable.js");
var PromptType;
(function (PromptType) {
    PromptType["confirm"] = "confirm";
    PromptType["input"] = "input";
    PromptType["select"] = "select";
    PromptType["autocomplete"] = "autocomplete";
})(PromptType = exports.PromptType || (exports.PromptType = {}));
var ConverterType;
(function (ConverterType) {
    ConverterType[ConverterType["observable"] = 0] = "observable";
    ConverterType[ConverterType["promise"] = 1] = "promise";
    ConverterType[ConverterType["array"] = 2] = "array";
})(ConverterType = exports.ConverterType || (exports.ConverterType = {}));
var FsPrompt = (function () {
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
        // Default classes for modal
        config.addDefaultPanelClasses(type);
        switch (type) {
            case PromptType.confirm: {
                return this.dialog.open(fs_prompt_confirm_component_1.FsPromptConfirmComponent, config.dialogConfig).afterClosed()
                    .switchMap(function (value) { return (value) ? Observable_1.Observable.of(value) : Observable_1.Observable.throw('error'); });
            }
            case PromptType.input: {
                return this.dialog.open(fs_prompt_input_component_1.FsPromptInputComponent, config.dialogConfig).afterClosed();
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

/***/ "../src/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../src/fs-dialog.module.ts"));
__export(__webpack_require__("../src/configs/index.ts"));
__export(__webpack_require__("../src/fs-prompt-confirm/index.ts"));
__export(__webpack_require__("../src/fs-prompt-input/index.ts"));
__export(__webpack_require__("../src/fs-prompt-autocomplete/index.ts"));
__export(__webpack_require__("../src/fs-prompt-select/index.ts"));
__export(__webpack_require__("../src/fsprompt.service.ts"));


/***/ }),

/***/ "../tools lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../tools lazy recursive";

/***/ }),

/***/ "../tools/assets/playground.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>FsDialog Examples</h1>\n<div class=\"example\">\n  <fs-example title=\"FsDialog Example\" componentName=\"first-example\">\n    <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n      <button mat-raised-button (click)=\"showConfirm()\">Open Confirm Dialog</button>\n      <button mat-raised-button (click)=\"openInput()\">Open Input</button>\n      <ng-container *ngIf=\"inputValue !== false\">Typed value: {{inputValue}}</ng-container>\n      <button mat-raised-button (click)=\"openSelect()\">Open Select</button>\n      <ng-container *ngIf=\"selectValue !== false\">Selected: {{selectValue}}</ng-container>\n      <button mat-raised-button (click)=\"openAutocomplete()\">Open Autocomplete</button>\n      <ng-container *ngIf=\"selectAutoValue !== false\">Selected: {{selectAutoValue}}</ng-container>\n    </div>\n  </fs-example>\n</div>\n"

/***/ }),

/***/ "./app/app.component.ts":
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
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var src_1 = __webpack_require__("../src/index.ts");
var Subject_1 = __webpack_require__("../node_modules/rxjs/Subject.js");
var AppComponent = (function () {
    function AppComponent(fsPrompt) {
        this.fsPrompt = fsPrompt;
        this.inputValue = false;
        this.selectValue = false;
        this.selectAutoValue = false;
    }
    /**
     * Confirm modal
     */
    AppComponent.prototype.showConfirm = function () {
        this.fsPrompt.confirm({
            title: 'Confirm',
            template: 'Are you sure?'
        }).subscribe(function () {
            alert('Ok');
        }, function (error) {
            alert('Cancel');
        });
    };
    AppComponent.prototype.openInput = function () {
        var _this = this;
        this.fsPrompt.input({
            hint: 'Use commas to separate multiple email addresses',
            label: 'Please an email adresses',
        }).subscribe(function (value) {
            if (value !== false) {
                _this.inputValue = value;
            }
        });
    };
    AppComponent.prototype.openSelect = function () {
        var _this = this;
        var testObservable = new Subject_1.Subject();
        // Array test case
        var simpleArray = [
            { name: 'Dave', value: 0 },
            { name: 'Mike', value: 1 }
        ];
        // Observable test case
        var testPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(simpleArray);
                // reject('error')
            }, 3000);
        });
        // Observable test case
        setTimeout(function () {
            testObservable.next(simpleArray);
            // testObservable.error('error')
        }, 3000);
        this.fsPrompt.select({
            label: 'Please select a user',
            hint: 'Hint: His name is Dave',
            values: function () {
                return testObservable;
            }
        }).subscribe(function (result) {
            _this.selectValue = result;
        });
    };
    AppComponent.prototype.openAutocomplete = function () {
        var _this = this;
        var testObservable = new Subject_1.Subject();
        // Array test case
        var simpleArray = [
            { name: 'Dave', value: 0 },
            { name: 'Mike', value: 1 }
        ];
        // Observable test case
        var testPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(simpleArray);
                // reject('error')
            }, 3000);
        });
        // Observable test case
        setTimeout(function () {
            testObservable.next(simpleArray);
            // testObservable.error('error')
        }, 3000);
        this.fsPrompt.autocomplete({
            label: 'Please select a user',
            hint: 'Hint: His name is Dave',
            values: function () {
                return testObservable;
            }
        }).subscribe(function (result) {
            _this.selectAutoValue = result;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html")
        }),
        __metadata("design:paramtypes", [src_1.FsPrompt])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__("../node_modules/@angular/material/esm2015/material.js");
var flex_layout_1 = __webpack_require__("../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var table_1 = __webpack_require__("../node_modules/@angular/cdk/esm2015/table.js");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                flex_layout_1.FlexLayoutModule
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var playground_module_1 = __webpack_require__("./playground.module.ts");
var platform_browser_dynamic_1 = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
/**
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(playground_module_1.PlaygroundModule)
        .then(decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
function decorateModuleRef(modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
}


/***/ }),

/***/ "./playground.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("../tools/assets/playground.scss");
var core_1 = __webpack_require__("../node_modules/@angular/core/esm2015/core.js");
var forms_1 = __webpack_require__("../node_modules/@angular/forms/esm2015/forms.js");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var platform_browser_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var src_1 = __webpack_require__("../src/index.ts");
var animations_1 = __webpack_require__("../node_modules/@angular/platform-browser/esm2015/animations.js");
var material_module_1 = __webpack_require__("./app/material.module.ts");
var example_1 = __webpack_require__("../node_modules/@firestitch/example/package/index.js");
var PlaygroundModule = (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                src_1.FsDialogModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.AppMaterialModule,
                forms_1.FormsModule,
                example_1.FsExampleModule
            ],
            entryComponents: [],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [],
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ })

},["./main.ts"]);
//# sourceMappingURL=main.map