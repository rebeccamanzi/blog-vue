<script>
import Posts from "../services/posts.js";
import Title from "../components/Title.vue";
import Comments from "../services/comments";
import CommentCard from "../components/CommentCard.vue";

export default {
  components: { Title, CommentCard },

  data() {
    return {
      comments: [],
      numberOfComments: 0,
      post: {
        id: 0, 
        user_id: "",
        title: "",
        body: "",
      },
    };
  },

  methods: {
    listComments() {
      Comments.list().then((response) => {
        this.comments = response.data;
      });
    },

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
    this.listComments();
  },
};
</script>


<template>
  <div class="container">
    <Title :title="post.title" />
    <p>{{ post.body }}</p>

    <p>Comments:</p>

    <div v-for="comment in comments" :key="comment.id">
      <div v-if="comment.post_id == this.post.id">
        <CommentCard
          :userName="comment.name"
          :body="comment.body"
          :userEmail="comment.email"
        />
      </div>
    </div>

    <div style="margin-bottom: 5rem">
      <a href="/posts" class="right">Back</a>
    </div>


  </div>
</template>
