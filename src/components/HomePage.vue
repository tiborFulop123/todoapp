<script setup>
  import { ref } from 'vue';
  import ToDoList from './ToDoList.vue';
  import HeaderComponent from './HeaderComponent.vue';
  import toDoListPlaceHolder from './../assets/toDoListPlaceHolder.svg';

  const toDos = ref([]);

  function addNewTodo() {
    const newToDo = {
      title: 'Title',
      text: 'Text',
      priority: 'High',
      created_at: '24.07.21',
      status: '',
    };

    toDos.value.push(newToDo);
  }
  function removeToDo(index) {
    toDos.value.splice(index, 1);
  }
</script>

<template>
  <HeaderComponent @toDoAdded="addNewTodo"></HeaderComponent>

  <ToDoList
    v-if="toDos?.length"
    @toDoDeleted="removeToDo"
    :toDos="toDos"
    @toDoAdded="addNewTodo"
  ></ToDoList>

  <div v-else>
    <img class="w-[288px] sm:w-[410px]" :src="toDoListPlaceHolder" />
  </div>
</template>
