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
    <ConfirmDelete
      :is-open="isModalOpen"
      @close-modal="closeModal"
      @onConfirm="removeToDo"
    ></ConfirmDelete>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ConfirmDelete from './ConfirmDelete.vue';

  const emit = defineEmits(['toDoDeleted']);
  const props = defineProps({
    toDos: { type: Array, required: true },
  });
  const isModalOpen = ref(false);

  function openModal() {
    isModalOpen.value = true;
  }

  function saveToDo() {
    editingIndex = null;
    emit('toDoSaved');
  }
  function removeToDo(index) {
    emit('toDoDeleted', index);

    editingIndex.value = null;
  }
  function closeModal() {
    isModalOpen.value = false;
  }
</script>
