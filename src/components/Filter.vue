<template>
  <form
      class="w-full flex justify-center gap-5 mb-20"
      @submit.prevent="$emit('getSearchQuery', searchQuery)"
  >
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Enter the name or location"
      class="flex-1 rounded border max-w-80 pl-2"
    />
    <button type="submit" class="flex justify-center w-35 bg-blue-500 text-white py-2 px-4 rounded hover:opacity-75 hover:shadow-md transition duration-300 cursor-pointer">
      Search
    </button>
  </form>
</template>

<script setup>
  import  {ref} from 'vue'
  
  const searchQuery = ref('')
</script>
