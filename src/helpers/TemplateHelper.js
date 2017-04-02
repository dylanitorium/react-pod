import Mustache from 'mustache';
import fs from 'fs';

export default class TemplateHelper {
  static populateTemplate(data) {
    return template => Mustache.render(template, data);
  }

  static getTemplate(path) {
    return new Promise((resolve, reject) => (
      fs.readFile(path, 'utf8', (error, template) => {
        return (error) ? reject(error) : resolve(template)
      })
    ));
  }
}
