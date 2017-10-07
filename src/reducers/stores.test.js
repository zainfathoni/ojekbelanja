import stores, {
  getStores,
  getStore,
  getCost,
  getKeyword,
  getIsFetching,
  getError,
  getFilteredStores
} from "./stores";

const items = {
  jejen: {
    area: "Sadang Serang & sekitarnya",
    cost: 2000,
    image: "placeholder-224x224.png",
    name: "Jejen",
    phone: "081234567890"
  }
};

const state = {
  items,
  error: null,
  isFetching: false,
  keyword: "jej"
};

test("FETCH_STORES_REQUEST", () => {
  const before = {};
  const action = {
    type: "FETCH_STORES_REQUEST"
  };
  const after = {
    items: {},
    error: null,
    isFetching: true,
    keyword: ""
  };

  expect(stores(before, action)).toEqual(after);
});

test("FETCH_STORES_FAILURE", () => {
  const before = {};
  const action = {
    type: "FETCH_STORES_FAILURE",
    message: "Failed to fetch stores."
  };
  const after = {
    items: {},
    error: "Failed to fetch stores.",
    isFetching: false,
    keyword: ""
  };

  expect(stores(before, action)).toEqual(after);
});

test("FETCH_STORES_SUCCESS", () => {
  const before = {};
  const action = {
    type: "FETCH_STORES_SUCCESS",
    stores: items
  };
  const after = {
    items,
    error: null,
    isFetching: false,
    keyword: ""
  };

  expect(stores(before, action)).toEqual(after);
});

test("FETCH_STORE_SUCCESS", () => {
  const before = {};
  const action = {
    type: "FETCH_STORE_SUCCESS",
    id: "jejen",
    store: items.jejen
  };
  const after = {
    items,
    error: null,
    isFetching: false,
    keyword: ""
  };

  expect(stores(before, action)).toEqual(after);
});

test("SET_STORE_KEYWORD", () => {
  const action = {
    type: "SET_STORE_KEYWORD",
    keyword: "jej"
  };

  expect(stores({}, action).keyword).toEqual("jej");
});

test("getStores", () => {
  expect(getStores(state)).toEqual(items);
});

test("getStore", () => {
  expect(getStore(state, "jejen")).toEqual(items.jejen);
});

test("getCost", () => {
  expect(getCost(state, "jejen")).toEqual(items.jejen.cost);
});

test("getKeyword", () => {
  expect(getKeyword(state)).toEqual("jej");
});

test("getIsFetching", () => {
  expect(getIsFetching(state)).toEqual(false);
});

test("getError", () => {
  expect(getError(state)).toEqual(null);
});

describe("getFilteredStores", () => {
  it("no keyword", () => {
    expect(getFilteredStores(state)).toEqual({
      jejen: {
        id: "jejen",
        title: "Jejen",
        description: "Sadang Serang & sekitarnya",
        image: require(`../css/images/placeholder-224x224.png`),
        price: 2000,
        unit: "pengiriman"
      }
    });
  });

  it("matching keyword", () => {
    expect(getFilteredStores({ ...state, keyword: "je" })).toEqual({
      jejen: {
        id: "jejen",
        title: "Jejen",
        description: "Sadang Serang & sekitarnya",
        image: require(`../css/images/placeholder-224x224.png`),
        price: 2000,
        unit: "pengiriman"
      }
    });
  });

  it("no matching keyword", () => {
    expect(getFilteredStores({ ...state, keyword: "as" })).toEqual({});
  });
});
