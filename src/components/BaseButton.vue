<template>
  <button
    class="flex justify-center flex-nowrap bg-green-500 rounded-2xl ml-2"
    :class="additonalClasses"
  >
    <slot></slot>
  </button>
</template>

<script setup>
  //begin-region Variables

  defineProps({
    additonalClasses: { type: String },
  });

  //end-region

  //begin-region Functions

  //end-region
</script>
