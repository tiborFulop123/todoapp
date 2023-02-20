<template>
  <div
    class="w-full h-full absolute bg-black opacity-10 rounded-xl left-0 top-0"
    v-if="isDropDownShown"
  ></div>
  <div class="relative flex flex-wrap flex-col rounded-2xl">
    <div class="flex justify-end">
      <button
        @click="toggleDropDown"
        class="flex justify-center relative bg-white rounded-2xl sm:w-[125px] sm:h-[33px] w-[10px] h-[10px] sm:visible invisible"
        :class="colorPriority"
      >
        {{ priority }} <img />
        <div
          v-if="isDropDownShown"
          id="PriorityPicker"
          class="absolute dropdown-content flex flex-col text-left w-[125px] top-full pt-3"
        >
          <div
            class="text-black border-black-500 border-2 bg-white rounded-2xl p-[17px]"
          >
            <p @click="setPriority('High')">High</p>
            <p @click="setPriority('Medium')">Medium</p>
            <p @click="setPriority('Low')">Low</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import VectorDown from './../assets/VectorDown.svg';

  const props = defineProps({ priority: { type: String } });

  const emit = defineEmits(['update:priority']);

  const isDropDownShown = ref(false);

  const colorPriority = computed(() => {
    if (isDropDownShown.value) {
      return 'bg-white';
    }
    if (props.priority === 'High') {
      return 'bg-red-500 text-white';
    } else if (props.priority === 'Medium') {
      return 'bg-yellow-500 text-white';
    } else if (props.priority === 'Low') {
      return 'bg-green-300 text-white';
    }
  });

  function toggleDropDown() {
    isDropDownShown.value = !isDropDownShown.value;
  }

  function setPriority(priority) {
    emit('update:priority', priority);
  }
</script>
