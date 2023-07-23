<template>
  <div id="RegistPage">
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo-color.png" alt="" />
        </a>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>
            Ketika nyuci nggak <br />
            bikin capek.
          </h1>
          <p>Buat akun untuk melakukan pemesanan</p>

          <form v-on:submit.prevent="postRegister">
            <div class="row mt-5">
              <div class="col-lg-6">
                <label for=""><b>Nama Lengkap</b></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Masukkan Nama Lengkap"
                  aria-label="Username"
                  v-model="register.name"
                />
              </div>
              <div class="col-lg-6">
                <label for=""><b>Nomer Telepon/WA</b></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Masukan Nomer Telepon"
                  aria-label="Nomer Telepon"
                  v-model="register.telephone"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <br />
                <label for=""><b>Email</b></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Masukkan Email"
                  aria-label="Email"
                  v-model="register.email"
                />
              </div>
              <div class="col-lg-6">
                <br />
                <label for=""><b>Password</b></label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Masukan Password"
                  aria-label="password"
                  v-model="register.password"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <br />
                <label for=""><b>Alamat</b></label>
                <textarea
                  class="form-control"
                  placeholder="Masukan Alamat"
                  aria-label="Alamat"
                  v-model="register.address"
                >
                </textarea>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-lg-6">
                <button class="btn btn-primary">Daftar</button>
                <br />
                <router-link to="/LoginPage"
                  >Sudah punya akun? <b>Masuk</b></router-link
                >
              </div>
            </div>
          </form>
        </div>

        <div class="col-lg-6">
          <img class="bg-register" src="../assets/bg-register.png" alt="" />
        </div>
      </div>
    </div>

    <!-- footer -->
    <FooterComp />
    <!-- footer -->
  </div>
</template>

<script>
// import components
import FooterComp from "../components/FooterComp.vue";
import axios from "axios";
// import { required, email } from '@vuelidate/validators';

export default {
  name: "RegistPage",
  components: {
    FooterComp,
  },
  data() {
    return {
      register: {
        'name': '',
        'telephone': '',
        'email': '', 
        'password': '',
        'address': '',
      },
    };
  },
  // validation(){
  //   return{
  //     register: {
  //       'name': {required},
  //       'telephone': {required},
  //       'email': {required, email}, 
  //       'password': {required},
  //       'address': {required},
  //     },
  //   }
  // },
  methods: {
    postRegister()
    {
      axios.post('http://spindry17.test/api/register', this.register)
      .then((response) => {
        // console.log(response.data)
        if(response.data.status == 'error') {
          for (var pesan in response.data.message)
          {
            this.$toast.error(response.data.message[pesan][0], {
              position: 'top-right',
              duration: 2000
            });
          }
        } else {
          this.$toast.success(response.data.message, {
              position: 'top-right',
              duration: 2000
            });
        }
      })
      .catch((error) => {
        console.log(error)
      });
    }
  }
};
</script>

<style>
#RegistPage .navbar-brand img {
  width: 120px;
}

#RegistPage h1 {
  padding-top: 100px;
  font-weight: 600;
}

#RegistPage button {
  margin-top: 30px;
  margin-bottom: 50px;
}

#RegistPage .bg-register {
  width: 100%;
  margin-top: 150px;
}
</style>
