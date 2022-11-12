<template>
  <div>
    <div class="actions">
      <nuxt-link
        class="btn-circle active btn btn-outline-success mx-1 my-2"
        to="add-products"
      >
        <span class="glyphicon glyphicon-plus"></span>
        Add Product
      </nuxt-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>

          <th class="col-sm-2">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>
            <nuxt-link
              :to="{ name: 'product-id-edit', params: { id: product._id } }"
              >{{ product.name }}</nuxt-link
            >
          </td>
          <td>{{ product.description }}</td>

          <td>{{ product.location }}</td>
          <td>
            <nuxt-link
              :to="{ name: 'product-id-edit', params: { id: product._id } }"
              class="btn btn-warning btn-xs"
              >Edit</nuxt-link
            >
            <nuxt-link
              :to="{ name: 'product-id-delete', params: { id: product._id } }"
              class="btn btn-danger btn-xs"
              >Delete</nuxt-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  middleware: "isAuthenticated",
  data() {
    return {
      products: this.$store.getters.getProducts,
    };
  },
  computed: {},
  async mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style></style>
