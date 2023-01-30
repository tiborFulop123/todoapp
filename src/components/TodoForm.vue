<script setup>
import { ref } from "vue";

const todoText = ref("");

function addToDo() {
  toDos.value.push(todoText.value);
  todoText.value = "";
}
function removeToDo(index) {
  toDos.value.splice(index, 1);
}

function clearToDo() {
  toDos.value = [];
}




// function addNewTodo(todo)
//  {
//       todos.value.push(todo);
//  }

 const emit = defineEmits(['toDoAdded'])
function addToDoo(params) {
    emit('toDoAdded' , params)

}
</script>

<template>
  <div>
    <button class="" @click="clearToDo">clear</button>

    <div>
      <input type="text" v-model="todoText" />
      <button @click="addToDo(todoText)">Submit</button>
      <pre></pre>
    </div>
    <div>
      <li v-for="(todo, index) in toDos" v-bind:key="todo.id">
        {{ todo }}
        <button @click="removeToDo(index)">delete</button>
      </li>
    </div>
  </div>




</template>
