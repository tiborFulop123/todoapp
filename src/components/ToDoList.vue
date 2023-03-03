<template>
  <div v-for="(todo, index) in toDos" :key="todo.id">
    <ToDoItem
      @selectEditing="setEditing(index)"
      :isEditing="editingIndex === index"
      @toDoDeleted="removeToDo(index)"
      :toDo="todo"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ToDoItem from './ToDoItem.vue';

  //begin-region Variables

  const editingIndex = ref(null);

  const props = defineProps({
    toDos: { type: Array, required: true },
  });

  const emit = defineEmits(['toDoDeleted', 'upDatedToDos', 'toDoEditingIndex']);
  //end-region

  //begin-region Functions

  function setEditing(index) {
    editingIndex.value = index;
  }
  //end-region
</script>
