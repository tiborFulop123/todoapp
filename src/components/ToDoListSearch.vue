<template>
  <div class="flex justify-between border-black border-[2px] rounded-lg">
    <div class="flex m-2"><img :src="searchIcon" /></div>
    <div class="">
      <input type="text" class="h-10" placeholder="Search todos..." v-model="searchField" />
    </div>

    <div>
      <BaseButton class="m-2 bg-black text-white rounded-full" @click="searchToDo"> <p>Search</p></BaseButton>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import BaseButton from './BaseButton.vue';
  import searchIcon from './../assets/searchIcon.svg';

  const emit = defineEmits(['toDoSearch']);

  const searchField = ref('');

  function searchToDo() {
    emit('toDoSearch', searchField.value);
  }
</script>
