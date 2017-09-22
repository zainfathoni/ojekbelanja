import user from "./user";
import { setUser, clearUser } from "../actions";

test("SET_USER", () => {
  const before = {
    name: "Zain"
  };
  const action = setUser("name", "Zain Fathoni");
  const after = {
    name: "Zain Fathoni"
  };

  expect(user(before, action)).toEqual(after);
});

test("CLEAR_USER", () => {
  const before = {
    name: "Zain"
  };
  const action = clearUser();
  const after = {};

  expect(user(before, action)).toEqual(after);
});
