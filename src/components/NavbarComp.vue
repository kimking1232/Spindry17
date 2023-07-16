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
          <div class="navbar-nav">
            <router-link to="/RegistPage"
              ><button class="btn btn-warning">Daftar</button></router-link
            >
            <router-link to="/LoginPage"
              ><button class="btn btn-outline-light">Masuk</button></router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style>
#NavbarComp .navbar-nav {
  margin-left: auto;
}

#NavbarComp .navbar-brand img {
  width: 120px;
}

#NavbarComp .navbar-nav .btn {
  width: 120px;
  margin-right: 20px;
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
