<template>
  <div class="flex justify-center mx-auto flex-col lg:w-[610px]">
    <PopUpToDoListConfirmation />

    <HeaderComponent @toDoAdded="addNewTodo" />

    <ToDoList
      v-if="toDos?.length"
      @updateTodos="updateToDos"
      @toDoDeleted="removeToDo"
      :toDos="toDos"
      @toDoAdded="addNewTodo"
    />

    <div class="grid place-items-center" v-else>
      <img class="w-[288px] sm:w-[410px]" :src="toDoListPlaceholder" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import { newDate } from '../utils/date';

  import ToDoList from './ToDoList.vue';

  import HeaderComponent from './HeaderComponent.vue';

  import PopUpToDoListConfirmation from './PopUpToDoListConfirmation.vue';

  import toDoListPlaceholder from './../assets/toDoListPlaceholder.svg';

  //begin region Variables

  const toDos = ref([]);

  //end-region

  //begin-region Functions

  function addNewTodo() {
    const newToDo = {
      priority: 'High',
      createdAt: newDate(),
      completed: true,
      title: '',
      text: '',
    };

    toDos.value.push(newToDo);
  }

  function removeToDo(index) {
    toDos.value.splice(index, 1);
  }

  function updateToDos(upDatedToDos) {
    toDos.value = upDatedToDos;
  }

  //end-region
</script>
