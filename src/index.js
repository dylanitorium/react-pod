#!/usr/bin/env node

import fs from 'fs';
import capitalize from 'capitalize';
import Mustache from 'mustache';

/**
* Functions
* =========
*/
const throwError = (message) => {
  console.error(`Error: ${message}`);
  process.exit(1);
}

const getTemplate = templatePath => (
  new Promise((resolve, reject) => (fs.readFile(templatePath, 'utf8', (error, template) => {
    console.log(template);
    return (error) ? reject(error) : resolve(template)
  })))
);

const populateTemplate = data => (template => (Mustache.render(template, data)));

const createAsset = (data, templatePath) => (
  getTemplate(templatePath)
  .then(populateTemplate(data))
  .catch(throwError)
);

const writeAsset = path => (
  content => (new Promise((resolve, reject) => (fs.writeFile(path, content, (error) => (
    (error) ? reject(error) : resolve()
  )))))
);

const getComponentPath = name => (`${name}/${name}.js`);
const getStylePath = (name, nameLower) => (`${name}/${nameLower}.css`);
const getIndexPath = name => (`${name}/index.js`);

/**
* Application
* ===========
*/
const argument = process.argv[2];
if (!argument) {
  error('You didn\'t specify a pod name');
}

const component = capitalize(argument);
const style = argument.toLowerCase();
const data = {
  component,
  style,
};

if (fs.existsSync(component)) {
  throwError('A directory with the name you have chosen already exists');
}

fs.mkdirSync(component);

Promise.all([
  createAsset(data, 'templates/component.js.mst').then(writeAsset(getComponentPath(component))),
  createAsset(data, 'templates/index.js.mst').then(writeAsset(getIndexPath(component))),
  createAsset(data, 'templates/style.css.mst').then(writeAsset(getStylePath(component, style))),
]).then(() => process.exit());
