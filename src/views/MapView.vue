<template>
  <div class="w-full map-container" ref="mapContainer"></div>
</template>

<script setup>
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from 'maplibre-gl';
import { onMounted, ref } from 'vue';
import { usePropertyStore } from '@/stores/property.js';
import { useRouter } from 'vue-router';

const mapContainer = ref(null);
const store = usePropertyStore();
const router = useRouter();

onMounted(() => {
  const map = new maplibregl.Map({
    container: mapContainer.value,
    style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=wSG9gcxGtdN9aLlBbies',
    center: [30.5234, 50.4501],
    zoom: 10,
  });
  
  setTimeout(() => {
    map.resize();
  }, 100);
  
  store.properties.forEach((property) => {
    const popup = new maplibregl.Popup({closeButton: false, closeOnClick: false})
        .setHTML(`<h3>${property.name}</h3>`)
        .setLngLat(property.geometry.coordinates);
    
    const marker = new maplibregl.Marker()
        .setLngLat(property.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    
    const el = marker.getElement();
    
    el.addEventListener('mouseenter', () => {
      marker.getPopup().addTo(map);
    });
    
    el.addEventListener('mouseleave', () => {
      marker.getPopup().remove();
    });
    
    el.addEventListener('click', () => {
      router.push(`/property/${property.id}`);
    });
  })
});
</script>

<style scoped>
  .map-container {
    height: calc(100vh - 116px);
  }
</style>