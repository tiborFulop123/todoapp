<template>
  <div
    class="relative sm:mx-auto mx-[16px] flex sm:flex-col space-y-8 justify-center rounded-2xl bg-white border-black border-2 p-[18px] m-[50px] sm:w-[610px] w-[320px] flex-row"
  >
    <div class="w-full lg:flex flex flex-row">
      <div class="m-auto mr-5">
        <div
          class="p-2 border-black border-[3px] rounded-full w-6 h-6 flex-row lg:hidden"
        ></div>
      </div>
      <div class="flex flex-col w-full items-center">
        <p
          class="w-full placeholder-black sm:text-5xl text-lg flex font-bold text-area lg:flex mt-5"
        >
          Title
        </p>
        <div
          class="flex w-full items-center sm:h-[12px] h-[5px] lg:flex hidden"
        >
          <img :src="dateIcon" class="lg:flex hidden mr-1 h-3 w-3" />
          {{ newDate() }}
        </div>

        <div class="flex w-full sm:h-[12px] lg:hidden text-gray-500">
          <img :src="dateIcon" class="mr-1 h-3 w-3 hidden" />
          {{ newDate() }}
        </div>
      </div>

      <div class="flex">
        <div
          class="sm:invisible visible rounded-full h-[10px] w-[10px] my-9"
          :class="{
            'bg-green-500': 'Low' == localTodo.priority,
            'bg-yellow-500': 'Medium' == localTodo.priority,
            'bg-red-500': 'High' == localTodo.priority,
          }"
        ></div>
        <ToDoPriority v-model:priority="localTodo.priority" class="" />
      </div>
    </div>

    <div class="flex w-full justify-between hidden">
      <div class="">
        <p
          class="w-full placeholder-black leading-[3rem] sm:text-5xl text-lg flex mt-4 font-bold text-area lg:flex hidden"
        >
          Title
        </p>
      </div>

      <div class="hidden">
        <ToDoPriority v-model:priority="localTodo.priority" />
      </div>
      <div class="flex w-full items-center sm:h-[12px] h-[5px] lg:flex hidden">
        <img :src="dateIcon" class="lg:flex hidden mr-1 h-3 w-3" />
        {{ newDate() }}
      </div>
    </div>

    <div
      class="w-full p-2 flex flex-col justify-between text-xl break-all text-gray-500 sm:text-3xl font-semibold relative hidden lg:flex"
    >
      <div class="flex justify-between">
        <div class="sm:text-3xl text-base flex-wrap break-all lg:flex hidden">
          <p>Cras placerat proin.</p>
        </div>

        <div class="p-2 border-black border-[6px] rounded-full w-10 h-10"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ToDoPriority from './ToDoPriority.vue';
  import dateIcon from './../assets/dateIcon.svg';

  const priorities = ['Low', 'Medium', 'High'];
  const selectedPriority = ref('');
  const localTodo = ref(props.toDo ?? '');
  const props = defineProps({
    toDo: { type: Object, required: true },
  });

  function newDate() {
    const today = new Date();
    return (
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    );
  }

  {
    {
      newDate;
    }
  }
</script>
