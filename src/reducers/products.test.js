import products, {
  getCategories,
  getCategory,
  getProducts,
  getProduct,
  getKeyword,
  getIsFetching,
  getError,
  isMatching
} from "./products";

const categories = {
  ayam: "Daging Ayam",
  bumbu: "Bumbu"
};
const items = {
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
const state = {
  categories,
  items,
  error: null,
  isFetching: false,
  keyword: "jah"
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

test("getCategories", () => {
  expect(getCategories(state)).toEqual(categories);
});

test("getCategory", () => {
  expect(getCategory(state, "bumbu")).toEqual(categories.bumbu);
});

test("getProducts", () => {
  expect(getProducts(state)).toEqual(items);
});

test("getProduct", () => {
  expect(getProduct(state, "jahe")).toEqual(items.jahe);
});

test("getKeyword", () => {
  expect(getKeyword(state)).toEqual("jah");
});

test("getIsFetching", () => {
  expect(getIsFetching(state)).toEqual(false);
});

test("getError", () => {
  expect(getError(state)).toEqual(null);
});

describe("isMatching", () => {
  it("name matches", () => {
    expect(
      isMatching(
        {
          keyword: "ket",
          items: {
            ketan: {
              name: "Ketan"
            }
          }
        },
        "ketan"
      )
    ).toBe(true);
  });

  it("desc matches", () => {
    expect(
      isMatching(
        {
          keyword: "bak",
          items: {
            ketan: {
              name: "Ketan",
              desc: "Ketan Bakar"
            }
          }
        },
        "ketan"
      )
    ).toBe(true);
  });

  it("category matches", () => {
    expect(
      isMatching(
        {
          keyword: "jaj",
          items: {
            ketan: {
              name: "Ketan",
              desc: "Ketan Bakar",
              category: "pasar"
            }
          },
          categories: {
            pasar: "Jajanan Pasar"
          }
        },
        "ketan"
      )
    ).toBe(true);
  });

  it("no match", () => {
    expect(
      isMatching(
        {
          keyword: "kec",
          items: {
            ketan: {
              name: "Ketan",
              desc: "Ketan Bakar",
              category: "pasar"
            }
          },
          categories: {
            pasar: "Jajanan Pasar"
          }
        },
        "ketan"
      )
    ).toBe(false);
  });
});
