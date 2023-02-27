<template>
  <div class="flex flex-nowrap">
    <div>
      <button
        class="rounded-lg sm:px-[40px] sm:py-[15px] px-[15px] py-[5px] bg-green-500 text-white font-bold"
        @click="saveToDo()"
      >
        Save
      </button>
    </div>

    <div class="ml-10">
      <button
        class="rounded-lg sm:px-[40px] sm:py-[15px] px-[15px] py-[5px] text-black font-bold just"
        style="background-color: #e6e6e6"
        @click="openModal"
      >
        Delete
      </button>
    </div>

    <PopUpToDoListConfirmation
      :is-open="isModalOpen"
      @close-modal="closeModal"
      @onConfirm="removeToDo"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import PopUpToDoListConfirmation from './PopUpToDoListConfirmation.vue';

  //begin-region Variables
  const emit = defineEmits(['toDoDeleted']);

  const isModalOpen = ref(false);

  //end-region

  //begin-region Functions

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function removeToDo(index) {
    emit('toDoDeleted', index);
  }

  //end-region
</script>
