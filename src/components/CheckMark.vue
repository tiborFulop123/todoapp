<template>
  <div class="relative">
    <button
      class="p-2 border-black sm:border-[6px] border-[4px] rounded-full sm:w-10 sm:h-10 w-6 h-6 right-1"
      @click.stop="toggleButton"
    >
      <div v-if="isActive" class="check-container sm:ml-[-14px] sm:mt-[-14px] ml-[-12px] mt-[-12px]">
        <svg class="animated-check" viewBox="0 0 24 24">
          <path d="M4.1 12.7L9 17.6 20.4 4.1" fill="none" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    toDo: { type: Object, required: true },
    isEditing: { type: Boolean },
  });

  const isActive = ref(false);

  const emit = defineEmits(['check']);

  function toggleButton() {
    isActive.value = !isActive.value;
    emit('check');
  }
</script>

<style scoped>
  .animated-check {
    height: 60px;
    width: 80px;
    position: absolute;
    top: -23px;
    right: -23px;
  }

  .check-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    border: 6px solid #4fda9b;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 768px) {
    .animated-check {
      height: 15px;
      width: 30px;
      position: relative;
      top: auto;
      right: auto;
      margin: 0 auto;
    }
    .check-container {
      height: 24px;
      width: 24px;
      border-width: 3px;
    }
  }

  .animated-check path {
    fill: none;
    stroke: #47f3a5;
    stroke-width: 4;
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    animation: draw 0.25s linear forwards;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 2;
    }
  }
</style>
