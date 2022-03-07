<script>
import Posts from "../services/posts.js";
import Title from "../components/Title.vue";
import Comments from "../services/comments";
import CommentCard from "../components/CommentCard.vue";
import Button from "../components/Button.vue";
import Users from "../services/users.js";

export default {
  components: { Title, CommentCard, Button },

  data() {
    return {
      comments: [],
      comment: {
        post_id: 0,
        name: "",
        email: "",
        body: "",
      },
      users: [],
      user: {
        email: "",
        status: "",
      },
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

    getUserInfo(email) {
      const userInfo = this.users.filter((u) => u.email == email);
      this.user.status = userInfo[0].status;
    },

    createComment() {
      if (this.user.status == "active") {
        Comments.create(this.comment).then((response) => {
          alert("Comment created successfully!");
          this.$router.go();
        });
      } else {
        alert("You cant create a comment because your status is inactive.");
        this.$router.go();
      }
    },    
  },

  mounted() {
    Users.list().then((response) => {
      this.users = response.data;
    });

    this.post.id = this.$route.params.id;
    this.comment.post_id = this.post.id;
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

    <form class="col s12">
      <p>New Comment:</p>
      <div class="input-field col s6">
        <input
          placeholder="Name"
          id="name"
          type="text"
          class="validate"
          v-model="comment.name"
        />
      </div>
      <div class="input-field col s6">
        <input
          placeholder="Email"
          id="email"
          type="text"
          class="validate"
          v-model="comment.email"
        />
      </div>
      <div class="input-field col s6">
        <input
          placeholder="Body"
          id="body"
          type="text"
          class="validate"
          v-model="comment.body"
        />
      </div>
      <Button value="Comment" @click="getUserInfo(comment.email); createComment()" />
    </form>
  </div>
</template>
