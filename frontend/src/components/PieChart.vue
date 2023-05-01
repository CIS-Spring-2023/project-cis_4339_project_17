<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
    <div>
      <canvas id="pie-chart"></canvas>
    </div>
  </template>

<script>
import Chart from 'chart.js/auto'

//SP2
import pieChartData from '../assets/piedata.js'

//SP3
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
//Attempt to fetch from DB - SP3

export default {
  name: 'PieChart',
  data() {
    return {
      pieChartData: pieChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('pie-chart')
    new Chart(ctx, this.pieChartData)
  },


  //using axios for CRUD operations - SP3
  actions() {
    fetchData() {
      axios.get('https://localhost:3000/clients.js')
        .then(response => {
          response.data
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("Error", error);
        });
    }
  }
}
</script>
