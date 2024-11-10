import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
    username: "",
    todos: [],
  },
  mutations: {
    //Pour la connexion
    SET_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      state.username = payload.username;
    },

    //Pour la todolist
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    TOGGLE_TODO(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  actions: {
    //Pour la connexion
    login({ commit }, username) {
      commit("SET_LOGGED_IN", { isLoggedIn: true, username });
    },
    logout({ commit }) {
      commit("SET_LOGGED_IN", { isLoggedIn: false, username: "" });
    },

    //Pour la todolist
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    removeTodo({ commit }, id) {
      commit("REMOVE_TODO", id);
    },
    toggleTodo({ commit }, id) {
      commit("TOGGLE_TODO", id);
    },
  },
});
