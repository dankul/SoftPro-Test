<template>
  <form
      class="w-full flex flex-col justify-center gap-5 mb-20 md:flex-row"
      @submit.prevent="$emit('getSearchQuery', searchQuery)"
      @reset="$emit('getSearchQuery', '')"
  >
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Enter the name or location"
      class="flex-1 rounded border md:max-w-80 pl-2 w-full"
    />
    <div class="flex gap-2 w-full md:w-[unset]">
      <button type="submit" class="w-1/2 flex justify-center md:w-35 bg-blue-500 text-white py-2 px-4 rounded hover:opacity-75 hover:shadow-md transition duration-300 cursor-pointer">
        Search
      </button>
      <button type="reset" class="w-1/2 flex justify-center md:w-35 border border-blue-500 text-blue-500 py-2 px-4 rounded hover:opacity-75 hover:shadow-md transition duration-300 cursor-pointer">
        Reset
      </button>
    </div>
  </form>
</template>

<script setup>
  import  {ref} from 'vue'
  
  const searchQuery = ref('')
</script>
