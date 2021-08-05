<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createpengalaman">Tambah</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nama Lengkap</th>
      <th scope="col">Tempat Tanggal Lahir</th>
      <th scope="col">Tentang Saya</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(pengalaman, index) in pengalaman" :key="index">
      <td>{{ pengalaman.id}}</td>
      <td>{{ pengalaman.nama_lengkap}}</td>
      <td>{{ pengalaman.ttl}}</td>
      <td>{{ pengalaman.tentang_saya}}</td>
      <td>
        <router-link class="btn btn-success" to="/editpengalaman">Edit</router-link>
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
    let pengalaman = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/pengalaman')
      .then(response => {
        pengalaman.value = response.data.data
    })
    .catch(error =>{
      console.log(error)
    })
    })
    return {
      pengalaman
    }
  }
};
</script>
