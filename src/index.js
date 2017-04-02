#!/usr/bin/env node

import fs from 'fs';
import capitalize from 'capitalize';
import Mustache from 'mustache';

import ArgumentHelper from './helpers/ArgumentHelper';
import ErrorHandler from './helpers/ErrorHandler';
import PathHelper from './helpers/PathHelper';
import AssetHelper from './helpers/AssetHelper';

const data = ArgumentHelper.parseArguments(process);
const { component } = data;
if (fs.existsSync(component)) {
  ErrorHandler.throwError(process)('A directory with the name you have chosen already exists');
}

fs.mkdirSync(component);

Promise.all([
  AssetHelper.createAsset(data, 'templates/component.js.mst')
    .then(
      AssetHelper.writeAsset(PathHelper.getComponentPath(data))
    ),
  AssetHelper.createAsset(data, 'templates/index.js.mst')
    .then(
      AssetHelper.writeAsset(PathHelper.getIndexPath(data))
    ),
  AssetHelper.createAsset(data, 'templates/style.css.mst')
    .then(
      AssetHelper.writeAsset(PathHelper.getStylePath(data))
    ),
])
.then(() => process.exit())
.catch(ErrorHandler.throwError(process));
