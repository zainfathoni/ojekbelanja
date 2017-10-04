import user, {
  isValid,
  isUserValid,
  isRequired,
  isRequirementFulfilled,
  areRequirementsFulfilled
} from "./user";
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

describe("isUserValid", () => {
  it("yes", () => {
    expect(
      isUserValid({
        email: "zainfathoni@ojekbelanja.id",
        phone: "081234567890",
        password: "123456"
      })
    ).toBe(true);
  });
});

describe("isRequired", () => {
  it("name", () => {
    expect(isRequired("name")).toBe(true);
  });
  it("email", () => {
    expect(isRequired("email")).toBe(true);
  });
  it("phone", () => {
    expect(isRequired("phone")).toBe(true);
  });
  it("city", () => {
    expect(isRequired("city")).toBe(true);
  });
  it("address", () => {
    expect(isRequired("address")).toBe(true);
  });
  it("password", () => {
    expect(isRequired("password")).toBe(false);
  });
});

describe("isRequirementFulfilled", () => {
  it("string yes", () => {
    expect(isRequirementFulfilled({ name: "Zain" }, "name")).toBeTruthy;
  });
  it("string no", () => {
    expect(isRequirementFulfilled({ name: "" }, "name")).toBeFalsy;
  });
  it("not required", () => {
    expect(isRequirementFulfilled({}, "password")).toBeTruthy;
  });
});

describe("areRequirementsFulfilled", () => {
  it("yes", () => {
    expect(
      areRequirementsFulfilled({
        name: "Zain Fathoni",
        email: "zainfathoni@ojekbelanja.id",
        phone: "081234567890",
        city: "Bandung",
        address: "Jalan jalan"
      })
    ).toBe(true);
  });
  it("no", () => {
    expect(
      areRequirementsFulfilled({
        name: "Zain Fathoni",
        email: "zainfathoni@ojekbelanja.id",
        phone: "081234567890",
        city: "Bandung"
      })
    ).toBe(false);
  });
});
