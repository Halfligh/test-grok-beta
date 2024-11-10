<template>
  <div>
    <h2>Todo List</h2>
    <div class="todo-form" @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a new todo" />
      <button @click="handleAddTodo">Add</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" @change="toggleTodo(todo.id)" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="handleRemoveTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TodoList',
  data() {
    return {
      newTodo: '',  // Maintien de l'état local pour le nouvel élément à ajouter
    };
  },
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo', 'toggleTodo']),
    handleAddTodo() {
      if (this.newTodo.trim()) {
        this.addTodo({ id: Date.now(), text: this.newTodo, completed: false });
        this.newTodo = '';  // Réinitialiser le champ d'entrée après l'ajout
      }
    },
    handleRemoveTodo(id) {
      this.removeTodo(id);
    },
    toggleTodo(id) {
      this.toggleTodo(id);
    },
  },
};
</script>
<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
}

.todo-form {
  display: flex;
  width: 400px;
  margin-bottom: 20px;
}

.todo-form input {
  flex-grow: 1;
  padding: 5px;
}

.todo-form button {
  padding: 5px 10px;
  margin-left: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>