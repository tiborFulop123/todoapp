<template>
  <header>
    <div class="flex items-center">
      <span class="inline-block align-middle text-black text-2xl sm:text-7xl">
        To Do List
      </span>
      <button
        class="bg-green-500 text-white rounded-full w-[60px] h-[60px] h-8 w-8 sm:h-14 sm:w-14"
        @click="addToDo()"
      >
        <span class="flex justify-center"
          ><img class="h-full w-full m-2" :src="buttonIcon"
        /></span>
      </button>
    </div>
  </header>
</template>

<script setup>
  import buttonIcon from './../assets/buttonIcon.svg';

  const emit = defineEmits(['toDoAdded']);

  function addToDo() {
    emit('toDoAdded');
  }
</script>
