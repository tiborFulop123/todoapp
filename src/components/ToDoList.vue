<template>
  <div v-for="(todo, index) in toDos" v-bind:key="todo.id">
    <ToDoItem
      @selectEditing="setEditing(index)"
      :isEditing="editingIndex === index"
      @toDoDeleted="removeToDo(index)"
      :toDo="todo"
      @indexEditing="setEditing(index)"
    />
  </div>
</template>

<script setup>
  import ToDoItem from './ToDoItem.vue';
  import { ref } from 'vue';

  const editingIndex = ref(null);

  const props = defineProps({
    toDos: { type: Array, required: true },
  });

  const emit = defineEmits(['toDoDeleted', 'upDatedToDos', 'toDoEditingIndex']);

  function setEditing(index) {
    editingIndex.value = index;
  }

  function saveToDo() {
    editingIndex = null;
    emit('toDoSaved');
  }
  function updateToDo(index, newTodo) {
    const newTodos = [...props.toDos];
    newTodos[index] = newTodo;
    emit('upDatedToDos', newTodos);
  }
</script>
