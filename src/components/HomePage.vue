<script setup>
  import { ref } from 'vue';
  import ToDoList from './ToDoList.vue';
  import HeaderComponent from './HeaderComponent.vue';
  import toDoListPlaceHolder from './../assets/toDoListPlaceHolder.svg';
  import PopUpToDoListConfirmation from './popUpToDoListConfirmation.vue';
  import { newDate } from '../utils/date';

  const toDos = ref([]);

  function addNewTodo() {
    const newToDo = {
      title: '',
      text: '',
      priority: 'High',
      createdAt: newDate(),
      completed: true,
    };

    toDos.value.push(newToDo);
  }
  function removeToDo(index) {
    toDos.value.splice(index, 1);
  }
  function upDateToDos(upDatedToDos) {
    toDos.value = upDatedToDos;
  }
</script>

<template>
  <div class="flex justify-center mx-auto flex-col lg:w-[610px]">
    <PopUpToDoListConfirmation></PopUpToDoListConfirmation>
    <HeaderComponent @toDoAdded="addNewTodo"></HeaderComponent>

    <ToDoList
      v-if="toDos?.length"
      @upDatedTodos="upDateToDos"
      @toDoDeleted="removeToDo"
      :toDos="toDos"
      @toDoAdded="addNewTodo"
    ></ToDoList>

    <div class="grid place-items-center" v-else>
      <img class="w-[288px] sm:w-[410px]" :src="toDoListPlaceHolder" />
    </div>
  </div>
</template>
