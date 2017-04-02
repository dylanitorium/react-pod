#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _capitalize = require('capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Functions
* =========
*/
var throwError = function throwError(message) {
  console.error('Error: ' + message);
  process.exit(1);
};

var getTemplate = function getTemplate(templatePath) {
  return new Promise(function (resolve, reject) {
    return _fs2.default.readFile(templatePath, 'utf8', function (error, template) {
      console.log(template);
      return error ? reject(error) : resolve(template);
    });
  });
};

var populateTemplate = function populateTemplate(data) {
  return function (template) {
    return _mustache2.default.render(template, data);
  };
};

var createAsset = function createAsset(data, templatePath) {
  return getTemplate(templatePath).then(populateTemplate(data)).catch(throwError);
};

var writeAsset = function writeAsset(path) {
  return function (content) {
    return new Promise(function (resolve, reject) {
      return _fs2.default.writeFile(path, content, function (error) {
        return error ? reject(error) : resolve();
      });
    });
  };
};

var getComponentPath = function getComponentPath(name) {
  return name + '/' + name + '.js';
};
var getStylePath = function getStylePath(name, nameLower) {
  return name + '/' + nameLower + '.css';
};
var getIndexPath = function getIndexPath(name) {
  return name + '/index.js';
};

/**
* Application
* ===========
*/
var argument = process.argv[2];
if (!argument) {
  error('You didn\'t specify a pod name');
}

var component = (0, _capitalize2.default)(argument);
var style = argument.toLowerCase();
var data = {
  component: component,
  style: style
};

if (_fs2.default.existsSync(component)) {
  throwError('A directory with the name you have chosen already exists');
}

_fs2.default.mkdirSync(component);

Promise.all([createAsset(data, 'templates/component.js.mst').then(writeAsset(getComponentPath(component))), createAsset(data, 'templates/index.js.mst').then(writeAsset(getIndexPath(component))), createAsset(data, 'templates/style.css.mst').then(writeAsset(getStylePath(component, style)))]).then(function () {
  return process.exit();
});