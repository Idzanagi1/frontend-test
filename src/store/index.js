import { createStore } from "vuex";

export default createStore({
  state: {
    productList: [
      {
        id: 1,
        img: require("../assets/img/product.png"),
        name: "Наименование товара",
        descr:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
    ],

    sortingType: "ascending",
  },
  mutations: {
    add_item(state, productData) {
      const newId =
        state.productList.length > 0
          ? Math.max(...state.productList.map((element) => element.id)) + 1
          : 1;
      productData["id"] = newId;
      state.productList.unshift(productData);
      localStorage.setItem("UserProducts", JSON.stringify(state.productList));
    },
    delete_item(state, productId) {
      state.productList = state.productList.filter(
        (element) => element.id != productId
      );
      localStorage.setItem("UserProducts", JSON.stringify(state.productList));
    },
    sort_type(state, type) {
      state.sortingType = type;
    },
    local_item: (state) => {
      const localProducts = localStorage.getItem("UserProducts");
      if (localProducts !== null) {
        state.productList = JSON.parse(localProducts);
      } else {
        state.productList = [{
          id: 1,
          img: require("../assets/img/product.png"),
          name: "Наименование товара",
          descr:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 10000,
        },];
      }
    },
  },
  actions: {
    add_card({ commit }, productData) {
      commit("add_item", productData);
    },
    remove_item({ commit }, productId) {
      commit("delete_item", productId);
    },
    sort_type({ commit }, type) {
      commit("sort_type", type);
    },
    load_local_storage({ commit }) {
      commit("local_item");
    },
  },
  getters: {},
});
