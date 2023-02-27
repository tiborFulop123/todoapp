<template>
  <div>
    <div>
      <input type="text" v-model="todoText" />

      <button @click="addToDo(todoText)">&#43;</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';

  //begin-region Variables

  const emit = defineEmits(['toDoAdded']);

  const todoText = ref('');

  //end-region

  //begin-region Function

  function addToDo() {
    emit('toDoAdded', todoText.value);
    todoText.value = '';
  }
  //end-region
</script>
<style></style>
