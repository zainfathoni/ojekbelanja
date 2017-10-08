import React from "react";
import {
  getStores,
  getStore,
  getCost,
  getStoreKeyword,
  getStoreIsFetching,
  getStoreError,
  getFilteredStoreCards,
  getCategories,
  getCategory,
  getProducts,
  getProduct,
  getProductKeyword,
  getProductIsFetching,
  getProductError,
  isProductMatching,
  getOrder,
  getOrderCount,
  getOrderQty,
  isValid,
  isUserValid,
  isRequired,
  isRequirementFulfilled,
  areRequirementsFulfilled,
  getQuantity,
  getQuantities,
  getSubtotal,
  getSubtotals,
  getTotal,
  getFilteredProductCards,
  getOrderListItems,
  getOrderTable
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
        unit: "kg",
        promo: "100% Original",
        promo_desc: "Asli jajahan Belanda"
      }
    },
    error: null,
    isFetching: false,
    keyword: "jah"
  },
  order: {
    ayam_fillet: 4,
    jahe: 3
  },
  user: {
    name: "Zain Fathoni",
    email: "zainfathoni@ojekbelanja.id",
    phone: "081234567890",
    city: "Bandung",
    address: "Jalan jalan"
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

test("getFilteredStoreCards", () => {
  expect(getFilteredStoreCards(state)).toEqual({
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

test("getCategories", () => {
  expect(getCategories(state)).toEqual(state.products.categories);
});

test("getCategory", () => {
  expect(getCategory(state, "bumbu")).toEqual(state.products.categories.bumbu);
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

test("getProductIsFetching", () => {
  expect(getProductIsFetching(state)).toEqual(false);
});

test("getProductError", () => {
  expect(getProductError(state)).toEqual(null);
});

test("isProductMatching", () => {
  expect(isProductMatching(state, "jahe")).toEqual(true);
});

test("getOrder", () => {
  expect(getOrder(state)).toEqual(state.order);
});

test("getOrderCount", () => {
  expect(getOrderCount(state)).toEqual(Object.keys(state.order).length);
});

test("getOrderQty", () => {
  expect(getOrderQty(state, "jahe")).toEqual(state.order.jahe);
});

test("isValid", () => {
  expect(isValid(state, "email")).toBe(true);
});

test("isUserValid", () => {
  expect(isUserValid(state)).toBe(true);
});

test("isRequired", () => {
  expect(isRequired("name")).toBe(true);
});

test("isRequirementFulfilled", () => {
  expect(isRequirementFulfilled(state, "name")).toBeTruthy;
});

test("areRequirementsFulfilled", () => {
  expect(areRequirementsFulfilled(state)).toBe(true);
});

test("getQuantity", () => {
  expect(getQuantity(state, "ayam_fillet")).toEqual("1 kg");
  expect(getQuantity(state, "jahe")).toEqual("750 gram");
  expect(getQuantity(state, "kue_bolu")).toEqual(undefined);
});

test("getQuantities", () => {
  expect(getQuantities(state)).toEqual({
    ayam_fillet: "1 kg",
    jahe: "750 gram"
  });
});

test("getSubtotal", () => {
  expect(getSubtotal(state, "ayam_fillet")).toEqual("Rp 42,000");
  expect(getSubtotal(state, "jahe")).toEqual("Rp 12,000");
  expect(getSubtotal(state, "kue_bolu")).toEqual(undefined);
});

test("getSubtotals", () => {
  expect(getSubtotals(state)).toEqual({
    ayam_fillet: "Rp 42,000",
    jahe: "Rp 12,000"
  });
});

test("getTotal", () => {
  expect(getTotal(state)).toEqual(54000);
  let itemlessProducts = { ...state.products, items: {} };
  let productlessState = { ...state, products: itemlessProducts };
  expect(getTotal(productlessState)).toEqual(0);
});

test("getFilteredProductCards", () => {
  expect(getFilteredProductCards(state)).toEqual({
    jahe: {
      id: "jahe",
      section: "bumbu",
      title: "Jahe",
      description: "Jahe",
      image: require(`../css/images/placeholder-224x224.png`),
      price: 16000,
      unit: "kg",
      overlay: "750 gram",
      disabled: undefined,
      ribbon: "100% Original",
      tooltip: "Asli jajahan Belanda"
    }
  });
});

test("getOrderListItems", () => {
  expect(getOrderListItems(state)).toEqual({
    ayam_fillet: {
      id: "ayam_fillet",
      name: "Ayam Fillet",
      desc: "Ayam Fillet",
      image: require(`../css/images/placeholder-224x224.png`),
      unit: "kg",
      step: 0.25,
      price: 42000,
      count: 4,
      quantity: "1 kg",
      subtotal: "Rp 42,000"
    },
    jahe: {
      id: "jahe",
      name: "Jahe",
      desc: "Jahe",
      image: require(`../css/images/placeholder-224x224.png`),
      unit: "kg",
      step: 0.25,
      price: 16000,
      count: 3,
      quantity: "750 gram",
      subtotal: "Rp 12,000"
    }
  });
});

test("getOrderTable", () => {
  expect(getOrderTable(state)).toEqual([
    {
      number: 1,
      name: "Ayam Fillet",
      price: (
        <div>
          Rp {"42,000"}
          <span className="ThankYou-pesanan-unit"> /{"kg"}</span>
        </div>
      ),
      qty: "1 kg",
      subtotal: "Rp 42,000"
    },
    {
      number: 2,
      name: "Jahe",
      price: (
        <div>
          Rp {"16,000"}
          <span className="ThankYou-pesanan-unit"> /{"kg"}</span>
        </div>
      ),
      qty: "750 gram",
      subtotal: "Rp 12,000"
    }
  ]);
});
