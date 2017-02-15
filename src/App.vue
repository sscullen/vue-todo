<template>
  <div id="app">
    <div class="todo-input">
      <h1>Todo List</h1>
      Add Todo: <input type="text" v-on:keyup.enter="addTodo"/>

      <p>Show Completed Todos
      <input type="checkbox" @change="toggleShowCompleted" />
      </p>
      <p>Show Deleted Todos
      <input type="checkbox" @change="toggleShowDeleted" />
    </p>

    </div>
    <todo-list :todos="todos"/>
  </div>
</template>

<script>

import TodoList from './TodoList.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showCompleted: false,
      showDeleted: false
    }
  },
  computed: {
    todos() {
      const todos = this.$store.getters.todos
      let completedTodos = []
      let deletedTodos = []
      if (this.showCompleted) {
        completedTodos = this.$store.getters.completedTodos
      }
      if (this.showDeleted) {
        deletedTodos = this.$store.getters.deletedTodos
      }

      return todos.concat(completedTodos, deletedTodos).sort((td1, td2) => td1.date > td2.date)
    }
  },
  components: {
    'todo-list': TodoList
  },
  methods: {
    addTodo: function(e) {
      var patt = /^\s*$/
      if (!patt.test(e.target.value)) {
        this.$store.dispatch('addTodo', e.target.value)
      }
      e.target.value = ''
    },
    toggleShowCompleted: function(e) {
      console.log('toggling show completed')
      this.showCompleted = !this.showCompleted
    },
    toggleShowDeleted: function(e) {
      console.log('toggling show deleted')
      this.showDeleted = !this.showDeleted
    }

  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.todo-input {
  width: 50%;
  align-items: center;
  text-align: center;
}


</style>
