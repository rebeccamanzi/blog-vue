<script setup>
import Navbar from './components/Navbar.vue'
import Welcome from './views/Welcome.vue'
import Posts from './views/Posts.vue'

</script>

<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <main>
      <Welcome />
      <Posts />
    </main>
  </div>
</template>

<style>
</style>
