<template>
  <div class="row justify-content-center">
        <div class="col-md-4">
            <h3 class="text-center">Login</h3>
            <form @submit.prevent="store.login(username, password)" novalidate="true">
                <div class="form-group">
                    <label>User name</label>
                    <input type="text" class="form-control" v-model="username" placeholder="username" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="password" required>
                </div>
                <button class="btn btn-danger mt-3">Submit</button>
            </form>
        </div>
  </div>
</template>

