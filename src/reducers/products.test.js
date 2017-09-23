import products from "./products";

const categories = {
  ayam: "Daging Ayam",
  bumbu: "Bumbu"
};
const items = {
  ayam_fillet: {
    category: "ayam",
    desc: "Ayam Fillet",
    image: "placeholder-224x224.png",
    name: "Ayam Fillet",
    price: 42000,
    step: 0.25,
    unit: "kg"
  },
  jahe: {
    category: "bumbu",
    desc: "Jahe",
    image: "placeholder-224x224.png",
    name: "Jahe",
    price: 16000,
    step: 0.25,
    unit: "kg"
  }
};

test("FETCH_PRODUCTS_REQUEST", () => {
  const before = {};
  const action = {
    type: "FETCH_PRODUCTS_REQUEST"
  };
  const after = {
    categories: {},
    items: {},
    error: null,
    isFetching: true,
    keyword: ""
  };

  expect(products(before, action)).toEqual(after);
});

test("FETCH_PRODUCTS_FAILURE", () => {
  const before = {};
  const action = {
    type: "FETCH_PRODUCTS_FAILURE",
    message: "Failed to fetch products."
  };
  const after = {
    categories: {},
    items: {},
    error: "Failed to fetch products.",
    isFetching: false,
    keyword: ""
  };

  expect(products(before, action)).toEqual(after);
});

test("FETCH_PRODUCTS_SUCCESS", () => {
  const before = {};
  const action = {
    type: "FETCH_PRODUCTS_SUCCESS",
    categories,
    items
  };
  const after = {
    categories,
    items,
    error: null,
    isFetching: false,
    keyword: ""
  };

  expect(products(before, action)).toEqual(after);
});

test("SET_PRODUCT_KEYWORD", () => {
  const action = {
    type: "SET_PRODUCT_KEYWORD",
    keyword: "kecap"
  };

  expect(products({}, action).keyword).toEqual("kecap");
});
