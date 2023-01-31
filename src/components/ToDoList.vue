<template>
  <li v-for="(todo, index) in toDos" v-bind:key="todo.id">
    {{ todo }}
    <button @click="removeToDo(index)">delete</button>
  </li>
</template>

<script setup>
const emit = defineEmits(["toDoDeleted"]);

function removeToDo(index) {
  emit("toDoDeleted", index);
}

const props = defineProps({
  toDos: { type: Array, required: true },
});
</script>
