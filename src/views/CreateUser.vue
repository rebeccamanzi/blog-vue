<template>
  <Title title="Create User" />
  <div class="container">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
            placeholder="Name"
            id="name"
            type="text"
            class="validate"
            v-model="user.name"
          />
        </div>
        <div class="input-field col s6">
          <input
            placeholder="Email"
            id="email"
            type="text"
            class="validate"
            v-model="user.email"
          />
        </div>
      </div>
      <div class="row">
        <div class="col s12 m4">
          <select class="browser-default" v-model="user.gender">
            <option value="" disabled selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="col s12 m4">
          <select class="browser-default" v-model="user.status">
            <option value="" disabled selected>Status</option>
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </select>
        </div>
      </div>
      <Button value="Submit" @click="create" />
    </form>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Users from "../services/users.js";
import Button from "../components/Button.vue";

export default {
  name: 'CreateUser',
  components: { Title, Button },

  data() {
    return {
      user: {
        name: "",
        email: "",
        gender: "",
        status: "",
      },
    };
  },

  methods: {
    create() {
      Users.create(this.user).then((response) => {
        alert("User created successfully!");
        this.$router.go();
      });
    },
  },
};
</script>