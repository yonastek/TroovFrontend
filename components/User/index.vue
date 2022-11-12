<template>
  <div>
    Bonjour
    <b style="color: red; font-size: 2rem"
      >{{ getUserInfo.prenom }} {{ getUserInfo.nom }}</b
    >

    <hr />
    This is your information:
    <br /><br />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nom complet</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ getUserInfo._id }}</td>
          <td>{{ getUserInfo.prenom }}{{ getUserInfo.nom }}</td>
          <td>{{ getUserInfo.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  middleware: "isAuthenticated",
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    },
  },
};
</script>
