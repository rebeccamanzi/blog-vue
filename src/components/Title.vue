<script>
export default {
  props: ['title']
}
</script>

<template>
    <h2 class="title"> {{ title }} </h2>
</template>

<style>
.title {
    font-size: 3rem;
    text-align: center;
}
</style>