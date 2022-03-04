<script>
import Title from "../components/Title.vue";
import Posts from "../services/posts";
import Card from "../components/Card.vue";

export default {
  components: { Title, Card },
  
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    Posts.list().then((response) => {
      console.log(response.data);
      this.posts = response.data;
    });
  },
};
</script>

<template>
  <Title title="Last Posts" />

  <div v-for="post in posts" :key="post.id" class="container">
     <Card :title="post.title" :body="post.body"/>
  </div>
</template>

