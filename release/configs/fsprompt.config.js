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
//# sourceMappingURL=fsprompt.config.js.map