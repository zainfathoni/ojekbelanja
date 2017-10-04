import user, { isValid } from "./user";
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

describe("isValid", () => {
  it("email valid", () => {
    expect(isValid({ email: "zainfathoni@ojekbelanja.id" }, "email")).toBe(
      true
    );
  });
  it("email invalid", () => {
    expect(isValid({ email: "gmail" }, "email")).toBe(false);
  });
  it("phone valid", () => {
    expect(isValid({ phone: "081234567890" }, "phone")).toBe(true);
  });
  it("phone invalid", () => {
    expect(isValid({ phone: "81234567890" }, "phone")).toBe(false);
  });
  it("password valid", () => {
    expect(isValid({ password: "123456" }, "password")).toBe(true);
  });
  it("password invalid", () => {
    expect(isValid({ password: "12345" }, "password")).toBe(false);
  });
  it("default", () => {
    expect(isValid({ password: "12345" }, "pass")).toBe(true);
  });
});
