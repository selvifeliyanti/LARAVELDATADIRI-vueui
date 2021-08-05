<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Create Tentang</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">ID</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            v-model="nama_admin.id"
          />
          <div class="alert alert-dager" v-if="validation.id">
            {{ validation.id[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama Admin</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="tentang.nama_admin"
          />
          <div class="alert alert-dager" v-if="validation.nama_admin">
            {{ validation.nama_admin[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Alamat</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="tentang.alamat"
          />
          <div class="alert alert-dager" v-if="validation.alamat">
            {{ validation.alamat[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nomor Tlp</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="tentang.no_tlp"
          />
          <div class="alert alert-dager" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan Email"
            v-model="tentang.email"
          />
          <div class="alert alert-dager" v-if="validation.email">
            {{ validation.email[0] }}
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Tambah</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const tentang = reactive({
      id: "",
      nama_admin: "",
      alamat: "",
      no_tlp: "",
      email: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = tentang.id;
      let nama_admin = tentang.nama_admin;
      let alamat = tentang.alamat;
      let no_tlp = tentang.no_tlp;
      let email = tentang.email;

      axios
        .post("http://127.0.0.1:8000/api/tentang", {
          id: id,
          nama_admin: nama_admin,
          alamat: alamat,
          no_tlp: no_tlp,
          tentang: tentang,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      tentang,
      validation,
      router,
      store,
    };
  },
};
</script>
