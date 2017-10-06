import { isEmailValid, isPhoneValid, isPasswordValid } from "./form";

describe("isEmailValid", () => {
  it("no", () => {
    expect(isEmailValid("gmail")).toBe(false);
  });
  it("yes", () => {
    expect(isEmailValid("zainfathoni@ojekbelanja.id")).toBe(true);
  });
});

describe("isPhoneValid", () => {
  it("no", () => {
    expect(isPhoneValid("81234567890")).toBe(false);
  });
  it("yes", () => {
    expect(isPhoneValid("081234567890")).toBe(true);
  });
});

describe("isPasswordValid", () => {
  it("no", () => {
    expect(isPasswordValid("12345")).toBe(false);
  });
  it("yes", () => {
    expect(isPasswordValid("123456")).toBe(true);
  });
});
