<template>
  <div id="todo-list">
    <div v-if="todos.length > 0">
    <div  v-for="todo in todos">
      <div class="flex-box-list-item" :class="{'deleted': todo.deleted}">
      <span class="flex-box-check-box">
      <input  type="checkbox" @change="toggleComplete(todo.id)" :checked="todo.complete" />
    </span>
      <span class="todo-text" :class="{'completed': todo.complete}">
        {{ todo.text }}
      </span>

      <span class="todo-controls">
        <button v-if="!todo.deleted" v-on:click="deleteTodo(todo.id)">Delete</button>
        <button v-else-if="todo.deleted" v-on:click="restoreTodo(todo.id)">Un-Delete</button>
      </span>
      </div>

    </div>
  </div>
    <div class="nothing-banner" v-else>
      <h1>Nothing to do!</h1>
    <div>
  </div>
</template>

<script>

import _ from 'lodash'

export default {
  name: 'app',
  props: ['todos', 'color'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {

  },
  methods: {
    deleteTodo: function(todoId) {
      console.log('delete clicked', todoId)
      this.$store.commit('removeTodo', todoId)
    },
    restoreTodo: function(todoId) {
      console.log('restore clicked', todoId)
      this.$store.commit('restoreTodo', todoId)
    },
    toggleComplete: function(todoId) {
      this.$store.commit('toggleComplete', todoId)
    }

  }
}
</script>

<style scoped>

#todo-list {
  width: 50%;

}



.flex-box-list-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #eee;
  margin: 10px;
  min-width: 250px;
}

.todo-controls {
  flex-grow:1;
  text-align: right;
}

.flex-box-check-box {
  flex-grow:1;
  text-align: center;
}

.todo-text {
  width: 70%;
  flex-grow: 2;
   word-wrap:break-word;
}

.completed {
  text-decoration: line-through;
  color: #555;

}

.nothing-banner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  background-color: #eee;
  margin: 10px;
  min-width: 250px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.deleted {
  background-color: red;
}

</style>
