<template>
  <div class="flex justify-center mx-auto flex-col lg:w-[610px]">
    <ConfirmationPopUp />

    <Header
      @toDoAdded="addNewTodo"
      @toDoSearch="searchToDo"
      @sortTitle="sortTitle"
      @sortDescription="sortDescription"
      @upArrow="upArrow"
      @downArrow="downArrow"
      @sortDate="sortDate"
      @sortPriority="sortPriority"
    />

    <ToDoList
      v-if="searchedToDo?.length"
      :toDos="sortedTodos"
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

  const emit = defineEmits(['toDoSearch']);
  const toDos = ref([]);
  const searchTitle = ref('');

  const sortBy = ref('');
  const sortDirectionUp = 1;

  const sortDirection = ref(sortDirectionUp);

  const searchedToDo = computed(() => toDos.value.filter((item) => item.title.includes(searchTitle.value)));

  const priorityOrder = {
    Low: 0,
    Medium: 1,
    High: 2,
  };

  const sortedTodos = computed(() => {
    return [...searchedToDo.value].sort((todo1, todo2) => {
      if (sortBy.value === 'priority') {
        return sortDirection.value * (priorityOrder[todo1.priority] - priorityOrder[todo2.priority]);
      }

      const [field1, field2] = [todo1[sortBy.value], todo2[sortBy.value]];
      if (field1 === field2) {
        return 0;
      }
      if (field1 < field2) {
        return -1 * sortDirection.value;
      }
      return sortDirection.value;
    });
  });

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
    searchTitle.value = searchText;
  }

  function sortTitle() {
    sortBy.value = 'title';
  }

  function sortDescription() {
    sortBy.value = 'text';
  }

  function sortPriority() {
    sortBy.value = 'priority';
  }

  function sortDate() {
    sortBy.value = 'createdAt';
  }

  function upArrow() {
    sortDirection.value = 1;
  }

  function downArrow() {
    sortDirection.value = -1;
  }
</script>
