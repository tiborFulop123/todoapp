<template>
  <div v-for="(todo, index) in toDos" :key="todo.id">
    <ToDoItem
      @selectEditing="setEditing(index)"
      @toDoDeleted="removeToDo(index)"
      @check="checkItem(index)"
      :toDo="todo"
      :isEditing="editingIndex === index"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ToDoItem from './ToDoItem.vue';

  //begin-region Variables

  const editingIndex = ref(null);

  const isCheck = ref(null);
  const props = defineProps({
    toDos: { type: Array, required: true },
  });

  const emit = defineEmits(['toDoDeleted', 'upDatedToDos', 'toDoEditingIndex']);
  //end-region

  //begin-region Functions

  function setEditing(index) {
    editingIndex.value = index;
  }
  function checkItem(index) {
    isCheck.value = index;
    const upDatedToDos = [...props.toDos];
    const checkedItem = upDatedToDos.splice(index, 1)[0];
    upDatedToDos.push(checkedItem);
    emit('upDatedToDos', upDatedToDos);
  }
  //end-region
</script>
