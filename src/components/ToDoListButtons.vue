<template>
  <div class="flex flex-nowrap">
    <div>
      <button
        class="rounded-lg sm:px-[40px] sm:py-[15px] px-[15px] py-[5px] bg-green-500 text-white font-bold"
        style="background-color: #38cb89"
        @click="saveToDo()"
      >
        Save
      </button>
    </div>
    <div class="ml-10">
      <button
        class="rounded-lg sm:px-[40px] sm:py-[15px] px-[15px] py-[5px] text-black font-bold just"
        style="background-color: #e6e6e6"
        @click="removeToDo()"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['toDoDeleted']);
  function removeToDo() {
    emit('toDoDeleted');
  }
  function saveToDo() {
    editingIndex = null;
    emit('toDoSaved');
  }
  const props = defineProps({
    toDos: { type: Array, required: true },
  });
</script>
