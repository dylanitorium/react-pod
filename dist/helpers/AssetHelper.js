'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TemplateHelper = require('./TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetHelper = function () {
  function AssetHelper() {
    _classCallCheck(this, AssetHelper);
  }

  _createClass(AssetHelper, null, [{
    key: 'createAsset',
    value: function createAsset(data, templatePath) {
      return _TemplateHelper2.default.getTemplate(templatePath).then(_TemplateHelper2.default.populateTemplate(data));
    }
  }, {
    key: 'writeAsset',
    value: function writeAsset(path) {
      return function (content) {
        return new Promise(function (resolve, reject) {
          return _fs2.default.writeFile(path, content, function (error) {
            return error ? reject(error) : resolve();
          });
        });
      };
    }
  }]);

  return AssetHelper;
}();

exports.default = AssetHelper;