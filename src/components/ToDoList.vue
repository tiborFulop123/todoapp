<template>
  <li v-for="(todo, index) in toDos" v-bind:key="todo.id">
    <div v-if="editingIndex !== index" @click="editingIndex = index">
      <div>{{ todo.title }}</div>
      <div>{{ todo.text }}</div>
      <div>{{ todo.priority }}</div>
      <div>{{ todo.created_at }}</div>
      <div>{{ todo.status }}</div>
      <li v-if="todo.text == ''"></li>
      <li v-if="todo.title == ''"></li>
      <li v-if="todo.created_at == ''"></li>
      <li v-if="todo.priority == ''"></li>
    </div>
    <div v-else>
      <input v-model="toDos[index].text" placeholder="Addtask" />

      <input v-model="toDos[index].title" placeholder="Title" />
      <input v-model="toDos[index].created_at" placeholder="Date" />
      <input v-model="toDos[index].priority" placeholder="Priority" />
    </div>

    <button class="border-radius: 50%;" @click="removeToDo(index)">
      delete
    </button>
  </li>
  <div></div>
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
