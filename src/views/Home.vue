<script>
import WelcomeItem from "../components/WelcomeItem.vue";
import Title from "../components/Title.vue";
import Subtitle from "../components/Subtitle.vue";

export default {
  components: {
    WelcomeItem,
    Title,
    Subtitle
  }
}

</script>

<template>
  <Title title="Welcome to your favorite Blog :)" />
  <Subtitle subtitle="what do you want to do?" />
  <div class="container center">
    <div>
      <WelcomeItem item="Create a new user" href="/createuser" />
      <WelcomeItem item="Update your status" href="/updatestatus" />
      <WelcomeItem item="Create a new post" href="/createpost" />
      <WelcomeItem item="See all posts" href="/posts" />
    </div>
  </div>
</template>

