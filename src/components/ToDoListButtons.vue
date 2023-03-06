<template>
  <div class="flex flex-nowrap">
    <div>
      <BaseButton
        class="rounded-lg sm:px-[40px] sm:py-[15px] px-[15px] py-[5px] bg-green-500 text-white font-bold"
        @click="saveToDo()"
        ><p>Save</p>
      </BaseButton>
    </div>

    <div class="ml-10">
      <BaseButton
        class="rounded-lg sm:px-[40px] sm:py-[15px] px-[15px] py-[5px] text-black font-bold just"
        style="background-color: #e6e6e6"
        @click="openModal"
      >
        <p>Delete</p>
      </BaseButton>
    </div>

    <ConfirmationPopUp
      :is-open="isModalOpen"
      @close-modal="closeModal"
      @onConfirm="removeToDo"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ConfirmationPopUp from './ConfirmationPopUp.vue';
  import BaseButton from './BaseButton.vue';
  //begin-region Variables
  const emit = defineEmits(['toDoDeleted', 'toDoSaved']);

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

  function saveToDo() {
    emit('toDoSaved');
  }
  //end-region
</script>
