"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.options = void 0;
var _http = _interopRequireDefault(require("k6/http"));
var _k = require("k6");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const options = {
  vus: 10,
  duration: '30s'
};
exports.options = options;
function _default() {
  _http.default.get('https://test.k6.io');
  (0, _k.sleep)(1);
}