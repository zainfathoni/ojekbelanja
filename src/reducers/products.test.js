import products from "./products";

test("SET_PRODUCT_KEYWORD", () => {
  const action = {
    type: "SET_PRODUCT_KEYWORD",
    keyword: "kecap"
  };

  expect(products({}, action).keyword).toEqual("kecap");
});
