<script>
import { RouterLink } from "vue-router";
</script>


<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper grey darken-4">
        <div class="home">
          <router-link to="/" class="brand-logo md-48">
            <span class="material-icons">home</span>
          </router-link>
        </div>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/createuser"> Create User </router-link></li>
          <li><router-link to="/updatestatus"> Update Status </router-link></li>
          <li><router-link to="/createpost"> Create Post </router-link></li>
          <li><router-link to="/posts"> See Posts </router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
.home {
  margin: 0rem 2rem;
}
</style>

