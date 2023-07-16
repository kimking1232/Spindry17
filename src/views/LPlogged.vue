<template>
    <div id="LPlogged">
      <header>
        <!-- Navbar -->
        <NavlogComp />
        <!-- Navbar -->
  
        <!-- hero -->
        <HeroComp />
        <!-- hero -->
      </header>
  
      <!-- Mitra -->
      <MitraComp />
      <!-- Mitra -->
  
      <!-- Layanan -->
      <LayananComp/>
      <!-- Layanan -->
  
      <!-- Promo -->
      <PromoComp/>
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
  import NavlogComp from "../components/NavlogComp.vue";
  import HeroComp from "../components/HeroComp.vue";
  import MitraComp from "../components/MitraComp.vue";
  import LayananComp from "../components/LayananComp.vue";
  import PromoComp from "../components/PromoComp.vue";
  import LokasiComp from "../components/LokasiComp.vue";
  import FooterComp from "../components/FooterComp.vue";
  
  export default {
    name: "LPlogged",
    components: {
      NavlogComp,
      HeroComp,
      MitraComp,
      LayananComp,
      PromoComp,
      LokasiComp,
      FooterComp,
    },
  };
  </script>
  
  <style>
  #LPlogged header {
    background-image: url(../assets/bg-hero.png);
    background-size: cover;
    height: 550px;
  }
  </style>
  