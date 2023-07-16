<template>
  <div id="LoginPage">
    <!-- navbar -->
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo-color.png" />
        </a>
      </div>
    </nav>
    <!-- navbar -->

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>Laundry dalam <br />satu kali klik!</h1>
          <p>Masuk untuk melakukan pemesanan</p>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                Datamu terjaga dan aman.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Ingat Saya</label>
                <a class="lupa-pw" href="https://wa.me/1234567890">Lupa Password?</a>
            </div>
            <router-link to="/LPlogged"><button class="btn btn-primary">Masuk</button></router-link>
          </form>

          <router-link to="/RegistPage">Belum punya akun? <b>Daftar</b></router-link>
        </div>

        <div class="col-lg-6">
          <img class="bg-login" src="../assets/bg-login.png" alt="">
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
  name: "LoginPage",
  components: {
    FooterComp
  }
};
</script>

<style>
#LoginPage .navbar-brand img {
  width: 120px;
}

#LoginPage h1 {
  font-weight: 600;
  padding-top: 100px;
}

#LoginPage form {
  margin-top: 30px;
  margin-bottom: 50px;
}

#LoginPage .bg-login {
  width: 100%;
  margin-top: 150px;
}

#LoginPage .lupa-pw {
  text-decoration: none;
  padding-left: 300px;
}
</style>
