<template>
  <div class="flex justify-between border-black border-[2px] rounded-lg">
    <div class="flex m-2"><img :src="searchIcon" /></div>
    <div class="">
      <input type="text" class="h-10" placeholder="Search todos..." v-model="searchField" />
    </div>

    <div>
      <button class="m-2 bg-black text-white rounded-full" @click="searchToDo">
        <p>Search</p>
      </button>
    </div>
  </div>
</template>

<script setup>
  import searchIcon from './../assets/searchIcon.svg';
  import { ref } from 'vue';

  const emit = defineEmits(['toDoSearch']);

  const searchField = ref('');

  function searchToDo() {
    emit('toDoSearch', searchField.value);
  }
</script>
