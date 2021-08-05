<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createhubungi">Tambah</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nomor Telp</th>
      <th scope="col">Email</th>
      <th scope="col">Ig</th>
      <th scope="col">Fb</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(hubungi, index) in hubungi" :key="index">
      <td>{{ hubungi.id}}</td>
      <td>{{ hubungi.no_tlp}}</td>
      <td>{{ hubungi.email}}</td>
      <td>{{ hubungi.ig}}</td>
      <td>{{ hubungi.fb}}</td>
      <td>
        <router-link class="btn btn-success" to="/edithubungi">Edit</router-link>
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
    let hubungi = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/hubungi')
      .then(response => {
        hubungi.value = response.data.data
    })
    .catch(error =>{
      console.log(error)
    })
    })
    return {
      hubungi
    }
  }
};
</script>
