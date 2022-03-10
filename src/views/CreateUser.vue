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

      <p class="validation" v-if="this.user.email !== '' && !this.validateEmail(this.user.email)">
        Invalid Email 
      </p>

      <p class="validation" v-if="this.validation[0] !== ''">
        {{ validation[0] }}
      </p>
      <p class="validation" v-if="this.validation.lenght !== 0">
        {{ validation[1] }}
      </p>
      <p class="validation" v-if="this.validation.lenght !== 0">
        {{ validation[2] }}
      </p>
      <p class="validation" v-if="this.validation.lenght !== 0">
        {{ validation[3] }}
      </p>

      <Button value="Submit" @click="create" />
    </form>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Users from "../services/users.js";
import Button from "../components/Button.vue";

export default {
  name: "CreateUser",
  components: { Title, Button },

  data() {
    return {
      user: {
        name: "",
        email: "",
        gender: "",
        status: "",
      },
      validation: [],
    };
  },

  methods: {
    create() {
      if (this.validateFields() && this.validateEmail() ) {
        Users.create(this.user).then((response) => {
          alert("User created successfully!");
          this.$router.go();
        });
      } else {
        console.log(this.validation);
        alert("Please fill in the required fields.");
      }
    },

    validateField(field, name) {
      if (field == "") {
        this.validation.push(`The ${name} cant not be empty.`);
        return false;
      } else return true;
    },

    validateFields() {
      if (
        this.validateField(this.user.name, "Name") &&
        this.validateField(this.user.email, "Email") &&
        this.validateField(this.user.gender, "Gender") &&
        this.validateField(this.user.status, "Status")
      ) {
        return true;
      } else {
        this.validation = [];
        this.validateField(this.user.name, "Name");
        this.validateField(this.user.email, "Email");
        this.validateField(this.user.gender, "Gender");
        this.validateField(this.user.status, "Status");
        return false;
      }
    },

    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
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