<template>
  <div v-for="(todo, index) in toDos" v-bind:key="todo.id">
    <ToDoItem
      v-if="editingIndex !== index"
      @toDoDeleted="removeToDo(index)"
      :toDo="todo"
      @click="editingIndex = index"
    />
    <ToDoItemEdit
      v-else
      @toDoDeleted="removeToDo(index)"
      @toDoSaved="saveToDo(index)"
      :toDo="todo"
      @toDoUpdated="
        (newTodo) => {
          toDos[index] = newTodo;
        }
      "
    >
    </ToDoItemEdit>
  </div>
</template>

<script setup>
  import ToDoItem from './ToDoItem.vue';
  import { ref } from 'vue';
  import ToDoList from './ToDoList.vue';
  import ToDoItemEdit from './ToDoItemEdit.vue';
  const editingIndex = ref(null);

  const props = defineProps({
    toDos: { type: Array, required: true },
  });

  const emit = defineEmits(['toDoDeleted']);

  function removeToDo(index) {
    emit('toDoDeleted', index);
    console.log(index);
    editingIndex.value = null;
  }
  function saveToDo() {
    editingIndex = null;
    emit('toDoSaved');
  }
</script>
