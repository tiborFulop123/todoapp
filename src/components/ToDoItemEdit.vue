<template>
  <div class="">
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
            {{ newDate() }}
          </div>
        </div>

        <div class="mr-[5px]">
          <button
            @click="setPriority('Low')"
            class="flex justify-center bg-green-500 rounded-2xl w-[10px] h-[10px] sm:invisible visible"
            :class="{
              'border border-black': 'Low' == toDo.priority,
            }"
          ></button>
        </div>
        <div class="mr-[5px]">
          <button
            :class="{
              'border border-black': 'Medium' == toDo.priority,
            }"
            @click="setPriority('Medium')"
            class="flex justify-center bg-yellow-500 rounded-2xl w-[10px] h-[10px] sm:invisible visible"
          ></button>
        </div>
        <div class="mr-5px">
          <button
            :class="{
              'border border-black': 'High' == toDo.priority,
            }"
            @click="setPriority('High')"
            class="flex justify-center bg-red-500 rounded-2xl w-[10px] h-[10px] sm:invisible visible"
          ></button>
        </div>
        <ToDoPriority v-model:priority="localTodo.priority" />
      </div>

      <div
        class="w-full p-2 flex flex-row justify-between text-xl break-all text-gray-500 sm:text-3xl font-semibold"
      >
        <div>
          {{ text }}
          <div class="sm:text-xl text-base flex-wrap break-all">
            <textarea
              class="h-20 w-full"
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec purus et mauris amet aenean duis aenean. Egestas amet, sollicitudin nisl in."
            ></textarea>
          </div>
        </div>
      </div>
      <div>
        <ToDoListButtons @toDoDeleted="removeToDo"></ToDoListButtons>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ToDoPriority from './ToDoPriority.vue';
  import dateIcon from './../assets/dateIcon.svg';
  import ToDoListButtons from './ToDoListButtons.vue';
  import popUpToDoListConfirmation from './popUpToDoListConfirmation.vue';

  const priorities = ['Low', 'Medium', 'High'];
  const selectedPriority = ref('');
  const localTodo = ref(props.toDo ?? '');

  const emit = defineEmits(['toDoDeleted', 'toDoSaved']);

  const props = defineProps({
    toDo: { type: Object, required: true },
  });

  function removeToDo() {
    emit('toDoDeleted');
  }
  function saveToDo() {
    editingIndex = null;
    emit('toDoSaved', { toDo: toDo[index], index });
  }
  function setPriority(priority) {
    const updatedTodo = { ...props.toDo, priority: priority };
    emit('toDoUpdated', updatedTodo);
  }
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
