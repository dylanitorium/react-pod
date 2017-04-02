'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateHelper = function () {
  function TemplateHelper() {
    _classCallCheck(this, TemplateHelper);
  }

  _createClass(TemplateHelper, null, [{
    key: 'populateTemplate',
    value: function populateTemplate(data) {
      return function (template) {
        return _mustache2.default.render(template, data);
      };
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate(path) {
      return new Promise(function (resolve, reject) {
        return _fs2.default.readFile(path, 'utf8', function (error, template) {
          return error ? reject(error) : resolve(template);
        });
      });
    }
  }]);

  return TemplateHelper;
}();

exports.default = TemplateHelper;