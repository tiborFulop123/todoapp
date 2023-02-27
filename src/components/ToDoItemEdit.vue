<template>
  <div>
    <div
      class="relative sm:mx-auto mx-[16px] flex flex-col space-y-8 justify-center rounded-2xl bg-white border-black border-2 p-[18px] m-[50px] sm:w-[610px] w-[320px]"
    >
      <div class="flex w-full justify-between flex-row">
        <div class="flex flex-col">
          <input
            class="w-full placeholder-black leading-[3rem] sm:text-5xl text-lg flex mt-4 font-bold"
            type="text"
            placeholder="Title"
          />

          <div class="flex w-full items-center sm:h-[12px] h-[5px] lg:hidden">
            <img :src="dateIcon" class="lg:hidden mr-1 h-3 w-3" />

            {{ localTodo.createdAt }}
          </div>
        </div>

        <ToDoPriority v-model:priority="localTodo.priority" />

        <BaseButton
          :color="'bg-green-500'"
          @click="setPriority(priorities.High)"
        />

        <BaseButton
          :color="'bg-yellow-500'"
          @click="setPriority(priorities.Medium)"
        />
        <BaseButton
          :color="'bg-red-500'"
          :is-highlihted="false"
          @click="setPriority(priorities.Low)"
        />
      </div>

      <div
        class="w-full p-2 flex flex-row justify-between text-xl break-all text-gray-500 sm:text-3xl font-semibold"
      >
        <div>
          <div class="sm:text-xl text-base flex-wrap break-all">
            <textarea
              v-model="localTodo.text"
              class="h-20 w-full"
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec purus et mauris amet aenean duis aenean. Egestas amet, sollicitudin nisl in."
            ></textarea>
          </div>
        </div>
      </div>

      <div>
        <ToDoListButtons />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { priorities } from '../utils/priorities';
  import BaseButton from './BaseButton.vue';
  import ToDoPriority from './ToDoPriority.vue';
  import ToDoListButtons from './ToDoListButtons.vue';
  import dateIcon from './../assets/dateIcon.svg';

  //begin-region Variables

  const emit = defineEmits(['toDoDeleted', 'toDoSaved', 'toDoUpdated']);

  const props = defineProps({
    toDo: { type: Object, required: true },
  });

  const localTodo = ref(props.toDo ?? '');

  //end-region

  //begin-region Functions
  function setPriority(priority) {
    const updatedTodo = { ...props.toDo, priority: priority };
    emit('toDoUpdated', updatedTodo);
  }

  //end-region
</script>
