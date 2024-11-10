<template>
  <div id="app">
    <header>
      <h1>TodoList App</h1>
      <LoginLogout />
    </header>
    <main>
      <TodoList v-if="isLoggedIn" />
    </main>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import LoginLogout from './components/LoginLogout.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    LoginLogout,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #35495e;
  color: white;
}

main {
  padding: 20px;
}
</style>
