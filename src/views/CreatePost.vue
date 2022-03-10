<template>
  <Title title="Create a new Post" />

  <div class="container">
    <form class="col s12">
      <div class="input-field col s6">
        <input
          placeholder="Email"
          id="email"
          type="email"
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
      
      <p class="validation" v-if="validation.lenght !== 0">{{ validation[1] }}</p>
      <p class="validation" v-if="validation.lenght !== 0">{{ validation[2] }}</p>
      <p class="validation" v-if="validation.lenght !== 0">{{ validation[3] }}</p>

      <Button value="Submit" @click="create()" />
    </form>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Posts from "../services/posts.js";
import Users from "../services/users.js";
import Button from "../components/Button.vue";

export default {
  name: "CreatePost",
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
      validation: [],
    };
  },

  mounted() {
    this.getUsers();
    console.log(this.validation)
  },

  methods: {
    validateField(field, name) {
      if (field == "") {
        this.validation.push(`The ${name} cant not be empty.`);
        return false;
      } else return true;
    },

    validateFields() {
      if (
        this.validateField(this.user.email, "Email") &&
        this.validateField(this.post.title, "Title") &&
        this.validateField(this.post.body, "Body")
      ) {
        return true;
      } else {
        this.validateField(this.user.email, "Email");
        this.validateField(this.post.title, "Title");
        this.validateField(this.post.body, "Body");
        return false;
      }
    },

    getUsers() {
      Users.list().then((response) => {
        this.users = response.data;
      });
    },

    getUserId(email) {
      const userInfo = this.users.filter((u) => u.email == email);
      try {
        this.post.user_id = userInfo[0].id;
        this.user.status = userInfo[0].status;
      } catch (e) {
        if (e instanceof TypeError) {
          alert("User does not exist.");
          this.$router.go();
        } else {
          console.log(e);
        }
      }
    },

    create() {
      if (this.validateFields()) {
        this.getUserId(this.user.email);
        Posts.create(this.post).then((response) => {
          this.$router.push("/posts");
        });
      } else {
        alert("Please fill in the required fields.");
      }
    },

    validUserStatus(user) {
      if (user.status == "inactive") {
        alert("You cant create a post because your status is inactive.");
      } else {
        this.create();
      }
    },
  },
};
</script>

<style scoped>
.validation {
  color: red;
  margin: 0;
}
</style>