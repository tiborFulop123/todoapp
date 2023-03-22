<template>
  <div class="flex justify-between p-2 m-2 flex-col sm:flex-row">
    <div class="sm:flex-grow flex flex-wrap">
      <BaseButton
        class="p-2 m-2 border-green-300 border-2 rounded-lg bg-green-300 text-white w-12 sm:w-14"
        @click="titleSort"
        >Title</BaseButton
      >
      <BaseButton
        class="p-2 m-2 border-black border-2 rounded-lg bg-black text-white w-20 sm:w-24"
        @click="descriptionSort"
        >Description</BaseButton
      >
      <BaseButton class="p-2 m-2 border-black border-2 rounded-lg bg-white w-16 sm:w-20" @click="prioritySort"
        >Priority</BaseButton
      >
      <BaseButton class="p-2 m-2 border-black border-2 rounded-lg bg-white w-12 sm:w-14" @click="dateSort"
        >Date</BaseButton
      >
    </div>
    <div class="flex-row flex flex-wrap">
      <BaseButton
        class="p-2 m-2 border-green-300 border-2 sm:w-7 rounded-lg bg-green-300 text-white w-8"
        @click="upArrow"
        >&uarr;</BaseButton
      >
      <BaseButton class="p-2 m-2 border-black border-4 sm:w-7 rounded-lg bg-black text-white w-8" @click="downArrow">
        &darr;</BaseButton
      >
    </div>
  </div>
</template>

<script setup>
  import BaseButton from './BaseButton.vue';

  const emit = defineEmits(['titleSort', 'descriptionSort', 'upArrow', 'downArrow', 'dateSort', 'prioritySort']);

  function titleSort() {
    emit('titleSort');
  }

  function descriptionSort() {
    emit('descriptionSort');
  }

  function prioritySort() {
    emit('prioritySort');
  }

  function dateSort() {
    emit('dateSort');
  }

  function upArrow() {
    emit('upArrow');
  }

  function downArrow() {
    emit('downArrow');
  }
</script>
