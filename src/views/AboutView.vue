<template>
  <div class="w-full h-screen">
    <iframe
        :src="pdfUrl"
        class="w-full h-full"
    ></iframe>
  </div>
</template>

<script setup>
  const pdfUrl = './Danylo Kulakovskyi.pdf'; // Укажите путь к вашему PDF-файлу
</script>