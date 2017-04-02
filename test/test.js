import chai from 'chai';

import ArgumentHelper from '../src/helpers/ArgumentHelper';

chai.should();

/**
 * ArgumentHelper
 * ==============
 */
describe('ArgumentHelper', function() {
  describe('#parseArguments()', function() {
    it('should return a capitalized first letter and lowercase version as' +
    ' properties of an object with the names component and style',
    function() {
      const expected = {
        component: 'TestCase',
        style: 'testcase',
      };
      const mock = {
        argv: [
          null,
          null,
          'testCase',
        ],
      };
      const actual = ArgumentHelper.parseArguments(mock);
      actual.component.should.equal(expected.component);
      actual.style.should.equal(expected.style);
    });
  });
});

describe('AssetHelper', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
//
// describe('ErrorHandler', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
//
// describe('PathHelper', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
//
// describe('TemplateHelper', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
