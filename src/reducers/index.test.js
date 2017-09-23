import {
  getStores,
  getStore,
  getCost,
  getStoreKeyword,
  getStoreIsFetching,
  getStoreError
} from ".";

const state = {
  stores: {
    items: {
      jejen: {
        area: "Sadang Serang & sekitarnya",
        cost: 2000,
        image: "placeholder-224x224.png",
        name: "Jejen",
        phone: "081234567890"
      }
    },
    error: null,
    isFetching: false,
    keyword: "jej"
  }
};

test("getStores", () => {
  expect(getStores(state)).toEqual(state.stores.items);
});

test("getStore", () => {
  expect(getStore(state, "jejen")).toEqual(state.stores.items.jejen);
});

test("getCost", () => {
  expect(getCost(state, "jejen")).toEqual(state.stores.items.jejen.cost);
});

test("getStoreKeyword", () => {
  expect(getStoreKeyword(state)).toEqual("jej");
});

test("getStoreIsFetching", () => {
  expect(getStoreIsFetching(state)).toEqual(false);
});

test("getStoreError", () => {
  expect(getStoreError(state)).toEqual(null);
});
