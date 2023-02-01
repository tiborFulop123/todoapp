<template>
  <li v-for="(todo, index) in toDos" v-bind:key="todo.id">
    <div class= "p-6 bg-gray-200 rounded-lg border-radius ">  
      <div class="color #000000">{{ todo.title  }}</div>
<div class="color #000000">{{ todo.text }}</div>
<div class="color #000000">{{ todo.priority }}</div>
<div class="color #000000">  {{ todo.created_at }}</div>
<div class="color #000000">{{ todo.status }}</div>
    </div>

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
