<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-white shadow">
      <a class="navbar-brand" href="/">
        <img src="/images/logo-dark.png" class="logo-img" alt="Troov" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <template v-if="!isAuthenticated">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link">About us</nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link to="/contact" class="nav-link">Contact us</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="btn btn-outline-dark nav-link mr-1"
                to="/register"
                >Inscription</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link btn-rounded btn btn-outline-dark"
                to="/login"
                >Connexion</nuxt-link
              >
            </li>
          </template>
          <template v-else>
            <li>
              <nuxt-link
                class="nav-link active btn btn-blue mr-1"
                aria-current="page"
                to="/product"
                >Products
              </nuxt-link>
            </li>

            <li>
              <nuxt-link
                class="nav-link btn-circle active btn btn-outline-success mr-1"
                aria-current="page"
                to="/profile"
              >
                {{ getUserInfo.nom.toUpperCase() }} profile
              </nuxt-link>
            </li>
            <li class="nav-item" @click="logout">
              <nuxt-link
                class="nav-link active btn btn-outline-danger mr-1"
                aria-current="page"
                to="#"
                >Logout</nuxt-link
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <div class="container"></div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    },
  },
};
</script>

<style>
.logo-img {
  width: 130px;
}

button {
  text-decoration: none;
}
</style>
