<template>
  <div class="flex items-center mb-8 w-full justify-between">
    <span class="inline-block align-middle text-black text-2xl sm:text-7xl"> To Do List </span>

    <BaseButton class="ml-32 bg-green-500 text-white rounded-full w-8 h-8 sm:h-14 sm:w-14" @click="addToDo()">
      <span class="flex justify-center"><img class="h-full w-full" :src="buttonIcon" /> </span>
    </BaseButton>
  </div>

  <ToDoListSearch @toDoSearch="searchToDo"></ToDoListSearch>
</template>

<script setup>
  import buttonIcon from './../assets/buttonIcon.svg';
  import BaseButton from './BaseButton.vue';
  import ToDoListSearch from './ToDoListSearch.vue';
  import SortByButton from './SortByButton.vue';
  //begin-region Variables

  const emit = defineEmits(['toDoAdded', 'toDoSearch']);

  //end-region

  //begin-region Functions

  function addToDo() {
    emit('toDoAdded');
  }
  function searchToDo(searchField) {
    emit('toDoSearch', searchField);
  }

  //end-region
</script>
