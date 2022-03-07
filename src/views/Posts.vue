<script>
import Title from "../components/Title.vue";
import Posts from "../services/posts";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";

export default {
  components: { Title, Card, Button },
  data() {
    return {
      posts: [],
      page: 1,
    };
  },

  methods: {
    list() {
      Posts.list(this.page).then((response) => {
        this.posts = response.data;
      });
    },

    nextPage() {
      this.page++;
      return this.list();
    },

    previousPage() {
      this.page--;
      return this.list();
    },

    selectPage(page){
      this.page = page
      return this.list();
    }
  },

  mounted() {
    this.list();
  },
};
</script>

<template>
  <Title title="Last Posts" />

  <!-- criar logica para calcular quantidade de pags e inserir os valores com v-for -->
  <div class="container center">
      <ul class="pagination">
        <li class=""><a href="#" @click="previousPage()"><i class="material-icons">chevron_left</i></a></li>
        <li class="waves-effect"><a href="#" @click="selectPage(1)">1</a></li>
        <li class="waves-effect"><a href="#" @click="selectPage(2)">2</a></li>
        <li class="waves-effect"><a href="#" @click="selectPage(3)">3</a></li>
        <li class="waves-effect"><a href="#" @click="selectPage(4)">4</a></li>
        <li class="waves-effect"><a href="#" @click="selectPage(5)">5</a></li>
        <li class="waves-effect"><a href="#" @click="nextPage()"><i class="material-icons">chevron_right</i></a></li>
      </ul>
  </div>

  <div v-for="post in posts" :key="post.id" class="container">
    <Card :title="post.title" :body="post.body" :postId="post.id"/>
  </div>

</template>

