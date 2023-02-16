<template>
  <div
    class="w-full h-full absolute bg-black opacity-10 rounded-xl left-0 top-0"
    v-if="isDropDownShown"
  ></div>
  <div class="relative flex flex-wrap flex-col rounded-2xl">
    <div class="flex justify-end">
      <button
        @click="showDropDown"
        class="flex justify-center relative bg-white rounded-2xl sm:w-[125px] sm:h-[33px] w-[10px] h-[10px] sm:visible invisible"
        :class="color(priority)"
      >
        {{ priority }} <img />
        <div
          v-if="isDropDownShown"
          id="myDropdown"
          class="absolute dropdown-content flex flex-col text-left w-[125px] top-[100%] pt-3"
        >
          <div
            class="text-black border-black-500 border-2 bg-white rounded-2xl p-[17px]"
          >
            <p class="" @click="setPriority('High')">High</p>
            <p class="" @click="setPriority('Medium')">Medium</p>
            <p class="" @click="setPriority('Low')">Low</p>
          </div>
        </div>
      </button>
      <!-- {{ priority }}
        <img class="w-[14px]" :src="VectorDown" /> -->
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import VectorDown from './../assets/VectorDown.svg';

  defineProps({ priority: { type: String } });

  const emit = defineEmits(['update:priority']);

  const isDropDownShown = ref(false);

  function color(priority) {
    if (isDropDownShown.value) {
      return 'bg-white';
    }
    if (priority == 'High') {
      return 'bg-red-500 text-white';
    } else if (priority == 'Medium') {
      return 'bg-yellow-500 text-white';
    } else if (priority == 'Low') {
      return 'bg-green-300 text-white';
    }
  }

  function showDropDown() {
    isDropDownShown.value = !isDropDownShown.value;
  }

  function setPriority(priority) {
    console.log(priority);
    emit('update:priority', priority);
  }
</script>
