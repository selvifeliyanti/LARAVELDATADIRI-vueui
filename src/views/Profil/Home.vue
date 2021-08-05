<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createtentang">Tambah</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nama Admin</th>
      <th scope="col">Alamat</th>
      <th scope="col">ID Matakuliah</th>
      <th scope="col">No Tlp</th>
      <th scope="col">Email</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(tentang, index) in friends" :key="index">
      <td>{{ tentang.id}}</td>
      <td>{{ tentang.nama_admin}}</td>
      <td>{{ tentang.alamat}}</td>
      <td>{{ tentang.no_tlp}}</td>
      <td>{{ tentang.email}}</td>
      <td>
        <router-link class="btn btn-success" to="/editfriend">Edit</router-link>
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
    let profil = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/profil')
      .then(response => {
        profil.value = response.data.data
    })
    .catch(error =>{
      console.log(error)
    })
    })
    return {
      profil
    }
  }
};
</script>
