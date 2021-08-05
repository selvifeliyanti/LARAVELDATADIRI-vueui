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
          <label for="inputPassword4" class="form-label">Email</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="hubungi.email"
          />
          <div class="alert alert-dager" v-if="validation.email">
            {{ validation.email[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Nomor Telp</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="hubungi.no_tlp"
          />
          <div class="alert alert-dager" v-if="validation.no_tlp">
            {{ validation.no_tlp[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Instagram</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="hubungi.ig"
          />
          <div class="alert alert-dager" v-if="validation.ig">
            {{ validation.ig[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Facebook</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan disini..."
            v-model="hubungi.fb"
          />
          <div class="alert alert-dager" v-if="validation.fb">
            {{ validation.fb[0] }}
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
    const hubungi = reactive({
      id: "",
      no_tlp: "",
      email: "",
      ig: "",
      fb: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = hubungi.id;
      let no_tlp = hubungi.no_tlp;
      let email = hubungi.email;
      let ig = hubungi.ig;
      let fb = hubungi.fb;

      axios
        .post("http://127.0.0.1:8000/api/hubungi", {
          id: id,
          no_tlp: no_tlp,
          email: email,
          ig: ig,
          fb: fb,

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
      hubungi,
      validation,
      router,
      store,
    };
  },
};
</script>
