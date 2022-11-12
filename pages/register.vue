<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 pb-5">
        <h2 class="title has-text-centered pt-5">Welcome!</h2>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="fullname" class="form-label">Prenom</label>
            <input
              type="text"
              v-model="registerData.prenom"
              class="form-control"
              id="prenom"
            />
          </div>
          <div class="mb-3">
            <label for="fullname" class="form-label">nom</label>
            <input
              type="text"
              v-model="registerData.nom"
              class="form-control"
              id="nom"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="registerData.email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              v-model="registerData.password"
              class="form-control"
              id="password"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerData: {
        prenom: "",
        nom: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const user = await this.$axios.$post(
          "http://localhost:5000/api/v1/auth/register",
          {
            prenom: this.registerData.prenom,
            nom: this.registerData.nom,
            email: this.registerData.email,
            password: this.registerData.password,
          }
        );
        console.log(user);
        this.$router.replace("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
