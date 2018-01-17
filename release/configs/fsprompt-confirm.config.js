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
var fsprompt_config_1 = require("./fsprompt.config");
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
//# sourceMappingURL=fsprompt-confirm.config.js.map