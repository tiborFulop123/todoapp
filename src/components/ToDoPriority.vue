<template>
  <div
    class="w-full h-full absolute bg-black opacity-10 rounded-xl left-0 top-0"
    v-if="isDropDownShown"
  ></div>

  <div class="relative flex flex-wrap flex-col rounded-2xl">
    <div class="flex justify-end">
      <button
        class="flex justify-center relative bg-white rounded-2xl sm:w-[125px] sm:h-[33px] w-[10px] h-[10px] sm:visible invisible"
        :class="priorityColor"
        @click="toggleDropDown"
      >
        {{ priority }}

        <div
          v-if="isDropDownShown"
          id="PriorityPicker"
          class="absolute dropdown-content flex flex-col text-left w-[125px] top-full pt-3"
        >
          <div
            class="text-black border-black-500 border-2 bg-white rounded-2xl p-[17px]"
          >
            <p @click="setPriority(priorities.High)">High</p>

            <p @click="setPriority(priorities.Medium)">Medium</p>

            <p @click="setPriority(priorities.Low)">Low</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { priorities } from '../utils/priorities';

  //begin-region Variables

  const props = defineProps({ priority: { type: String } });

  const emit = defineEmits(['update:priority']);

  const isDropDownShown = ref(false);

  const priorityColor = computed(() => {
    if (isDropDownShown.value) {
      return 'bg-white';
    }
    if (props.priority === priorities.High) {
      return 'bg-red-500 text-white';
    }
    if (props.priority === priorities.Medium) {
      return 'bg-yellow-500 text-white';
    }
    if (props.priority === priorities.Low) {
      return 'bg-green-300 text-white';
    }
  });

  //end-region

  //begin-region Functions

  function setPriority(priority) {
    emit('update:priority', priority);
  }

  function toggleDropDown() {
    isDropDownShown.value = !isDropDownShown.value;
  }

  //end-region
</script>
