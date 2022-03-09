<template>
  <div class="container-btn">
    <a class="waves-effect waves-light btn deep-purple darken-4" > {{ value }} </a>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ["value"],
};
</script>

<style scoped>
.container-btn {
    display: flex;
    justify-content: center;
    padding: 5rem;
}

.container-btn a {
    min-width: 10rem;
}
</style>