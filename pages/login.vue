<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 pb-5">
        <h2 class="title has-text-centered pt-5">Welcome back!</h2>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="loginData.email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              v-model="loginData.password"
              class="form-control"
              id="password"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: "yonitek@gmail.com",
        password: "123456",
      },
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.loginData,
        });
        this.$router.replace("/");

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
