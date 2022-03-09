<template>
  <div class="col s12 m4" >
    <a class="welcome-items waves-effect waves-light deep-purple btn-large white-text black-text" :href="href" > 
      {{ item }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'WelcomeItem',
  props: ['item', 'href']
}
</script>

<style scoped>
.welcome-items {
  margin: 3rem 1rem 0rem 1rem;
  min-width: 16rem;
}
</style>


