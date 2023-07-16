<template>
  <div id="NavlogComp">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="" width="120px"></a>
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
            <h5><b>Hi, Jhon!</b></h5>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/ic-profil.png" alt="" width="30px">
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavlogComp",
};
</script>

<style>
#NavlogComp .navbar-nav {
    margin-left: auto;
}

#NavlogComp .navbar-nav h5 {
    color: white;
}

#NavlogComp .dropdown button {
    background: none;
    border: none;
}
</style>
