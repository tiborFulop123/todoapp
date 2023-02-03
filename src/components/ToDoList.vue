<template>
  <li v-for="(todo, index) in toDos" v-bind:key="todo.id">
    <div v-if="editingIndex !== index" @click="editingIndex = index">
      <div>{{ todo.title }}</div>
      <div>{{ todo.text }}</div>
      <div>{{ todo.priority }}</div>
      <div>{{ todo.created_at }}</div>
      <div>{{ todo.status }}</div>
      <li v-if="todo.title == ''">Addtask</li>
    </div>
    <div v-else>
      <input
        v-model="toDos[index].title"
        placeholder="Addtask"
        class="bg-red-500"
      />
    </div>
    <button class="border-radius: 50%;" @click="removeToDo(index)">
      delete
    </button>
  </li>
  <div></div>

  <img />
</template>

<script setup>
  import { ref } from 'vue';

  const editingIndex = ref(null);
  const emit = defineEmits(['toDoDeleted']);

  function removeToDo(index) {
    emit('toDoDeleted', index);
  }

  const props = defineProps({
    toDos: { type: Array, required: true },
  });
</script>
