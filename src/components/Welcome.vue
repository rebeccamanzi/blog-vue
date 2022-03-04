<script setup>
import WelcomeItem from './WelcomeItem.vue'
import Title from './Title.vue'
import Subtitle from './Subtitle.vue'
</script>

<template>
  <Title title="Welcome to your favorite Blog :)" />
  <Subtitle subtitle="what do you want to do?" />
    <div class="container">
      <div class="row">
        <WelcomeItem item="Create a new user" href="#" />
        <WelcomeItem item="Update your status" href="#"/>
        <WelcomeItem item="Create a new post" href="#"/>
        <WelcomeItem item="See all posts" href="#"/>
        <WelcomeItem item="Create a to-do list" href="#"/>  
      </div>
    </div>
</template>

