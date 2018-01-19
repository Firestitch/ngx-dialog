"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
// Material
var material_1 = require("@angular/material");
// Dialog
var fs_prompt_confirm_1 = require("./fs-prompt-confirm");
var fs_prompt_input_1 = require("./fs-prompt-input");
var fs_prompt_select_1 = require("./fs-prompt-select");
var fsprompt_service_1 = require("./fsprompt.service");
var fs_prompt_autocomplete_1 = require("./fs-prompt-autocomplete");
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
//# sourceMappingURL=fs-dialog.module.js.map