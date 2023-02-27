<template>
  <button
    class="flex justify-center bg-green-500 rounded-2xl w-2.5 h-2 sm:invisible visible ml-2"
    :class="color"
    @click="BaseButton()"
  ></button>
</template>

<script setup>
  import { defineEmits } from 'vue';
  //begin-region Variables

  const props = defineProps({
    color: { type: String },
  });

  const emit = defineEmits(['click']);
  //end-region

  //begin-region Functions
  function BaseButton() {
    emit('click');
  }
  //end-region
</script>
