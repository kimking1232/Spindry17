<template>
  <div id="NavbarComp">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo.png" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="profil" v-show="this.statusLogin">
            <h5><b>Hi, {{this.username}}!</b></h5>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img class="prof" src="../assets/ic-profil.png" alt="" >
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item" @click="logout">Log Out</button></li>
              </ul>
            </div>
          </div>

          <div class="navbar-nav" v-show="!this.statusLogin">
            <router-link to="/RegistPage"
              ><button class="btn btn-warning">Daftar</button></router-link
            >
            <router-link to="/LoginPage"
              ><button class="btn btn-outline-dark">Masuk</button></router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "NavbarComp",
  data() {
    return{
      statusLogin: localStorage.getItem('statusLogin'),
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
    }
  },
  methods:{
    logout()
    { 
      // console.log(this.token);
      axios.get('http://spindry17.test/api/logout', {headers: {'authorization': 'Bearer ' + this.token}})
      .then((response) => {
        localStorage.removeItem("statusLogin")
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        this.$toast.success(response.data.message, {
              position: 'top-right',
              duration: 2000
            });
            this.statusLogin = false;
            return this.$router.push('/')
      })
      .catch(() => {
        this.$toast.error('Maaf terjadi kesalahan', {
              position: 'top-right',
              duration: 2000
            });
      })
    }
  },
  // mounted(){
    // console.log(this.statusLogin);
    // localStorage.removeItem('user')
    // localStorage.removeItem('statusLogin')
  // }
};
</script>

<style>
#NavbarComp .navbar-nav {
  margin-left: auto;
}

.prof {
  width: 30px;
}
#NavbarComp .navbar-brand img {
  width: 120px;
}

#NavbarComp .navbar-nav .btn {
  width: 120px;
  margin-right: 20px;
}

#NavbarComp .profil {
    margin-left: auto;
}

#NavbarComp h5 {
    color: black;
}

#NavbarComp .dropdown button {
    background: none;
    border-color: none;
    color: black;
}

#NavbarComp .dropdown{
    display: inline;
}

/* mobile */
@media (max-width: 991.98px) {
  #NavbarComp .navbar-nav {
    margin-left: auto;
  }

  #NavbarComp .navbar-brand img {
    width: 120px;
  }

  #NavbarComp .navbar-nav .btn {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
