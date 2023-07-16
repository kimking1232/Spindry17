<template>
  <div id="HeroComp">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- <h1>
            Sekarang Nyuci <br />
            nggak bikin Lelah!
          </h1> -->
          <h1>
            {{ hero.title }}
          </h1>
          <!-- <p>Cuci pakaianmu dengan mudah dan hemat waktu di laundry kami!</p> -->
          {{ hero.subtitle }}
          <router-link to="/OrderPage"
            ><button class="btn btn-outline-light">
              Pesan Sekarang
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComp",
  props:["hero"]
};
</script>

<style>
#HeroComp {
  text-align: center;
  color: white;
}

#HeroComp h1 {
  font-weight: 600;
  padding-top: 50px;
  font-size: 60px;
}

/* mobile */
@media (max-width: 991.98px) {
  #HeroComp {
    text-align: center;
    color: white;
  }

  #HeroComp h1 {
    font-weight: 600;
    padding-top: 50px;
    font-size: 40px;
  }
}
</style>
