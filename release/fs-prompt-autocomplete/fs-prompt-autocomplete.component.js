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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var fsprompt_service_1 = require("../fsprompt.service");
var operators_1 = require("rxjs/operators");
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
            templateUrl: 'fs-prompt-autocomplete.component.html',
            styleUrls: ['../fsprompt.scss'],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptAutocompleteComponent);
    return FsPromptAutocompleteComponent;
}());
exports.FsPromptAutocompleteComponent = FsPromptAutocompleteComponent;
//# sourceMappingURL=fs-prompt-autocomplete.component.js.map