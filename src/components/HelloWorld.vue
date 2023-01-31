<script setup>
import { VueElement } from "vue";
import TodoForm from "./TodoForm.vue";
import { ref } from "vue";
import ToDoList from "./ToDoList.vue";
// import HeaderComponent from "./HeaderComponent.vue";

const toDos = ref([]);
function addNewTodo(todo) {
  toDos.value.push(todo);
}
function removeToDo(index) {
  toDos.value.splice(index, 1);
}
function clearToDo(clear) {
  toDos.value = [];
}
</script>

<template>
  <TodoForm @toDoAdded="addNewTodo" @toDoCleared="clearToDo"> </TodoForm>
  <ToDoList @toDoDeleted="removeToDo" :toDos="toDos"></ToDoList>

  <!-- <HeaderComponent></HeaderComponent> -->
</template>

<!-- @toDoAdded="addNewTodo" -->
