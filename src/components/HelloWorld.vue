<script setup>
import { VueElement } from "vue";
import TodoForm from "./TodoForm.vue";
import { ref } from "vue";

const toDos = ref([]);
  function addNewTodo(todo)
 {
      toDos.value.push(todo);
    
  }
</script>

<template>
  <TodoForm @toDoAdded="addNewTodo"></TodoForm>

</template>



