<template>
  <div class="pb-10">
    <div class="relative bg-black">
      <img
          :src="image"
          alt="Property Image"
          class="w-full h-[40vh] object-cover mb-20 opacity-50"
      />
      <h1 class="absolute text-5xl text-white font-bold left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 whitespace-nowrap">{{ property.name }}</h1>
    </div>
    <div class="container">
      <div class="flex gap-5">
        <img
            :src="image"
            alt="Property Image"
            class="w-2/5"
        />
        <div>
          <p class="text-2xl">{{ property.name }}</p>
          <p class="text-xl">{{ property.location }}</p>
          <p class="text-md"><strong>Price:</strong> {{ property.price }}$</p>
        </div>
      </div>
      <p class="text-lg mt-20 md:w-3/5 mx-auto">{{property.description}}</p>
      <div class="w-full h-[400px] mt-20" ref="mapContainer"></div>
    </div>
  </div>
</template>
      
<script setup>
import {onMounted, ref} from "vue";
  import { useRoute } from "vue-router";
  import  image from 'assets/property-image.jpg'
  import { usePropertyStore  } from '@/stores/property.js';
import maplibregl from "maplibre-gl";
  
  const route = useRoute();
  const store = usePropertyStore();
  const propertyId = route.params.propertyId;
  const property = store.getSingleProperty(propertyId);
  const mapContainer = ref(null);
console.log(property);
  onMounted(() => {
    const map = new maplibregl.Map({
      container: mapContainer.value,
      style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=wSG9gcxGtdN9aLlBbies',
      center: property.geometry.coordinates,
      zoom: 10,
    });
    
    setTimeout(() => {
      map.resize();
    }, 100);
    
    const marker = new maplibregl.Marker()
        .setLngLat(property.geometry.coordinates)
        .addTo(map);
  });
</script>