<script>
import Users from "../services/users.js";

export default {
  props: ["userName", "userEmail", "body"],

  data() {
      return {
          users: [],
          userStatus: ''
      }
  },

  methods: {
     getUserInfo(userEmail) {
      const userInfo = this.users.filter((u) => u.email == userEmail);
      if (userInfo.length == 0) {
          return;
      } else {
          this.userStatus = userInfo[0].status;
      }
    },
  },

  mounted() {
    Users.list().then((response) => {
      this.users = response.data;

      this.getUserInfo(this.userEmail)
    });
  }
};


</script>

<template>
  <div class="col s12">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <p class="body">
            {{ body }}
          </p>
          <p>
            <span class="blue-text text-darken-2">{{ userName }} </span> |
            {{ userEmail }}  <span class="status"> {{ userStatus == 'inactive'? `(${userStatus})` : ''}} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
p.body {
  font-size: 1.2rem;
}

.status {
    font-style: italic;
    color: grey;
    font-size: 0.8rem;

}
</style>

