// #todo
import { fileToVariable } from './file-to-variable.js';
describe('countCharacter: how many times a specific character appears in a string.', () => {
  describe('returns string', () => {
    it('', () => {
      const actual = 'fileToVariable';
      const returned = fileToVariable('file-to-variable.js');
      expect(actual).toEqual('fileToVariable');
    });
    it('returns string', () => {
      const actual = 'doMagic';
      const returned = fileToVariable('do-magic.js');
      expect(returned).toEqual(actual);
    });
  });
});
