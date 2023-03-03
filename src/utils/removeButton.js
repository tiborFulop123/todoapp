import { defineEmits } from "vue";


const emit = defineEmits(['toDoDeleted']);

export function removeToDo() {
    emit('toDoDeleted');
  }