<template>
    <a class="waves-effect waves-light btn deep-purple darken-4" > {{ value }} </a>
</template>

<script>
export default {
  name: 'Button',
  props: ["value"],
};
</script>

<style scoped>

a {
  margin: 2rem 0;
  min-width: 10rem;
}

</style>