export const state = () => ({
  products: [],
});

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  ADD_PRODUCT(state, product) {
    console.log("add " + product.name);

    state.products.push({
      name: product.name,
      description: product.description,
      price: product.etat,
    });
  },
  async UPDATE_PRODUCT(state, product) {
    let found = state.products.find((p) => p._id === product._id);
    console.log("update " + found.name);
    found.name = product.name;
    found.description = product.description;
    found.location = product.location;
    await this.$axios.$put(
      `http://localhost:5000/api/v1/products/${product._id}`,
      found
    );
  },
  async DELETE_PRODUCT(state, product) {
    let foundIndex = state.products.findIndex((p) => p.id === product.id);
    console.log("delete " + product.name, product._id);
    if (foundIndex !== -1) state.products.splice(foundIndex, 1);

    await this.$axios.$delete(
      `http://localhost:5000/api/v1/products/${product._id}`
    );
  },
};

export const actions = {
  async fetchProducts({ commit }) {
    try {
      const data = await this.$axios.$get(
        `http://localhost:5000/api/v1/products`
      );
      console.log(data.data);
      commit("SET_PRODUCTS", data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async addProducts({ commit }, product) {
    try {
      const data = await this.$axios.$post(
        `http://localhost:5000/api/v1/products`,
        product
      );
      commit("ADD_PRODUCT", data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
  },
  getUserInfo(state) {
    return state.auth.user;
  },
  getProducts: (state) => state.products,
};
