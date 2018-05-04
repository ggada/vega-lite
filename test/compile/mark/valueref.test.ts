import {assert} from 'chai';
import {midPoint} from '../../../src/compile/mark/valueref';

describe('compile/mark/valueref', () => {
  describe('midPoint()', () => {
    it('should return correct value for width', () => {
      const ref = midPoint('x', {value: 'width'}, undefined, undefined, undefined, undefined);
      assert.deepEqual(ref, {field: {group: 'width'}});
    });
    it('should return correct value for height', () => {
      const ref = midPoint('y', {value: 'height'}, undefined, undefined, undefined, undefined);
      assert.deepEqual(ref, {field: {group: 'height'}});
    });
  });
});
