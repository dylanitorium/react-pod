#! /usr/bin/env node
var exec = require('child_process').exec;

var getComponentContent = function (name, lowercase) {
  var template = `import React from \'react\';\n`;
  template += `import { ${lowercase} } from \'./${lowercase}.css\';\n\n`;
  template += `const ${name} = () => {\n};\n\n`;
  template += `${name}.PropTypes = {\n};\n\n`;
  template += `export default ${name};`;
  return template;
};

var getStyleContent = function (lowercase) {
  return `.${lowercase} {\n}`;
};

var getIndexContent = function (name) {
  return `export { default } from \'./${name}\';`;
}

var handleOutput = function(err, stdout, stderr) {
  console.log(stdout);
  if (err) return console.error(err);

  if (stdout) return console.info(stdout);

  if (stderr) return console.error(stderr);
}

var compName = process.argv[2];
var uncasedName = compName.toLowerCase();
var comp = getComponentContent(compName, uncasedName);
var index = getIndexContent(compName);
var style = getStyleContent(uncasedName);


var child = exec(`mkdir ${compName}`, function (err, stdout, stderr) {
  handleOutput(err, stdout, stderr);
  var command = `echo "${comp}" >${compName}/${compName}.js | `;
  command += `echo "${style}" >${compName}/${uncasedName}.css | `;
  command += `echo "${index}" >${compName}/index.js`;
  var child = exec(command, handleOutput);
});
