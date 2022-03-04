<script>
export default {
  props: ['subtitle']
}
</script>

<template>
    <h2 class="subtitle"> {{ subtitle }} </h2>
</template>

<style>
.subtitle {
    font-size: 2rem;
    text-align: center;
}
</style>