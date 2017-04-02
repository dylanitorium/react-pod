import TemplateHelper from './TemplateHelper';
import fs from 'fs';

export default class AssetHelper {
  static createAsset(data, templatePath) {
    return TemplateHelper.getTemplate(templatePath).then(TemplateHelper.populateTemplate(data))
  }

  static writeAsset(path) {
    return content => (
      new Promise((resolve, reject) => (
        fs.writeFile(path, content, (error) => (
          (error) ? reject(error) : resolve()
        ))
      ))
    )
  }
}
