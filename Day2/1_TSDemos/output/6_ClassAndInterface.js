"use strict";
var Control = (function () {
    function Control() {
    }
    Object.defineProperty(Control.prototype, "ControlId", {
        get: function () {
            return 10;
        },
        enumerable: false,
        configurable: true
    });
    Control.prototype.focus = function () {
        return "The control is in focus...";
    };
    return Control;
}());
var SelectableControl = (function () {
    function SelectableControl() {
    }
    SelectableControl.prototype.select = function () {
        return "The control is selected...";
    };
    return SelectableControl;
}());
var Button = (function () {
    function Button() {
    }
    Object.defineProperty(Button.prototype, "ControlId", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.focus = function () {
        throw new Error("Method not implemented.");
    };
    Button.prototype.select = function () {
        throw new Error("Method not implemented.");
    };
    return Button;
}());
