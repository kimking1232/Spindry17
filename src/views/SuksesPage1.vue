<template>
  <div id="SuksesPage1">
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
            Silahkan screenshot QR Code dibawah ini dan tunjukan ke kasir outlet
          </p>
          <br />
          <img class="qrcode" src="../assets/qrcode.png" alt="" />
          <br />
          <router-link to="/LPlogged"
            ><button class="btn btn-primary">
              Kembali ke Beranda
            </button></router-link
          >
        </div>

        <div class="col-lg-6">
          <img class="bg-1" src="../assets/bg-sukses1.png" alt="" />
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
  name: "SuksesPage1",
  components: {
    NavlogComp,
    FooterComp,
  },
};
</script>

<style>
#SuksesPage1 header {
  background-image: url(../assets/bg-hero.png);
  background-size: cover;
  height: auto;
}

#SuksesPage1 h1 {
  font-weight: 600;
  padding-top: 50px;
}

#SuksesPage1 .qrcode {
  width: 400px;
  margin-bottom: 20px;
}

#SuksesPage1 .bg-1 {
  width: 100%;
  margin-top: 150px;
}

/* mobile */
@media (max-width: 991.98px) {
  #SuksesPage1 header {
    background-image: url(../assets/bg-hero.png);
    background-size: cover;
    height: auto;
  }

  #SuksesPage1 h1 {
    font-weight: 600;
    padding-top: 50px;
  }

  #SuksesPage1 .qrcode {
    width: 100%;
    margin-bottom: 20px;
  }

  #SuksesPage1 .bg-1 {
    width: 100%;
    margin-top: 150px;
  }
}
</style>
