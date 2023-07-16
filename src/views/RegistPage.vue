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

          <form>
                      <div class="row mt-5">
                        <div class="col-lg-6">
                          <label for=""><b>Username</b></label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Masukkan Username"
                            aria-label="Username"
                            v-model="register.userName"
                          />
                        </div>
                        <div class="col-lg-6">
                          <label for=""><b>Nomer Telepon/WA</b></label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Masukan Nomer Telepon"
                            aria-label="Nomer Telepon"
                            v-model="register.noWA"
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
                            aria-label="Alamat">
                          </textarea>
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-lg-6">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                          <label class="form-check-label" for="exampleCheck1"
                            >Ingat Saya</label
                          >
                          <br />
                          <router-link to="/LPlogged"
                            ><button class="btn btn-primary">Daftar</button></router-link>
                          
                            <br>
            
                          <router-link to="/LoginPage">Sudah punya akun? <b>Masuk</b></router-link>
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
    <FooterComp/>
    <!-- footer -->
  </div>
</template>

<script>
// import components
import FooterComp from '../components/FooterComp.vue'

export default {
  name: "RegistPage",
  components: {
    FooterComp,
  },
  data() {
    return {
      register:[],
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
