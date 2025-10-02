"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  internalEnableDetailedBottomTabsLogging: true,
  bottomTabsDebugLog: true,
  SafeAreaView: true
};
Object.defineProperty(exports, "SafeAreaView", {
  enumerable: true,
  get: function () {
    return _SafeAreaView.default;
  }
});
Object.defineProperty(exports, "bottomTabsDebugLog", {
  enumerable: true,
  get: function () {
    return _logging.bottomTabsDebugLog;
  }
});
Object.defineProperty(exports, "internalEnableDetailedBottomTabsLogging", {
  enumerable: true,
  get: function () {
    return _logging.internalEnableDetailedBottomTabsLogging;
  }
});
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
var _logging = require("./logging");
var _SafeAreaView = _interopRequireDefault(require("../components/safe-area/SafeAreaView"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//# sourceMappingURL=index.js.map