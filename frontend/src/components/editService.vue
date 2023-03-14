<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <br>
  <div class="main">
    <h2 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Edit Services</h2>
    <label>Select an event type:</label>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in eventServices" :key="index">
          <td>{{ service.name }}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.price }}</td>
          <td><button @click="editService(index)">Edit</button></td>
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
  </div>
</template>

<script>
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
      editingService: null
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
    }
  }
}
</script>