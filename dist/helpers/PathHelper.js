"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PathHelper = function () {
  function PathHelper() {
    _classCallCheck(this, PathHelper);
  }

  _createClass(PathHelper, null, [{
    key: "getComponentPath",
    value: function getComponentPath(_ref) {
      var component = _ref.component;

      return component + "/" + component + ".js";
    }
  }, {
    key: "getStylePath",
    value: function getStylePath(_ref2) {
      var component = _ref2.component,
          style = _ref2.style;

      return component + "/" + style + ".css";
    }
  }, {
    key: "getIndexPath",
    value: function getIndexPath(_ref3) {
      var component = _ref3.component;

      return component + "/index.js";
    }
  }]);

  return PathHelper;
}();

exports.default = PathHelper;