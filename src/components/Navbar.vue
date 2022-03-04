<script>
import { RouterLink } from 'vue-router'
</script>


<template>
<div class="navbar-fixed">
    <nav>
    <div class="nav-wrapper grey darken-4">
       <router-link to="/" class="brand-logo md-48">
        <span class="material-icons">home</span>
       </router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/posts"> Posts </router-link></li>
        <li><router-link to="/todo"> ToDo </router-link></li>
        <li><router-link to="/newpost"> NewPost </router-link></li>     
      </ul>
    </div>
  </nav>
</div>
</template>

