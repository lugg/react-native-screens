"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SafeAreaView = require("../components/safe-area/SafeAreaView.types");
Object.keys(_SafeAreaView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SafeAreaView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SafeAreaView[key];
    }
  });
});
//# sourceMappingURL=types.js.map