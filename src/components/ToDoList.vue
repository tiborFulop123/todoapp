<template>

    <li v-for="(todo, index) in toDos" v-bind:key="todo.id">
            {{ todo }}
            <button @click="removeToDo(index)">delete</button>
          </li>
    
    
    </template>
    
    <script setup>
    import { def } from '@vue/shared';
    import { defineProps } from 'vue';
    
    const props = defineProps({
    
    
        todo: { type:"", required:true} 
    
    
    })
    defineProps
    
    
    </script>
    