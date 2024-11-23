<script setup>
    import { ref } from 'vue';
    const isActive = ref(true);
    

</script>

<template>
  <h1 class="text-red">From Global Styles</h1>

  <h2 class="bg-blue">From Global Styles</h2>

  <div :class="$style['bg-purple']">
    From Module Styles
  </div>


  <div :class="{
    active: isActive
  }">
    From Module Styles
  </div>
</template>

<style scoped>
.active {
  color: orange;
}

</style>

<style module>
/* kabab-case */
.bg-purple {
  background-color: purple;
  color: #fff;
}

.active {
  color: orange;
}

</style>
