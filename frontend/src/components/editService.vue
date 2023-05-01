<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <br>
  <div class="main">
    <h2 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Edit Services</h2>
    <br>
    <label>Select an event type: </label>
    <select v-model="selectedEventType">
      <option v-for="(eventType, index) in eventTypes" :key="index">
        {{ eventType }}
      </option>
    </select>
    <br />
    <h3>Selected event: {{ selectedEventType }}</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Service</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
          <th>Toggle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in eventServices" :key="index">
          <td>{{ service.name }}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.price }}</td>
          <td><button @click="editService(index)">Edit</button></td>
          <td><button class="ui button toggle" :class="{active:isActive}" @click="toggle"> {{isActive ? 'ON' : 'OFF'}} </button></td>
        </tr>
      </tbody>
    </table>
    <div v-if="editingService">
      <h4>Edit Service: {{ editingService.name }}</h4>
      <label>Name:</label>
      <input type="text" v-model="editingService.name" />
      <br />
      <label>Description:</label>
      <input type="text" v-model="editingService.description" />
      <br />
      <label>Price:</label>
      <input type="number" v-model="editingService.price" />
      <br />
      <button @click="saveService">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
    <table class="min-w-full shadow-md rounded">
      <thead class="bg-gray-50 text-xl">
        <tr>
          <th class="p-4 text-left">Service Name</th>
          <th class="p-4 text-left">Service Description</th>
          <th class="p-4 text-left">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-300">
        <tr
          @click="editEvent(event._id)"
          v-for="event in events"
          :key="event._id"
        >
          <td class="p-2 text-left">{{ event.name }}</td>
          <td class="p-2 text-left">{{ formattedDate(event.date) }}</td>
          <td class="p-2 text-left">{{ event.address.line1 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  data() {
    return {
      eventTypes: ['User Event 1', 'User Event 2', 'User Event 3'],
      selectedEventType: 'User Event 1',
      eventServices: [
        {
          name: 'Family Support',
          description: 'Support the family',
          price: 50
        },
        {
          name: 'Adult Education',
          description: 'Educate the adults',
          price: 100
        },
        {
          name: 'Youth Services Program',
          description: 'Services for the youth',
          price: 150
        }
      ],
      editingService: null,
      //toggle button - SP3
      isActive: false,
    }
  },
  methods: {
    editService(index) {
      this.editingService = { ...this.eventServices[index] }
    },
    saveService() {
      this.eventServices[this.eventServices.indexOf(this.editingService)] =
        this.editingService
      this.editingService = null
    },
    cancelEdit() {
      this.editingService = null
    },
    // abstracted method to get services - SP3
    getEvents() {
      axios.get(`${apiURL}/events`).then((res) => {
        this.services = res.data
      })
      window.scrollTo(0, 0)
    },
  }
}
</script>