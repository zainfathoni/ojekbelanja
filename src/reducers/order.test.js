import order from './order';
import { orderPlus, orderMinus, orderSet, orderRemove, orderClean, orderClear } from '../actions';

test('INC_ORDER', () => {
  const before = {
    kecap: 1,
  };
  const action = orderPlus("kecap");
  const after = {
    kecap: 2,
  };

  expect(
    order(before, action)
  ).toEqual(after);
});

test('INC_ORDER Empty', () => {
  const before = {};
  const action = orderPlus("kecap");
  const after = {
    kecap: 1,
  };

  expect(
    order(before, action)
  ).toEqual(after);
});

test('DEC_ORDER', () => {
  const before = {
    kecap: 2,
  };
  const action = orderMinus("kecap");
  const after = {
    kecap: 1,
  };

  expect(
    order(before, action)
  ).toEqual(after);
});

test('DEC_ORDER Empty', () => {
  const before = {
    kecap: 1,
  };
  const action = orderMinus("kecap");
  const after = {};

  expect(
    order(before, action)
  ).toEqual(after);
});

test('SET_ORDER', () => {
  const before = {};
  const action = orderSet("kecap", 3);
  const after = {
    kecap: 3,
  };

  expect(
    order(before, action)
  ).toEqual(after);
});

test('REMOVE_ORDER', () => {
  const before = {
    kecap: 3,
  };
  const action = orderRemove("kecap");
  const after = {};

  expect(
    order(before, action)
  ).toEqual(after);
});

test('CLEAN_ORDER', () => {
  const before = {
    kecap: 3,
    saos: 2,
  };
  const action = orderClean({
    kecap: {
      empty: false,
    },
    saos: {
      empty: true,
    },
  });
  const after = {
    kecap: 3,
  };

  expect(
    order(before, action)
  ).toEqual(after);
});

test('CLEAN_ORDER No Product', () => {
  const before = {
    kecap: 3,
    saos: 2,
  };
  const action = orderClean({
    kecap: {
      empty: false,
    },
  });
  const after = {
    kecap: 3,
  };

  expect(
    order(before, action)
  ).toEqual(after);
});

test('CLEAR_ORDER', () => {
  const before = {
    kecap: 3,
    saos: 2,
  };
  const action = orderClear();
  const after = {};

  expect(
    order(before, action)
  ).toEqual(after);
});
