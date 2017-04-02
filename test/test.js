import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import mock from 'mock-fs';
import fs from 'fs';


import ArgumentHelper from '../src/helpers/ArgumentHelper';
import PathHelper from '../src/helpers/PathHelper';
import TemplateHelper from '../src/helpers/TemplateHelper';
import AssetHelper from '../src/helpers/AssetHelper';


chai.use(chaiAsPromised);
chai.should();

/**
 * ArgumentHelper
 * ==============
 */
describe('ArgumentHelper', () => {
  describe('#parseArguments()', () => {
    it('should return a capitalized first letter and lowercase version as' +
    ' properties of an object with the names component and style',
    () => {
      const expected = {
        component: 'TestCase',
        style: 'testcase',
      };
      const mocked = {
        argv: [
          null,
          null,
          'testCase',
        ],
      };
      const actual = ArgumentHelper.parseArguments(mocked);
      actual.component.should.equal(expected.component);
      actual.style.should.equal(expected.style);
    });
  });
});

/**
 * PathHelper
 * ==========
 */
describe('PathHelper', () => {
  describe('#getComponentPath()', () => {
    it('should return the component\'s path correctly', () => {
      const mocked = {
        component: 'TestCase',
        style: 'testcase',
      };
      const expected = 'TestCase/TestCase.js';
      PathHelper.getComponentPath(mocked).should.equal(expected);
    });
  });
  describe('#getStylePath()', () => {
    it('should return the stylesheet\'s path correctly', () => {
      const mocked = {
        component: 'TestCase',
        style: 'testcase',
      };
      const expected = 'TestCase/testcase.css';
      PathHelper.getStylePath(mocked).should.equal(expected);
    });
  });
  describe('#getIndexPath()', () => {
    it('should return the index\'s path correctly', () => {
      const mocked = {
        component: 'TestCase',
        style: 'testcase',
      };
      const expected = 'TestCase/index.js';
      PathHelper.getIndexPath(mocked).should.equal(expected);
    });
  });
});

mock({
  'test' : {
    'mockTemplate.mst': 'This is my template {{variable}}'
  }
});

/**
 * TemplateHelper
 * ==============
 */
describe('TemplateHelper', () => {
  describe('#getTemplate()', () => {
    it('should return the template', () => {
      const mocked = 'test/mockTemplate.mst';
      const expected = 'This is my template {{variable}}';
      TemplateHelper.getTemplate(mocked).should.eventually.equal(expected);
    });
  });
  describe('#populateTemplate()', () => {
    it('should populate the template', () => {
      const mocked = {
        data: {
          variable: 'test',
        },
        template: 'This is my template {{variable}}',
      };
      const expected = 'This is my template test';
      TemplateHelper.populateTemplate(mocked.data)(mocked.template).should.equal(expected);
    });
  });
});

/**
 * AssetHelper
 * ===========
 */
describe('AssetHelper', () => {
  describe('#createAsset()', () => {
    it('should create asset from template path and data', () => {
      const mocked = {
        data: {
          variable: 'test',
        },
        templatePath: 'test/mockTemplate.mst',
      };
      const expected = 'This is my template test';
      AssetHelper.createAsset(mocked.data, mocked.templatePath).should.eventually.equal(expected);
    });
  });
  describe('#writeAsset()', () => {
    it('should write the asset to the file system', () => {
      const mocked = {
        path: './test.txt',
        content: 'Hello, world',
      };
      AssetHelper.writeAsset(mocked.path)(mocked.content).then(() => {
        fs.readFileSync(mocked.path, 'utf8', (content) => {
          content.should.equal(momockedck.content);
        });
      });
    });
  });
});



mock.restore();
