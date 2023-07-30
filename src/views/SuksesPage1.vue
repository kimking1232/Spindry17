<template>
  <div id="SuksesPage1">
    <header>
      <!-- navbar -->
      <NavbarComp />
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
            Silahkan screenshot QR Code dibawah ini dan tunjukan ke kasir outlet 5 menit sebelum <b><strong>{{ order.date }}</strong></b>
          </p>
          <br />
          <!-- <img class="qrcode" src="../assets/qrcode.png" alt="" /> -->
          <qrcode-vue class="qrcode" :value="order.number" :size="size" level="H"
          />
          <br />
          <button class="btn btn-primary">Kembali ke Beranda</button>
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
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";
import QrcodeVue from "qrcode.vue";
import axios from "axios";

export default {
  name: "SuksesPage1",
  components: {
    NavbarComp,
    FooterComp,
    QrcodeVue,
  },
  data() {
    return {
      'statusLogin': localStorage.getItem("statusLogin"),
      'token': localStorage.getItem("token"),
      'order': {},
      'size': 300,
      'headers': {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      },
    };
  },
  methods: {
    getOrder() {
      axios
        .get("http://spindry17.test/api/order", this.headers)
        .then((response) => {
          this.order = response.data.data;
          console.log(this.order);
        });
    },
  },
  mounted() {
    if (!this.statusLogin) {
      return this.$router.push("/");
    }
    this.getOrder();
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
