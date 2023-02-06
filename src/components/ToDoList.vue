<template>
  <li
    class="rounded-lg bg-white border border-black border-2"
    v-for="(todo, index) in toDos"
    v-bind:key="todo.id"
  >
    <div v-if="editingIndex !== index" @click="editingIndex = index">
      <div>{{ todo.title }}</div>
      <div>{{ todo.text }}</div>
      <select
        id="priority-dropdown"
        class="rounded-full bg-white border border-black border-2"
        :value="todo.priority"
      >
        <option value="High" class="background-color:rgb(220 38 38);">
          High
        </option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <div>{{ todo.created_at }}</div>
      <div>{{ todo.status }}</div>
      <li v-if="todo.text == ''"></li>
      <li v-if="todo.title == ''"></li>
      <li v-if="todo.created_at == ''"></li>
    </div>
    <div v-else>
      <div>
        <select
          id="priority-dropdown"
          class="rounded-full bg-white border border-black border-2"
          :value="todo.priority"
        >
          <option value="High">High</option>
          <option class=" " value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <input v-model="toDos[index].text" placeholder="Addtask" />

      <input v-model="toDos[index].title" placeholder="Title" />
      <input v-model="toDos[index].created_at" placeholder="Date" />
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
