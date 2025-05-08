<template>
  <div class="flex justify-center items-center mt-8 gap-4">
    <button
        @click="$emit('prevPage')"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
    >
      Prev
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button
        @click="$emit('nextPage')"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      default : true
    }
  })
</script>
