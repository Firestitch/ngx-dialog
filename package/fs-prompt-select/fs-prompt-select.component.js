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
var dialog_1 = require("@angular/material/dialog");
var fsprompt_service_1 = require("../fsprompt.service");
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
            templateUrl: 'fs-prompt-select.component.html',
            styleUrls: ['../fsprompt.css'],
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], FsPromptSelectComponent);
    return FsPromptSelectComponent;
}());
exports.FsPromptSelectComponent = FsPromptSelectComponent;
//# sourceMappingURL=fs-prompt-select.component.js.map