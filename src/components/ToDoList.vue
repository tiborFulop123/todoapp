<template>
  <div v-for="(todo, index) in toDos" :key="todo.id">
    <ToDoItem
      @selectEditing="setEditing(index)"
      @toDoDeleted="removeToDo(index)"
      :toDo="todo"
      :isEditing="editingIndex === index"
    >
      <CheckMark @check="checkItem(index)" />
    </ToDoItem>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import CheckMark from './CheckMark.vue';
  import ToDoItem from './ToDoItem.vue';

  //begin-region Variables
  const props = defineProps({
    toDos: { type: Array, required: true },
  });

  const emit = defineEmits(['toDoDeleted', 'upDatedToDos', 'toDoEditingIndex']);

  const editingIndex = ref(null);

  const isCheck = ref(null);

  //end-region

  //begin-region Functions

  function setEditing(index) {
    editingIndex.value = index;
  }
  function checkItem(index) {
    const upDatedToDos = [...props.toDos];
    const checkedItem = upDatedToDos.splice(index, 1)[0];
    isCheck.value = index;
    upDatedToDos.push(checkedItem);
    emit('upDatedToDos', upDatedToDos);
  }
  //end-region
</script>
