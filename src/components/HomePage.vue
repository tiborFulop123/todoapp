<template>
  <div class="flex justify-center mx-auto flex-col lg:w-[610px]">
    <ConfirmationPopUp />

    <Header @toDoAdded="addNewTodo" @toDoSearch="searchToDo" />

    <ToDoList
      v-if="searchedToDo?.length"
      :toDos="searchedToDo"
      @upDatedToDos="updateToDos"
      @toDoDeleted="removeToDo"
      @toDoAdded="addNewTodo"
    />

    <div class="grid place-items-center" v-else>
      <img class="w-72 sm:w-[410px]" :src="toDoListPlaceholder" />
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { newDate } from '../utils/date';
  import ToDoList from './ToDoList.vue';
  import Header from './Header.vue';
  import ConfirmationPopUp from './ConfirmationPopUp.vue';
  import toDoListPlaceholder from './../assets/toDoListPlaceholder.svg';

  //begin region Variables
  const emit = defineEmits(['toDoSearch']);
  const toDos = ref([]);

  const searchTitle = ref('');

  const searchedToDo = computed(() => {
    return toDos.value.filter((item) => item.title.includes(searchTitle.value));
  });
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

  function searchToDo(searchText) {
    console.log(searchText);
    searchTitle.value = searchText;
  }
  //end-region
</script>
