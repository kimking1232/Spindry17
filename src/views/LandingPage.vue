<template>
  <div id="LandingPage">
    <header :style="background">
      <!-- Navbar -->
      <NavbarComp/>
      <!-- Navbar -->

      <!-- hero -->
      <HeroComp :hero="hero"/>
      <!-- hero -->
    </header>

    <!-- Mitra -->
    <MitraComp :partners="partners"/>
    <!-- Mitra -->

    <!-- Layanan -->
    <LayananComp :services="services"/>
    <!-- Layanan -->

    <!-- Promo -->
    <PromoComp :promotion="promotions"/>
    <!-- Promo -->

    <!-- Lokasi -->
    <LokasiComp/>
    <!-- Lokasi -->

    <!-- Footer -->
    <FooterComp/>
    <!-- footer -->
  </div>
</template>

<script>
// import components
import NavbarComp from "../components/NavbarComp.vue";
import HeroComp from "../components/HeroComp.vue";
import MitraComp from "../components/MitraComp.vue";
import LayananComp from "../components/LayananComp.vue";
import PromoComp from "../components/PromoComp.vue";
import LokasiComp from "../components/LokasiComp.vue";
import FooterComp from "../components/FooterComp.vue";
import axios from "axios";

export default {
  name: "LandingPage",
  components: {
    NavbarComp,
    HeroComp,
    MitraComp,
    LayananComp,
    PromoComp,
    LokasiComp,
    FooterComp,
  },
  data(){
    return {
      hero: {},
      partners: [],
      services: [],
      promotions: [],
    }
  },
  methods: {
    getHero() {
      axios.get("http://spindry17.test/api/hero")
        .then((response) => {
          this.hero = response.data.data
          // console.log(response.data.data);
        })
        .catch((error) => {
          alert(error);
          // console.log(error);
        });
    },
    getPartner() {
      axios.get("http://spindry17.test/api/partner")
        .then((response) => {
          this.partners = response.data.data
          // console.log(response.data.data);
        })
        .catch((error) => {
          alert(error);
          // console.log(error);
        });
    },
    getService() {
      axios.get("http://spindry17.test/api/service")
        .then((response) => {
          this.services = response.data.data
          // console.log(response.data.data);
        })
        .catch((error) => {
          alert(error);
          // console.log(error);
        });
    },
    getPromotion() {
      axios.get("http://spindry17.test/api/promotion")
        .then((response) => {
          this.promotions = response.data.data
          // console.log(response.data.data);
        })
        .catch((error) => {
          alert(error);
          // console.log(error);
        });
    }
  },
  computed: {
    background(){
      return {
        "background-image": "url('http://spindry17.test/img/heroes/" + this.hero.background + "')"
      }
    }
  },
  mounted(){
    this.getHero();
    this.getPartner();
    this.getService();
    this.getPromotion();
  }
};
</script>

<style>
#LandingPage header {
  background-size: cover;
  height: 550px;
}
</style>
