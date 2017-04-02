export default class PathHelper {
  static getComponentPath({ component }) {
    return `${component}/${component}.js`;
  }
  static getStylePath({ component, style }) {
    return `${component}/${style}.css`;
  }
  static getIndexPath({ component }) {
    return `${component}/index.js`;
  }
}
