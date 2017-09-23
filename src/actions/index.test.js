import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  incOrder,
  decOrder,
  setOrder,
  removeOrder,
  clearOrder,
  setUser,
  clearUser,
  setStoreKeyword,
  setProductKeyword,
  fetchStores
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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchStores", () => {
  const stores = {
    jejen: {
      area: "Sadang Serang & sekitarnya",
      cost: 2000,
      image: "placeholder-224x224.png",
      name: "Jejen",
      phone: "081234567890"
    }
  };

  it("is fetching", () => {
    const store = mockStore({
      stores: {
        isFetching: true
      }
    });

    store.dispatch(fetchStores()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it("success", () => {
    const store = mockStore({
      stores: {
        isFetching: false
      }
    });

    const fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        stores
      })
    );

    const expectedActions = [
      { type: "FETCH_STORES_REQUEST" },
      {
        type: "FETCH_STORES_SUCCESS",
        stores: {
          stores
        }
      }
    ];

    store.dispatch(fetchStores(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fails with error message", () => {
    const store = mockStore({
      stores: {
        isFetching: false
      }
    });

    const fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        message: "Failed to fetch stores."
      })
    );

    const expectedActions = [
      { type: "FETCH_STORES_REQUEST" },
      {
        type: "FETCH_STORES_FAILURE",
        message: "Failed to fetch stores."
      }
    ];

    store.dispatch(fetchStores(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fails without error message", () => {
    const store = mockStore({
      stores: {
        isFetching: false
      }
    });

    const fetch = jest.fn().mockImplementation(() => Promise.reject({}));

    const expectedActions = [
      { type: "FETCH_STORES_REQUEST" },
      {
        type: "FETCH_STORES_FAILURE",
        message: "Tetap Tenang Tetap Semangat"
      }
    ];

    store.dispatch(fetchStores(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
