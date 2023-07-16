"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var leaflet_1 = __importDefault(require("leaflet"));
// @class PolyLine
leaflet_1.default.Path.mergeOptions({
    // @option dashSpeed: Number
    // The speed of the dash array, in pixels per second
    dashSpeed: 0
});
var _originalBeforeAdd = leaflet_1.default.Path.prototype.beforeAdd;
leaflet_1.default.Path.include({
    beforeAdd: function (map) {
        _originalBeforeAdd === null || _originalBeforeAdd === void 0 ? void 0 : _originalBeforeAdd.bind(this)(map);
        if (this.options.dashSpeed) {
            this._lastDashFrame = performance.now();
            this._dashFrame = leaflet_1.default.Util.requestAnimFrame(this._onDashFrame.bind(this));
        }
    },
    _onDashFrame: function () {
        if (!this._renderer) {
            return;
        }
        var now = performance.now();
        var dashOffsetDelta = (now - this._lastDashFrame) * this.options.dashSpeed / 1000;
        this.options.dashOffset = Number(this.options.dashOffset || 0) + dashOffsetDelta;
        this._renderer._updateStyle(this);
        this._lastDashFrame = performance.now();
        this._dashFrame = leaflet_1.default.Util.requestAnimFrame(this._onDashFrame.bind(this));
    }
});
