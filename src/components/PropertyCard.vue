<template>
  <div class="flex flex-col bg-white shadow-md rounded-lg group">
    <div class="overflow-hidden">
      <img
          :src="image"
          alt="Property Image"
          class="w-full h-30 object-cover rounded-t-lg group-hover:scale-110 transition duration-500" />
    </div>
    <div class="flex-1 w-full flex flex-col gap-y-4 p-4">
      <div>
        <div class="flex justify-between">
          <h2 class="text-xl font-bold">{{ property.name }}</h2>
          <span class="text-sm text-gray-400">{{property.location}}</span>
        </div>
        <p class="text-gray-600 line-clamp-2 h-12">{{ property.description }}</p>
      </div>
      <div class="flex justify-between items-end mt-auto min-w-35">
        <p class="text-lg font-semibold">{{ property.price }}$</p>
        <router-link
            :to="`/property/${property.id}`"
            class="flex justify-center w-35 bg-blue-500 text-white py-2 px-4 rounded hover:opacity-75 hover:shadow-md transition duration-300"
        >View Property</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import image from "@/assets/property-image.jpg";

  defineProps({
    property: {
      type: Object,
      required: true
    },
    tableMode: {
      type: Boolean,
      default : true
    }
  })
  
</script>

<style scoped>

</style>