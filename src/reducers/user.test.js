import user from './user';
import { userSet, userClear } from '../actions';

test('SET_USER', () => {
  const before = {
    name: "Zain",
  };
  const action = userSet("name", "Zain Fathoni");
  const after = {
    name: "Zain Fathoni",
  };

  expect(
    user(before, action)
  ).toEqual(after);
});

test('CLEAR_USER', () => {
  const before = {
    name: "Zain",
  };
  const action = userClear();
  const after = {};

  expect(
    user(before, action)
  ).toEqual(after);
});
