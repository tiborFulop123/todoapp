<template>
  <button
    @click="onClick"
    class="flex justify-center bg-green-500 rounded-2xl w-2.5 h-2.5 sm:invisible visible"
    :class="color"
  ></button>
</template>

<script setup>
  //begin-region Variables

  const emit = defineEmits(['click']);

  const props = defineProps({
    color: { type: String },
    isHighlighted: { type: Boolean, default: false },
  });

  //end-region

  //begin-region Functions

  //end-region
</script>
