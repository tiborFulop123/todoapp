<script setup>
import { ref } from "vue";

const todoText = ref("");
const emit = defineEmits(["toDoAdded,ToDoCleared"]);
function addToDo() {
  emit("toDoAdded", todoText.value);
  todoText.value = "";
}

function clearToDo(clear) {
  emit("toDoCleared", clear);
  {
    toDos.value = [];
  }
}
</script>

<template>
  <div>
    <button class="" @click="clearToDo">clear</button>

    <div>
      <input type="text" v-model="todoText" />
      <button class="" @click="addToDo(todoText)">&#43;</button>
    </div>
  </div>
</template>
<style></style>
