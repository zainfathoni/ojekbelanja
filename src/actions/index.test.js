import {
  incOrder,
  decOrder,
  setOrder,
  removeOrder,
  clearOrder,
  setUser,
  clearUser,
  setStoreKeyword,
  setProductKeyword
} from ".";

test("incOrder", () => {
  expect(incOrder("kecap")).toEqual({
    type: "INC_ORDER",
    id: "kecap"
  });
});

test("decOrder", () => {
  expect(decOrder("kecap")).toEqual({
    type: "DEC_ORDER",
    id: "kecap"
  });
});

test("setOrder", () => {
  expect(setOrder("kecap", 2)).toEqual({
    type: "SET_ORDER",
    id: "kecap",
    count: 2
  });
});

test("removeOrder", () => {
  expect(removeOrder("kecap")).toEqual({
    type: "REMOVE_ORDER",
    id: "kecap"
  });
});

test("clearOrder", () => {
  expect(clearOrder()).toEqual({
    type: "CLEAR_ORDER"
  });
});

test("setUser", () => {
  expect(setUser("name", "Zain Fathoni")).toEqual({
    type: "SET_USER",
    field: "name",
    value: "Zain Fathoni"
  });
});

test("clearUser", () => {
  expect(clearUser()).toEqual({
    type: "CLEAR_USER"
  });
});

test("setStoreKeyword", () => {
  expect(setStoreKeyword("jej")).toEqual({
    type: "SET_STORE_KEYWORD",
    keyword: "jej"
  });
});

test("setProductKeyword", () => {
  expect(setProductKeyword("jah")).toEqual({
    type: "SET_PRODUCT_KEYWORD",
    keyword: "jah"
  });
});
