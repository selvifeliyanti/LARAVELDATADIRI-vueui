<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Create History</h5>
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
          <label for="inputPassword4" class="form-label">Asal Sd</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="history.asal_sd"
          />
          <div class="alert alert-dager" v-if="validation.asal_sd">
            {{ validation.asal_sd[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Asal Smp</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            v-model="history.asal_smp"
          />
          <div class="alert alert-dager" v-if="validation.asal_smp">
            {{ validation.asal_smp[0] }}
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Asal Smk</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="history.asal_smk"
          />
          <div class="alert alert-dager" v-if="validation.asal_smk">
            {{ validation.asal_smk[0] }}
          </div>
        </div>

        <div class="col-12">
          <label for="inputAddress" class="form-label">Asal Universitas</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan disini..."
            v-model="history.asal_univ"
          />
          <div class="alert alert-dager" v-if="validation.history">
            {{ validation.history[0] }}
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
    const history = reactive({
      asal_sd: "",
      asal_smp: "",
      asal_smk: "",
      asal_univ: "",
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let id = history.id;
      let asal_sd = history.asal_sd;
      let asal_smp = history.asal_smp;
      let asal_smk = history.asal_smk;
      let asal_univ = history.asal_univ;

      axios
        .post("http://127.0.0.1:8000/api/history", {
          id: id,
          asal_sd: asal_sd,
          asal_smp: asal_smp,
          asal_smk: asal_smk,
          asal_univ: asal_univ,

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
      history,
      validation,
      router,
      store,
    };
  },
};
</script>
