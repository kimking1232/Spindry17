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
          <form v-on:submit.prevent="postLogin">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                v-model="login.email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="login.password"
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
            <button class="btn btn-primary" type="submit">Masuk</button>
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
import FooterComp from '../components/FooterComp.vue';
import axios from 'axios';

export default {
  name: "LoginPage",
  components: {
    FooterComp
  }, 
  data() {
    return{
      login: {},
      token: localStorage.getItem('token'),
      statusLogin: localStorage.getItem('statusLogin'),
      username: localStorage.getItem('username')
    }
  },
  methods: {
    postLogin()
    {
      // console.log(this.login)
      axios.post('http://spindry17.test/api/login', this.login)
      .then((response) => {
        // console.log(response.data.message);
        if(response.data.status == "error") {
          for(var pesan in response.data.message)
          {
            // console.log(response.data.status[pesan][0]);
            this.$toast.error(response.data.message[pesan][0], {
              position: 'top-right',
              duration: 2000
            });
          }
        } else {
          // console.log(response.data.data.token)
          localStorage.setItem('statusLogin', true);
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('username', response.data.data.name);
          this.$toast.success(response.data.message, {
            position: 'top-right',
            duration: 2000
          });
          this.$router.push('/')
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  mounted() {
    // console.log(this.statusLogin)
    localStorage.removeItem('token')
    localStorage.removeItem('statusLogin')
    localStorage.removeItem('username')
    if(this.statusLogin) {
      this.$router.push('/')
    } else {
      this.$router.push('/LoginPage')
    }
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
