<template>
  <li v-for="(todo, index) in toDos" v-bind:key="todo.id">
    {{ todo }}
    <button class="border-radius: 50%;" @click="removeToDo(index)">delete</button>
  </li>
<div>



</div>

<img >


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
