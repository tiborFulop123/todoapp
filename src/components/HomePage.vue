<script setup>
  import { ref } from 'vue';
  import ToDoList from './ToDoList.vue';
  import HeaderComponent from './HeaderComponent.vue';
  import toDoListPlaceHolder from './../assets/toDoListPlaceHolder.svg';
  import PopUpToDoListConfirmation from './popUpToDoListConfirmation.vue';

  const toDos = ref([]);

  function addNewTodo() {
    const newToDo = {
      title: '',
      text: 'Cras placerat proin.',
      priority: 'High',
      title: 'Title',
      id: Date.now(),
      icon: true,
    };

    toDos.value.push(newToDo);
  }
  function removeToDo(index) {
    console.log(index);
    toDos.value.splice(index, 1);
    console.log(toDos.value);
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

<template>
  <div class="flex justify-center mx-auto flex-col lg:w-[610px]">
    <PopUpToDoListConfirmation></PopUpToDoListConfirmation>
    <HeaderComponent @toDoAdded="addNewTodo"></HeaderComponent>

    <ToDoList
      v-if="toDos?.length"
      @toDoDeleted="removeToDo"
      :toDos="toDos"
      @toDoAdded="addNewTodo"
    ></ToDoList>

    <div class="grid place-items-center" v-else>
      <img class="w-[288px] sm:w-[410px]" :src="toDoListPlaceHolder" />
    </div>
  </div>
</template>
