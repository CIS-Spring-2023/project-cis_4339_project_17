<!-- eslint-disable prettier/prettier -->
<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
        <br>
        <router-link :to="{ path:'/home' }"><button>Login</button></router-link>
    </div>
      
    </form>

    <router-link to="/home"></router-link>

  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';



export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Handle login logic here
    }
  },
  computed: {
    isValid() {
      return this.username !== '' && this.password !== ''
    },
    hide() {
      return this.$route.path === '/Login';
    }
  },
  setup() {
    const store = UserLoggedIn()
    return {
      v$: useVuelidate(($autoDirty: true)),
      store
    }
  }
}
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: 10px;
  background-color: #020302;
  color: #e30e0e;
  font-size: 16px;
  cursor: pointer;
}

</style>
