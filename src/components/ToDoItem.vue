<template>
  <div
    v-if="!isEditing"
    class="relative sm:mx-auto mx-4 flex sm:flex-col space-y-8 justify-center rounded-2xl bg-white border-black border-2 p-[18px] m-[50px] sm:w-[610px] w-80 flex-row"
    @click="setEditing"
  >
    <div class="w-full flex flex-row">
      <div class="m-auto mr-5">
        <div class="relative">
          <button
            class="p-2 border-black border-[3px] rounded-full w-6 h-6 flex-row lg:hidden"
            @click.stop="toggleButton"
          >
            <div v-if="isActive" class="check-container ml-[-11px] mt-[-11px]">
              <svg class="animated-check" viewBox="0 0 24 24">
                <path d="M4.1 12.7L9 17.6 20.4 4.1" fill="none" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div class="flex flex-col w-full items-center">
        <p
          class="w-full placeholder-black sm:text-5xl text-lg flex font-bold text-area lg:flex mt-5"
        >
          Title
          {{ toDo.title }}
        </p>

        <div class="flex w-full items-center sm:h-3 h-1.25 lg:flex hidden">
          <img :src="dateIcon" class="lg:flex hidden mr-1 h-3 w-3" />
          {{ localTodo.createdAt }}
        </div>

        <div class="flex w-full sm:h-3 lg:hidden text-gray-500">
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
      <div class="flex w-full items-center sm:h-3 h-1.25 lg:flex hidden">
        <img :src="dateIcon" class="lg:flex hidden mr-1 h-3 w-3" />

        {{ localTodo.createdAt }}
      </div>
    </div>

    <div
      class="w-full p-2 flex flex-col justify-between text-xl break-all text-gray-500 sm:text-3xl font-semibold hidden lg:flex"
    >
      <div class="flex justify-between">
        <div class="sm:text-3xl text-base flex-wrap break-all lg:flex hidden">
          <p>description</p>
        </div>

        <div>
          <div class="relative">
            <button
              class="p-2 border-black border-[6px] rounded-full w-10 h-10 right-1"
              @click.stop="toggleButton"
            >
              <div
                v-if="isActive"
                class="check-container ml-[-14px] mt-[-14px]"
              >
                <svg class="animated-check" viewBox="0 0 24 24">
                  <path d="M4.1 12.7L9 17.6 20.4 4.1" fill="none" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ToDoItemEdit
    v-else
    @toDoDeleted="removeToDo"
    @toDoUpdated="updateToDo"
    :toDo="toDo"
  />
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

  const emit = defineEmits([
    'toDoDeleted',
    'toDoSaved',
    'toDoUpdated',
    'selectEditing',
    'check',
  ]);

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

  function toggleButton() {
    isActive.value = !isActive.value;
    emit('check');
  }

  //end-region
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
