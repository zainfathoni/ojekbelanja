import order from "./order";
import {
  incOrder,
  decOrder,
  setOrder,
  removeOrder,
  clearOrder
} from "../actions";

test("INC_ORDER", () => {
  const before = {
    kecap: 1
  };
  const action = incOrder("kecap");
  const after = {
    kecap: 2
  };

  expect(order(before, action)).toEqual(after);
});

test("INC_ORDER Empty", () => {
  const before = {};
  const action = incOrder("kecap");
  const after = {
    kecap: 1
  };

  expect(order(before, action)).toEqual(after);
});

test("DEC_ORDER", () => {
  const before = {
    kecap: 2
  };
  const action = decOrder("kecap");
  const after = {
    kecap: 1
  };

  expect(order(before, action)).toEqual(after);
});

test("DEC_ORDER Empty", () => {
  const before = {
    kecap: 1
  };
  const action = decOrder("kecap");
  const after = {};

  expect(order(before, action)).toEqual(after);
});

test("SET_ORDER", () => {
  const before = {};
  const action = setOrder("kecap", 3);
  const after = {
    kecap: 3
  };

  expect(order(before, action)).toEqual(after);
});

test("REMOVE_ORDER", () => {
  const before = {
    kecap: 3
  };
  const action = removeOrder("kecap");
  const after = {};

  expect(order(before, action)).toEqual(after);
});

test("CLEAN_ORDER No Product", () => {
  const before = {
    kecap: 3,
    saos: 2
  };
  const action = cleanOrder({
    kecap: {
      empty: false
    }
  });
  const after = {
    kecap: 3
  };

  expect(order(before, action)).toEqual(after);
});

test("CLEAR_ORDER", () => {
  const before = {
    kecap: 3,
    saos: 2
  };
  const action = clearOrder();
  const after = {};

  expect(order(before, action)).toEqual(after);
});
