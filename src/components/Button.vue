<script>
export default {
  props: ["value"],
};
</script>

<template>
  <div class="container-btn">
    <a class="waves-effect waves-light btn deep-purple darken-4"> {{ value }} </a>
  </div>
</template>

<style>
.container-btn {
    display: flex;
    justify-content: center;
    padding: 5rem;
}

.container-btn a {
    min-width: 10rem;
}
</style>