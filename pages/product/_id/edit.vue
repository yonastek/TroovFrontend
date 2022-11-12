<template>
  <section>
    <h2>Edit Product</h2>
    <form v-on:submit.prevent="updateProduct">
      <Product-form :register-product="product"></Product-form>
      <button type="submit" class="btn btn-primary">Save</button>
      <nuxt-link to="/product" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
import ProductForm from "../../../components/products-form.vue";

export default {
  components: { ProductForm },
  layout: "vue-crud",
  data() {
    return {
      product: JSON.parse(
        JSON.stringify(
          this.$store.state.products.find(
            (product) => product._id === this.$route.params.id
          )
        )
      ),
    };
  },
  methods: {
    updateProduct(e) {
      this.$store.commit("UPDATE_PRODUCT", this.product);
      this.$router.push("/product");
    },
  },
};
</script>
