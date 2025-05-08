<template>
  <div class="container pb-10">
    <h1 class="text-4xl font-bold text-center my-8">Welcome to My Real Estate App</h1>
    <p class="text-lg text-center mb-8">Find your dream property with ease.</p>
    <Filter @get-search-query="search" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <template v-if="isLoading">
        <SkeletonCard v-for="n in 8" :key="n" />
      </template>
      <template v-else>
        <PropertyCard v-for="property in properties" :key="property.id" :property="property" />
      </template>
    </div>
    <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @prev-page="prevPage"
        @next-page="nextPage"
      />
  </div>
</template>

<script setup>
  import {computed, onMounted, ref} from "vue";
  import { usePropertyStore  } from '@/stores/property.js';
  import PropertyCard from "@/components/PropertyCard.vue";
  import Pagination from "@/components/Pagination.vue";
  import SkeletonCard from "@/components/SkeletonCard.vue";
  import Filter from "@/components/Filter.vue";
  
  const store = usePropertyStore();
  const currentPage = ref(store.currentPage);
  const totalPages = computed(() => store.totalPages);
  const properties = computed(() => store.paginatedProperties);
  const isLoading = ref(true);
  
  onMounted(() => {
    loadProperties()
  })
  
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      store.setPage(currentPage.value);
    }
    
    loadProperties()
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      store.setPage(currentPage.value);
    }
    
    loadProperties()
  };
  
  const loadProperties = () => {
    isLoading.value = true;
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Плавная прокрутка
      });
      store.setPage(currentPage.value);
      isLoading.value = false;
    }, 1000);
  };
  
  const search = (query) => {
    store.setSearchQuery(query);
    loadProperties()
  }
</script>
