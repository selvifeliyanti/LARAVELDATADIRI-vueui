<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createhistory">Tambah</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Asal Sd</th>
      <th scope="col">Asal Smp</th>
      <th scope="col">Asal Smk</th>
      <th scope="col">Asal Univ</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(history, index) in history" :key="index">
      <td>{{ history.id}}</td>
      <td>{{ history.asal_sd}}</td>
      <td>{{ history.asal_smp}}</td>
      <td>{{ history.asal_smk}}</td>
      <td>{{ history.asal_univ}}</td>
      <td>
        <router-link class="btn btn-success" to="/edithistory">Edit</router-link>
        <button class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Slider
  },
  setup(){
    let history = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/history')
      .then(response => {
        history.value = response.data.data
    })
    .catch(error =>{
      console.log(error)
    })
    })
    return {
      history
    }
  }
};
</script>
