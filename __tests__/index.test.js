/* eslint-disable no-undef */
import reverse from '../index.js';

test('test1', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
