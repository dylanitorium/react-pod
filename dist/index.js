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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorHandler = function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);
  }

  _createClass(ErrorHandler, null, [{
    key: "throwError",
    value: function throwError(process) {
      (function (message) {
        console.error("Error: " + message);
        process.exit(1);
      });
    }
  }]);

  return ErrorHandler;
}();

exports.default = ErrorHandler;
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
#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _capitalize = require('capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

var _ArgumentHelper = require('./helpers/ArgumentHelper');

var _ArgumentHelper2 = _interopRequireDefault(_ArgumentHelper);

var _ErrorHandler = require('./helpers/ErrorHandler');

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _PathHelper = require('./helpers/PathHelper');

var _PathHelper2 = _interopRequireDefault(_PathHelper);

var _AssetHelper = require('./helpers/AssetHelper');

var _AssetHelper2 = _interopRequireDefault(_AssetHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = _ArgumentHelper2.default.parseArguments(process);
var component = data.component;

if (_fs2.default.existsSync(component)) {
  _ErrorHandler2.default.throwError(process)('A directory with the name you have chosen already exists');
}

_fs2.default.mkdirSync(component);

Promise.all([_AssetHelper2.default.createAsset(data, 'templates/component.js.mst').then(_AssetHelper2.default.writeAsset(_PathHelper2.default.getComponentPath(data))), _AssetHelper2.default.createAsset(data, 'templates/index.js.mst').then(_AssetHelper2.default.writeAsset(_PathHelper2.default.getIndexPath(data))), _AssetHelper2.default.createAsset(data, 'templates/style.css.mst').then(_AssetHelper2.default.writeAsset(_PathHelper2.default.getStylePath(data)))]).then(function () {
  return process.exit();
}).catch(_ErrorHandler2.default.throwError(process));
