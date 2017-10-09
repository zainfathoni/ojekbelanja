import order, { getOrder, getOrderCount, getOrderQty } from "./order";
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
  const action = {
    type: "CLEAN_ORDER",
    products: {
      kecap: {
        empty: false
      }
    }
  };
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

test("default", () => {
  const before = {
    kecap: 3
  };
  const action = {
    type: "UNKNOWN"
  };

  expect(order(before, action)).toEqual(before);
});

test("getOrder", () => {
  expect(getOrder({ kecap: 1 })).toEqual({ kecap: 1 });
});

test("getOrderCount", () => {
  expect(getOrderCount({ kecap: 1, saos: 2 })).toEqual(2);
});

test("getOrderQty", () => {
  expect(getOrderQty({ kecap: 2 }, "kecap")).toEqual(2);
});
