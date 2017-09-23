import {
  getStores,
  getStore,
  getCost,
  getStoreKeyword,
  getStoreIsFetching,
  getStoreError,
  getCategories,
  getProducts,
  getProduct,
  getProductKeyword,
  getProductIsFetching,
  getProductError
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
  },
  products: {
    categories: {
      ayam: "Daging Ayam",
      bumbu: "Bumbu"
    },
    items: {
      jahe: {
        category: "bumbu",
        desc: "Jahe",
        image: "placeholder-224x224.png",
        name: "Jahe",
        price: 16000,
        step: 0.25,
        unit: "kg"
      }
    },
    error: null,
    isFetching: false,
    keyword: "jah"
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

test("getCategories", () => {
  expect(getCategories(state)).toEqual(state.products.categories);
});

test("getProducts", () => {
  expect(getProducts(state)).toEqual(state.products.items);
});

test("getProduct", () => {
  expect(getProduct(state, "jahe")).toEqual(state.products.items.jahe);
});

test("getProductKeyword", () => {
  expect(getProductKeyword(state)).toEqual("jah");
});

test("getSProductsFetching", () => {
  expect(getProductIsFetching(state)).toEqual(false);
});

test("getProductError", () => {
  expect(getProductError(state)).toEqual(null);
});
