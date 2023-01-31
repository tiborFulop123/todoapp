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
}

// (toDos.value = [])
// function clearToDo() {
//   toDos.value = [];
// }

// const todos=ref(

//   {
//     text: "tanulj Vue.js-t",
//     priority: "High",
//     created_at: "2023-01-30",
//     status: "Active"
//   },
//   {
//     text: "tanulj angolul",
//     priority: "High",
//     created_at: "2023-01-30",
//     status: "Active"
//   }
// )
</script>

<template>
  <div>
    <button class="" @click="clearToDo">clear</button>

    <div>
      <input type="text" v-model="todoText" />
      <button class="border-radius: 50%" @click="addToDo(todoText)">
        &#43;
      </button>
    </div>
  </div>
</template>
