<template>
  <Title title="Update your Status" />
  <div class="container">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
            placeholder="Email"
            id="email"
            type="text"
            class="validate"
            v-model="user.email"
          />
        </div>
        <div class="col s12">
          <select class="browser-default" v-model="user.status">
            <option value="" disabled selected>Status</option>
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </select>
        </div>
      </div>
      <Button
        value="Submit"
        @click="
          getUserId(user.email);
          validUserStatus(user);
        "
      />
    </form>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Users from "../services/users.js";
import Button from "../components/Button.vue";

export default {
  name: "UpdateStatus",
  components: { Title, Button },

  data() {
    return {
      users: [],
      userStatus: "",
      user: {
        id: "",
        email: "",
        status: "",
      },
    };
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    getUsers() {
      Users.list().then((response) => {
        this.users = response.data;
      });
    },

    getUserId(email) {
      const userInfo = this.users.filter((u) => u.email == email);
      try {
        this.user.id = userInfo[0].id;
        this.userStatus = userInfo[0].status;
      } catch (e) {
        if (e instanceof TypeError) {
          alert("User does not exist.");
          this.$router.go();
        } else {
          console.log(e);
        }
      }
    },

    update(user) {
      Users.update(this.user).then((response) => {
        alert("Status updated successfully!");
        this.$router.go();
      });
    },

    validUserStatus(user) {
      if (user.status == this.userStatus) {
        alert(`Status is alredy ${this.user.status}.`);
      } else {
        this.update();
      }
    },
  }
};
</script>