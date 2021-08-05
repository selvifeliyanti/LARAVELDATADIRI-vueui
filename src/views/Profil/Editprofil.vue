<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Create Profil</h5>
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
          <label for="inputPassword4" class="form-label">Hobby</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="profil.hobby"
          />
          <div class="alert alert-dager" v-if="validation.hobby">
            {{ validation.hobby[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Cita-cita</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="profil.cita_cita"
          />
          <div class="alert alert-dager" v-if="validation.cita_cita">
            {{ validation.cita_cita[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Visi Misi</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="profil.visi_misi"
          />
          <div class="alert alert-dager" v-if="validation.visi_misi">
            {{ validation.visi_misi[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Keterangan</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Silahkan isi disini..."
            v-model="profil.keterangan"
          />
          <div class="alert alert-dager" v-if="validation.keterangan">
            {{ validation.keterangan[0] }}
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
    const profil = reactive({
      id: "",
      hobby: "",
      cita_cita: "",
      visi_misi: "",
      keterangan: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = profil.id;
      let hobby = profil.hobby;
      let cita_cita = profil.cita_cita;
      let visi_misi = profil.visi_misi;
      let keterangan = profil.keterangan;

      axios
        .post("http://127.0.0.1:8000/api/profil", {
          id: id,
          hobby: hobby,
          cita_cita: cita_cita,
          visi_misi: visi_misi,
          keterangan: keterangan,
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
      profil,
      validation,
      router,
      store,
    };
  },
};
</script>
