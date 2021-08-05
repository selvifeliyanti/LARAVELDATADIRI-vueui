<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Create Pengalaman</h5>
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
            v-model="pengalaman.nama_admin"
          />
          <div class="alert alert-dager" v-if="validation.nama_admin">
            {{ validation.nama_admin[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nama Lengkap</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="pengalaman.nama_lengkap"
          />
          <div class="alert alert-dager" v-if="validation.nama_lengkap">
            {{ validation.nama_lengkap[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Tempat Tanggal Lahir</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="pengalaman.ttl"
          />
          <div class="alert alert-dager" v-if="validation.ttl">
            {{ validation.ttl[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Tentang Saya</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan disini..."
            v-model="pengalaman.tentang_saya"
          />
          <div class="alert alert-dager" v-if="validation.tentang_saya">
            {{ validation.tentang_saya[0] }}
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
    const pengalaman = reactive({
      id: "",
      nama_lengkap: "",
      ttl: "",
      tentang_saya: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = pengalaman.id;
      let nama_lengkap = pengalaman.nama_lengkap;
      let ttl = pengalaman.ttl;
      let tentang_saya = pengalaman.tentang_saya;

      axios
        .post("http://127.0.0.1:8000/api/pengalaman", {
          id: id,
          nama_lengkap: nama_lengkap,
          ttl: ttl,
          tentang_saya: tentang_saya,

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
      pengalaman,
      validation,
      router,
      store,
    };
  },
};
</script>
