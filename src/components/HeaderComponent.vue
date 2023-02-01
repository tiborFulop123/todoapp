<template>
  <header>
    <div class="flex items-center">
      <span class="inline-block align-middle  text-black text-7xl">
        To Do List
      </span>
      <button
      class="bg-green-500 text-white rounded-full w-[60px] h-[60px] text-3xl"
      @click="addToDo()"
    >
      <span class="flex justify-center"><img :src="buttonIcon" /></span>
    </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import buttonIcon from "./../assets/buttonIcon.svg";

const todoText = ref("");
const emit = defineEmits(["toDoAdded"]);

function addToDo() {
  emit(
    "toDoAdded",

    {
      title: "Title",
      text: "tanulj Vue.js-t",
      priority: "High",
      created_at: "2023-01-30",
      status: "Active",
    }
  );
  todoText.value = "";
}
</script>
