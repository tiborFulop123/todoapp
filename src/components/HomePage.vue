<script setup>
  import { ref } from 'vue';
  import ToDoList from './ToDoList.vue';
  import HeaderComponent from './HeaderComponent.vue';
  import toDoListMT from './../assets/toDoListMT.svg';
  const toDos = ref([]);
  function addNewTodo() {
    const newToDo = {
      title: 'Title',
      text: 'tanulj Vue.js-t',
      priority: 'High',
      created_at: '2023-01-30',
      status: 'Active',
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
  ></ToDoList>

  <div v-else>
    <img :src="toDoListMT" />
  </div>
</template>
