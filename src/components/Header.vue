<template>
  <div class="flex items-center mb-8 w-full justify-between">
    <span class="inline-block align-middle text-black text-2xl sm:text-7xl mt-5 sm:mx-1 mx-5"> To Do List </span>

    <BaseButton
      class="ml-32 bg-green-500 text-white rounded-full w-8 h-8 sm:h-14 sm:w-14 sm:mx-1 mx-4"
      @click="addToDo()"
    >
      <span class="flex justify-center"><img class="h-full w-full" :src="buttonIcon" /> </span>
    </BaseButton>
  </div>

  <ToDoListSearch @toDoSearch="searchToDo"></ToDoListSearch>

  <SortByButton
    @sortTitle="sortTitle"
    @sortDescription="sortDescription"
    @upArrow="upArrow"
    @downArrow="downArrow"
    @sortPriority="sortPriority"
    @sortDate="sortDate"
  ></SortByButton>
</template>

<script setup>
  import buttonIcon from './../assets/buttonIcon.svg';
  import BaseButton from './BaseButton.vue';
  import ToDoListSearch from './ToDoListSearch.vue';
  import SortByButton from './SortByButton.vue';
  //begin-region Variables

  const emit = defineEmits([
    'toDoAdded',
    'toDoSearch',
    'sortTitle',
    'sortDescription',
    'upArrow',
    'downArrow',
    'sortDate',
    'sortPriority',
  ]);

  //end-region

  //begin-region Functions

  function addToDo() {
    emit('toDoAdded');
  }
  function searchToDo(searchField) {
    emit('toDoSearch', searchField);
  }

  function sortTitle() {
    emit('sortTitle');
  }
  function sortDescription() {
    emit('sortDescription');
  }

  function upArrow() {
    emit('upArrow');
  }

  function downArrow() {
    emit('downArrow');
  }
  function sortDate() {
    emit('sortDate');
  }

  function sortPriority() {
    emit('sortPriority');
  }

  //end-region
</script>
