<template>
    <h2 class="title"> {{ title }} </h2>
</template>

<script>
export default {
  name: 'Title',
  props: ['title']
}
</script>

<style scoped>
.title {
    font-size: 3rem;
    text-align: center;
}
</style>