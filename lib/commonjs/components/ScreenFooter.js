"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterComponent = FooterComponent;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ScreenFooterNativeComponent = _interopRequireDefault(require("../fabric/ScreenFooterNativeComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Unstable API
 */
function ScreenFooter(props) {
  return /*#__PURE__*/_react.default.createElement(_ScreenFooterNativeComponent.default, props);
}
function FooterComponent({
  children
}) {
  return /*#__PURE__*/_react.default.createElement(ScreenFooter, {
    style: styles.container,
    collapsable: false
  }, children);
}
const styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});
var _default = exports.default = ScreenFooter;
//# sourceMappingURL=ScreenFooter.js.map