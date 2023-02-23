<template>
  <div
    v-if="!isEditing"
    @click="setEditing"
    class="relative sm:mx-auto mx-4 flex sm:flex-col space-y-8 justify-center rounded-2xl bg-white border-black border-2 p-[18px] m-[50px] sm:w-[610px] w-80 flex-row"
  >
    <div class="w-full flex flex-row">
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
          {{ toDo.title }}
        </p>

        <div
          class="flex w-full items-center sm:h-[12px] h-[5px] lg:flex hidden"
        >
          <img :src="dateIcon" class="lg:flex hidden mr-1 h-3 w-3" />
          {{ localTodo.createdAt }}
        </div>

        <div class="flex w-full sm:h-[12px] lg:hidden text-gray-500">
          <img :src="dateIcon" class="mr-1 h-3 w-3 hidden" />
          {{ localTodo.createdAt }}
        </div>
      </div>

      <div class="flex">
        <div
          class="sm:invisible visible rounded-full h-2.5 w-2.5 my-9"
          :class="colors"
        ></div>

        <ToDoPriority v-model:priority="localTodo.priority" />
      </div>
    </div>

    <div class="flex w-full justify-between hidden">
      <div>
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

        {{ localTodo.createdAt }}
      </div>
    </div>

    <div
      class="w-full p-2 flex flex-col justify-between text-xl break-all text-gray-500 sm:text-3xl font-semibold relative hidden lg:flex"
    >
      <div class="flex justify-between">
        <div class="sm:text-3xl text-base flex-wrap break-all lg:flex hidden">
          <p>description</p>
        </div>

        <div class="p-2 border-black border-[6px] rounded-full w-10 h-10"></div>
      </div>
    </div>
  </div>

  <ToDoItemEdit
    v-else
    @toDoDeleted="removeToDo"
    @toDoSaved="saveTodo"
    :toDo="toDo"
    @toDoUpdated="updateToDo"
  />
</template>

<script setup>
  import { ref, computed } from 'vue';

  import { priorities } from '../utils/priorities';

  import ToDoPriority from './ToDoPriority.vue';

  import ToDoItemEdit from './ToDoItemEdit.vue';

  import dateIcon from './../assets/dateIcon.svg';

  //begin-region Variables

  const emit = defineEmits([
    'toDoDeleted',
    'toDoSaved',
    'toDoUpdated',
    'toDoEditingIndex',
  ]);

  const props = defineProps({
    toDo: { type: Object, required: true },
    isEditing: { type: Boolean },
  });

  const localTodo = ref(props.toDo ?? '');

  const colors = computed(() => {
    if (localTodo.value.priority === priorities.High) {
      return 'bg-red-500 ';
    }
    if (localTodo.value.priority === priorities.Medium) {
      return 'bg-yellow-500';
    }
    if (localTodo.value.priority === priorities.Low) return 'bg-green-300';
  });

  //end-region

  //begin-region Functions

  function removeToDo(index) {
    emit('toDoDeleted', index);
  }

  function updateToDo(index, newTodo) {
    const newTodos = [...props.toDos];
    newTodos[index] = newTodo;
    emit('upDatedToDos', newTodos);
  }

  function setEditing() {
    emit('selectEditing');
  }

  //end-region
</script>
