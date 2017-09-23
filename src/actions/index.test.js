import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as act from ".";

test("incOrder", () => {
  expect(act.incOrder("kecap")).toEqual({
    type: act.INC_ORDER,
    id: "kecap"
  });
});

test("decOrder", () => {
  expect(act.decOrder("kecap")).toEqual({
    type: act.DEC_ORDER,
    id: "kecap"
  });
});

test("setOrder", () => {
  expect(act.setOrder("kecap", 2)).toEqual({
    type: act.SET_ORDER,
    id: "kecap",
    count: 2
  });
});

test("removeOrder", () => {
  expect(act.removeOrder("kecap")).toEqual({
    type: act.REMOVE_ORDER,
    id: "kecap"
  });
});

test("clearOrder", () => {
  expect(act.clearOrder()).toEqual({
    type: act.CLEAR_ORDER
  });
});

test("setUser", () => {
  expect(act.setUser("name", "Zain Fathoni")).toEqual({
    type: act.SET_USER,
    field: "name",
    value: "Zain Fathoni"
  });
});

test("clearUser", () => {
  expect(act.clearUser()).toEqual({
    type: act.CLEAR_USER
  });
});

test("setStoreKeyword", () => {
  expect(act.setStoreKeyword("jej")).toEqual({
    type: act.SET_STORE_KEYWORD,
    keyword: "jej"
  });
});

test("setProductKeyword", () => {
  expect(act.setProductKeyword("jah")).toEqual({
    type: act.SET_PRODUCT_KEYWORD,
    keyword: "jah"
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const emptyStores = {
  stores: {}
};

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

    return store.dispatch(act.fetchStores()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it("success", () => {
    const store = mockStore(emptyStores);

    const fetch = () =>
      Promise.resolve({
        stores
      });

    const expectedActions = [
      { type: act.FETCH_STORES_REQUEST },
      {
        type: act.FETCH_STORES_SUCCESS,
        stores: {
          stores
        }
      }
    ];

    return store.dispatch(act.fetchStores(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fails with error message", () => {
    const store = mockStore(emptyStores);

    const fetch = () =>
      Promise.reject({
        message: "Failed to fetch stores."
      });

    const expectedActions = [
      { type: act.FETCH_STORES_REQUEST },
      {
        type: act.FETCH_STORES_FAILURE,
        message: "Failed to fetch stores."
      }
    ];

    return store.dispatch(act.fetchStores(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fails without error message", () => {
    const store = mockStore(emptyStores);

    const fetch = () => Promise.reject({});

    const expectedActions = [
      { type: act.FETCH_STORES_REQUEST },
      {
        type: act.FETCH_STORES_FAILURE,
        message: "Tetap Tenang Tetap Semangat"
      }
    ];

    return store.dispatch(act.fetchStores(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("fetchStore", () => {
  const id = "jejen";
  const toko = {
    area: "Sadang Serang & sekitarnya",
    cost: 2000,
    image: "placeholder-224x224.png",
    name: "Jejen",
    phone: "081234567890"
  };

  it("is fetching", () => {
    const store = mockStore({
      stores: {
        isFetching: true
      }
    });

    return store.dispatch(act.fetchStore()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });

  it("success", () => {
    const store = mockStore(emptyStores);

    const fetch = () =>
      Promise.resolve({
        ...toko
      });

    const expectedActions = [
      { type: act.FETCH_STORES_REQUEST },
      {
        type: act.FETCH_STORE_SUCCESS,
        id,
        store: toko
      }
    ];

    return store.dispatch(act.fetchStore(fetch, id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fails with error message", () => {
    const store = mockStore(emptyStores);

    const fetch = () =>
      Promise.reject({
        message: "Failed to fetch stores."
      });

    const expectedActions = [
      { type: act.FETCH_STORES_REQUEST },
      {
        type: act.FETCH_STORES_FAILURE,
        message: "Failed to fetch stores."
      }
    ];

    return store.dispatch(act.fetchStore(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fails without error message", () => {
    const store = mockStore(emptyStores);

    const fetch = () => Promise.reject({});

    const expectedActions = [
      { type: act.FETCH_STORES_REQUEST },
      {
        type: act.FETCH_STORES_FAILURE,
        message: "Tetap Tenang Tetap Semangat"
      }
    ];

    return store.dispatch(act.fetchStore(fetch)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
