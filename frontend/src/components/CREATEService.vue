<!-- eslint-disable prettier/prettier -->
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, alpha, numeric } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

// will have to go back and change this to route to the services collection in mongodb in sprint 3
export default {
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      org: '',
      client: {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNumber: {
          primary: '',
          alternate: ''
        },
        address: {
          line1: '',
          line2: '',
          city: '',
          county: '',
          zip: ''
        }
      }
    }
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.org = res.data._id
    })
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    // will have to change this in sprint 3 to services instead of clients, "addService"
    registerClient() {
      this.v$.$validate().then((valid) => {
        if (valid) {
          axios
            .get(`${apiURL}/services/${this.services.name}`)
            .then((res) => {
              if (res.data) {
                if (res.data.orgs.includes(this.org)) {
                  alert('Service name has already been registered.')
                  this.$router.push({ name: 'findclient' })
                } else {
                  axios
                    .put(`${apiURL}/services/${res.data._id}`)
                    .then(() => {
                      alert('Client registered')
                      this.$router.push({ name: 'findclient' })
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }
              } else {
                axios
                  .post(`${apiURL}/services`, this.service)
                  .then(() => {
                    alert('Service added')
                    this.$router.push({ name: 'findclient' })
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              }
            })
        }
      })
    }
  },
  // sets validations for the various data properties, will have to change in sprint 3 to services instead of clients
  validations() {
    return {
      client: {
        firstName: { required, alpha },
        lastName: { required, alpha },
        email: { email },
        address: {
          city: { required }
        },
        phoneNumber: {
          primary: { required, numeric }
        }
      }
    }
  }
}
</script>

<template>
  <main>
    <h1
      class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
    >
      Add Services Form
    </h1>
    <div class="px-10 py-20">
      <!-- @submit.prevent stops the submit event from reloading the page-->
      <!-- Will have to change in Sprint 3 to services instead of client, "addService"-->
      <form @submit.prevent="registerClient">
        <!-- grid container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <h2 class="text-2xl font-bold">Service Details</h2>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Service Title</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="client.firstName"
              />
              <!--will have to change in sprint 3 to services instead of client, "services.serviceName"-->
              <span class="text-black" v-if="v$.client.firstName.$error">
                <p
                  class="text-red-700"
                  v-for="error of v$.client.firstName.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Description</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="client.middleName"
              />
              <!--will have to change in sprint 3 to services instead of client, "services.description"-->
            </label>
          </div>
        </div>
        <!-- grid container -->
        <div
          class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <!-- form field -->
          <div class="flex flex-col"></div>
          <div></div>
          <!-- submit button -->
          <div class="flex justify-between mt-10 mr-20">
            <button class="bg-red-700 text-white rounded" type="submit">
              Add Service
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
