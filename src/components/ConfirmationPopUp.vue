<template>
  <div
    v-if="isOpen"
    class="fixed top-0 z-10 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    tabindex="-1"
    aria-modal="true"
    @click="closeModal"
  >
    <div>
      <Teleport to="body">
        <div class="w-full h-full fixed top-0 bg-gray-500 opacity-90"></div>
      </Teleport>

      <div
        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
        >
          <h5 class="text-xl font-medium leading-normal text-gray-800">Confirmation PopUp</h5>

          <BaseButton type="button" aria-label="Close" />
        </div>

        <div class="modal-body relative p-4">
          <p>
            Are you sure you want to delete this item? This operation is permanent and you will not be undo this action!
          </p>
        </div>

        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
        >
          <BaseButton class="confirm-button" type="button" @click="closeModal"> No </BaseButton>

          <BaseButton type="button" class="confirm-button" @click="onConfirm"> Confirm </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  //begin-region Variables

  import BaseButton from './BaseButton.vue';

  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['closeModal', 'onConfirm']);

  //end-region

  //begin-region Functions

  function onConfirm() {
    emit('onConfirm');
  }

  function closeModal() {
    emit('closeModal');
  }

  //end-region
</script>

<style scoped>
  .confirm-button {
    @apply inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md
 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 
 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out;
  }
</style>
