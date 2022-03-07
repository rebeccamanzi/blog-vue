<template>
  <Title title="Create a new Post" />

  <div class="container">
    <form class="col s12">
      <div class="input-field col s6">
        <input
          placeholder="Email"
          id="email"
          type="text"
          class="validate"
          v-model="user.email"
        />
      </div>
      <div class="input-field col s6">
        <input
          placeholder="Title"
          id="title"
          type="text"
          class="validate"
          v-model="post.title"
        />
      </div>
      <div class="input-field col s6">
        <input
          placeholder="Body"
          id="body"
          type="text"
          class="validate"
          v-model="post.body"
        />
      </div>
      <Button
        value="Submit"
        @click="
          getUserId(user.email);
          validUserStatus(user)
        "
      />
    </form>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Posts from "../services/posts.js";
import Users from "../services/users.js";
import Button from "../components/Button.vue";

export default {
  components: { Title, Button },

  data() {
    return {
      users: [],
      user: {
        name: "",
        email: "",
        gender: "",
        status: "",
      },
      post: {
        user_id: "",
        title: "",
        body: "",
      },
    };
  },

  mounted() {
    Users.list().then((response) => {
      this.users = response.data;
    });
  },

  methods: {
    getUserId(email) {
      const userInfo = this.users.filter((u) => u.email == email);
      this.post.user_id = userInfo[0].id;
      this.user.status = userInfo[0].status;
      // create error exception if the e-mail is not saved at api
    },

    create() {
      Posts.create(this.post).then((response) => {
        alert("Post created successfully!");
      });
    },

    validUserStatus(user) {
      if (user.status == "inactive") {
        alert("You cant create a post because your status is inactive.");
      } else {
        this.create()
      }
    }
  },
};
</script>