<template>
  <h2 class="subtitle">{{ subtitle }}</h2>
</template>

<script>
export default {
  name: "Subtitle",
  props: ["subtitle"],
};
</script>

<style scoped>
.subtitle {
  font-size: 2rem;
  text-align: center;
}
</style>