<template>
  <header>


    <div class="flex items-center">
      <span class="inline-block align-middle TodoHeader">
        To Do List
      </span><input type="text" v-model="todoText" />
      <button class="bg-green-500 text-white rounded-full w-[60px] h-[60px] text-3xl" @click="addToDo(todoText)">
        <span class="flex justify-center " ><img :src=buttonIcon ></span>
      </button>
      
    </div>
    <div>

    </div>
 
 
  </header>
  



  
</template>

<script setup >
import TodoForm from "./TodoForm.vue";
import { ref } from "vue";
import buttonIcon from "./../assets/buttonIcon.svg"

const todoText = ref("");
const emit = defineEmits(["toDoAdded"]);

function addToDo() {
  emit("toDoAdded", todoText.value);
  todoText.value = "";
  
}

</script>

<style>
.TodoHeader {
  
  color: #000000;

  font-family: "Neue Haas Grotesk Display Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 86px;
}


</style>
