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