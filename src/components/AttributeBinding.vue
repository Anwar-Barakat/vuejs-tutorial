<script setup>
    const googleUrl = "https://www.google.com";

    const imageInfo = {
        src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        alt: 'amazing image',
        width: 'auto',
        height: 100
    }
</script>

<template>
  <div>
    <a :href="googleUrl" target="_blank">google here</a>
    <img :src="imageInfo.src" :alt="imageInfo.alt" 
        :width="imageInfo.width" :height="imageInfo.height"
    />
  </div>
</template>


