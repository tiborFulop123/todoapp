<script setup>
import { VueElement } from "vue";
import TodoForm from "./TodoForm.vue";
import { ref } from "vue";
import ToDoList from "./ToDoList.vue";
import HeaderComponent from "./HeaderComponent.vue";
import toDoListMT from "./../assets/toDoListMT.svg"
const toDos = ref([]);
function addNewTodo(todo) {
  toDos.value.push(todo);
}
function removeToDo(index) {
  toDos.value.splice(index, 1);
}
function clearToDo() {
  toDos.value = [];
}


</script>

<template>

  <div>    </div>
  <HeaderComponent @toDoAdded="addNewTodo" ></HeaderComponent>

  <ToDoList v-if="toDos?.length" @toDoDeleted="removeToDo" :toDos="toDos"></ToDoList>

  <div v-else >  

<img :src= toDoListMT> 

</div>
</template>

