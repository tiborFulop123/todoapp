<template>
  <div class="flex justify-center mx-auto flex-col lg:w-[610px]">
    <ConfirmationPopUp />

    <Header @toDoAdded="addNewTodo" />

    <ToDoList
      v-if="toDos?.length"
      :toDos="toDos"
      @upDatedToDos="updateToDos"
      @toDoDeleted="removeToDo"
      @toDoAdded="addNewTodo"
      @toDoChecked="checkMark"
    />

    <div class="grid place-items-center" v-else>
      <img class="w-72 sm:w-[410px]" :src="toDoListPlaceholder" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { newDate } from '../utils/date';
  import ToDoList from './ToDoList.vue';
  import Header from './Header.vue';
  import ConfirmationPopUp from './ConfirmationPopUp.vue';
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
      isChecked: '',
      id: Math.random(),
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
