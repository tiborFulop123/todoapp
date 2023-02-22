<template>
  <div class="mr-[5px]">
    <button
      @click="onClick"
      class="flex justify-center bg-green-500 rounded-2xl w-[10px] h-[10px] sm:invisible visible"
      :class="color"
    ></button>
  </div>
</template>

<script setup>
  const emit = defineEmits(['click']);

  const props = defineProps({
    color: { type: String },
    isHighlighted: { type: Boolean, default: false },
  });
  function onClick() {
    emit('click');
  }
</script>
