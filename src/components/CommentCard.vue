<template>
  <div class="col s12">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <div class="body">
            <p>
              <span class="deep-purple-text text-darken-2 name"
                >{{ userName }} </span
              >:
              {{ body }}
            </p>
          </div>

          <div>
            <span class="material-icons email">email</span> {{ userEmail }}
            <span class="status">
              {{ userStatus == "inactive" ? `(${userStatus})` : "" }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Users from "../services/users.js";
export default {
  name: "CommentCard",
  props: ["userName", "userEmail", "body"],

  data() {
    return {
      users: [],
      userStatus: "",
    };
  },

  methods: {
    getUsers() {
      Users.list().then((response) => {
        this.users = response.data;
      }).catch(e => {
        console.log(e)
      });
    },

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
    this.getUsers();
    this.getUserInfo(this.userEmail);
  },
};
</script>

<style scoped>
.body {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.name {
  font-weight: 600;
}

.status {
  font-style: italic;
  color: grey;
  font-size: 0.8rem;
}

.email {
  font-size: 0.8rem;
}
</style>

