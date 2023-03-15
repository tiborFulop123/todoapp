<template>
  <div
    v-if="!isEditing"
    class="relative sm:mx-auto mx-4 flex sm:flex-col space-y-8 justify-center rounded-2xl bg-white border-black border-2 p-4 m-12 sm:w-[610px] w-80 flex-row"
    @click="setEditing"
  >
    <div class="w-full flex flex-row">
      <div class="m-auto mr-5 sm:hidden visible"><slot></slot></div>

      <div class="flex flex-col w-full items-center">
        <p class="w-full placeholder-black sm:text-5xl text-lg flex font-bold text-area lg:flex mt-5">
          {{ localTodo.title || 'Title' }}
        </p>

        <div class="w-full items-center sm:h-3 h-1.25 lg:flex hidden">
          <img :src="dateIcon" class="lg:flex hidden mr-1 h-3 w-3" />
          {{ localTodo.createdAt }}
        </div>

        <div class="flex w-full sm:h-3 lg:hidden text-gray-500">
          <img :src="dateIcon" class="mr-1 h-3 w-3 hidden" />
          {{ localTodo.createdAt }}
        </div>
      </div>

      <div class="flex">
        <div class="sm:invisible visible rounded-full h-2.5 w-2.5 my-9" :class="colors"></div>

        <ToDoPriority v-model:priority="localTodo.priority" />
      </div>
    </div>

    <div class="w-full justify-between hidden">
      <div>
        <p class="w-full placeholder-black leading-[3rem] sm:text-5xl text-lg flex mt-4 font-bold text-area lg:flex">
          Title
        </p>
      </div>

      <div class="hidden">
        <ToDoPriority v-model:priority="localTodo.priority" />
      </div>
    </div>

    <div
      class="w-full p-2 flex-col justify-between text-xl break-all text-gray-500 sm:text-3xl font-semibold hidden lg:flex"
    >
      <div class="flex justify-between">
        <div class="sm:text-3xl text-base flex-wrap break-all lg:flex hidden">
          <p>{{ localTodo.text || 'description' }}</p>
        </div>

        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>

  <ToDoItemEdit v-else @toDoDeleted="removeToDo" @toDoUpdated="updateToDo" @toDoSaved="saveToDo" :toDo="toDo" />
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { priorities } from '../utils/priorities';
  import ToDoPriority from './ToDoPriority.vue';
  import ToDoItemEdit from './ToDoItemEdit.vue';
  import dateIcon from './../assets/dateIcon.svg';

  //begin-region Variables

  const props = defineProps({
    toDo: { type: Object, required: true },
    isEditing: { type: Boolean },
  });

  const emit = defineEmits(['toDoDeleted', 'toDoSaved', 'toDoUpdated', 'selectEditing', 'check']);

  const colors = computed(() => {
    if (localTodo.value.priority === priorities.High) {
      return 'bg-red-500 ';
    }
    if (localTodo.value.priority === priorities.Medium) {
      return 'bg-yellow-500';
    }
    if (localTodo.value.priority === priorities.Low) {
      return 'bg-green-300';
    }
  });

  const localTodo = ref(props.toDo ?? '');

  const isActive = ref(false);

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
  function saveToDo() {
    emit('toDoUpdated');
  }
  //end-region
</script>

<style scoped></style>
