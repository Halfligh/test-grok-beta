<template>
  <div>
    <button v-if="!isLoggedIn" @click="login('User')">Login</button>
    <button v-else @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>

<style scoped>
button {
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}
</style>
