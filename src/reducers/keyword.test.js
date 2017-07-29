import keyword from './keyword';
import { keywordSet, keywordClear } from '../actions';

test('USER_SET', () => {
  const before = "Zain";
  const action = keywordSet("Zain Fathoni");
  const after = "Zain Fathoni";

  expect(
    keyword(before, action)
  ).toEqual(after);
});

test('USER_CLEAR', () => {
  const before = "Zain";
  const action = keywordClear();
  const after = "";

  expect(
    keyword(before, action)
  ).toEqual(after);
});
