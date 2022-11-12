<template>
  <section>
    <h2>Add new Product</h2>
    <form v-on:submit.prevent="createProduct">
      <products-form :register-product="product"></products-form>
      <button type="submit" class="btn btn-primary">Create</button>
      <nuxt-link to="/" class="btn btn-default">Cancel</nuxt-link>
    </form>
  </section>
</template>

<script>
import productsForm from "../components/products-form.vue";

export default {
  components: { productsForm },
  layout: "vue-crud",
  data() {
    return {
      product: { name: "", description: "", location: "" },
    };
  },
  methods: {
    createProduct(e) {
      this.$store.dispatch("addProducts", this.product);
      console.log(this.product);
      this.$router.push("/product");
    },
  },
};
</script>
