# React Pod

This is a basic command-line tool to assist with boilerplating React Pods. Pod is a term
borrowed from Ember.js but also aptly describes the file configuration here.

## Installation

`$ npm install -g react-pod`

## Usage

`$ react-pod MyComponentName`

```
MyComponentName
-- MyComponentName.js
-- index.js
-- mycomponentname.css
```

__MyComponentName.js__
```
import React from 'react';
import { mycomponentname } from './mycomponentname.css';

const MyComponentName = () => {

};

MyComponentName.PropTypes = {

};

export default MyComponentName;
```

__index.js__
```
export { default } from './MyComponentName';
```

__mycomponentname.css__
```
.{{mycomponentname}} {

}
```
