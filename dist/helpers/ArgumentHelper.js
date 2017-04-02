'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _capitalize = require('capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArgumentHelper = function () {
  function ArgumentHelper() {
    _classCallCheck(this, ArgumentHelper);
  }

  _createClass(ArgumentHelper, null, [{
    key: 'parseArguments',
    value: function parseArguments(_ref) {
      var argv = _ref.argv;

      var argument = argv[2];
      return {
        component: (0, _capitalize2.default)(argument),
        style: argument.toLowerCase()
      };
    }
  }]);

  return ArgumentHelper;
}();

exports.default = ArgumentHelper;