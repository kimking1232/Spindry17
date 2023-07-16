<template>
  <div id="SuksesPage2">
    <header>
      <!-- navbar -->
      <NavlogComp />
      <!-- navbar -->
    </header>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>
            Pesananmu <br />
            Terkonfirmasi
          </h1>
          <p>
            Pesananmu sudah kami terima, silahkan menunggu petugas menjemput
            pakaianmu
          </p>
          <router-link to="/LPlogged"
            ><button class="btn btn-primary">
              Kembali ke Beranda
            </button></router-link
          >
        </div>

        <div class="col-lg-6">
          <img class="bg-2" src="../assets/bg-sukses2.png" alt="" />
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
import NavlogComp from "../components/NavlogComp.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: "SuksesPage2",
  components: {
    NavlogComp,
    FooterComp,
  },
};
</script>

<style>
#SuksesPage2 header {
  background-image: url(../assets/bg-hero.png);
  background-size: cover;
  height: auto;
}

#SuksesPage2 h1 {
  font-weight: 600;
  padding-top: 250px;
}

#SuksesPage2 p {
  padding-top: 10px;
  padding-bottom: 10px;
}

#SuksesPage2 .bg-2 {
  width: 100%;
  margin-top: 150px;
}

/* mobile */
@media (max-width: 991.98px) {
  #SuksesPage2 header {
    background-image: url(../assets/bg-hero.png);
    background-size: cover;
    height: auto;
  }

  #SuksesPage2 h1 {
    font-weight: 600;
    padding-top: 50px;
  }

  #SuksesPage2 p {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  #SuksesPage2 .bg-2 {
    width: 100%;
    margin-top: 150px;
  }
}
</style>
