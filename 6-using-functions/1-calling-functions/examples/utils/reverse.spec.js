import { reverse } from './reverse.js';

describe('reverse', () => {
  describe('when parametr is the string', () => {
    it('return reversed string', () => {
      const expected = 'kilaM';
      const actual = reverse('Malik');
      expect(actual).toEqual(expected);
    });
    it('should return reversed string', () => {
      const expected = 'odnanreF';
      const actual = reverse('Fernando');
      expect(actual).toEqual(expected);
    });
  });
});
