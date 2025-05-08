<template>
  <div class="flex flex-col bg-white shadow-md rounded-lg group">
    <Skeletor width="100%" height="120" class="rounded-t-lg" />
    <div class="flex-1 w-full flex flex-col gap-y-4 p-4">
      <div>
        <Skeletor width="120" height="28" />
        <Skeletor v-for="i in 2" :key="i" />
      </div>
      <div class="flex justify-between items-end mt-auto min-w-35">
        <Skeletor  width="56"/>
        <Skeletor  width="140" height="40" class="rounded"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import "vue-skeletor/dist/vue-skeletor.css";
  import { Skeletor } from "vue-skeletor";

</script>

<style scoped>

</style>