<script>
import Posts from "../services/posts.js";
import Title from "../components/Title.vue";
import Comments from "../services/comments";

export default {
  components: { Title },

  data() {
    return {
      post: {
        id: 1409, //inserir variável enviada ao clicar em um post na pag Posts
        user_id: "",
        title: "",
        body: "",
      },
    };
  },

  methods: {
    showPost() {
      Posts.listId(this.post.id).then((response) => {
        this.post.title = response.data.title;
        this.post.body = response.data.body;
      });
    },
  },

  mounted() {
    this.post.id = this.$route.params.id;
    this.showPost();
  },
};
</script>


<template>

  <div class="container">
      <Title :title="post.title" />
    <p>{{ post.body }}</p>

    <div>
    <a href="/posts" class="right">Back</a>
    <a href="" class="left">Coment</a>
  </div>

  
    
  </div>

  

  
  <!-- add for dos comentários -->
    
</template>
