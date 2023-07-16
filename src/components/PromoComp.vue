<template>
  <div id="PromoComp">
    <div class="container">
      <div class="row">
        <div class="col">
          <p style="color: #3a86e3"><b>Promo</b></p>
          <h1>
            Semakin <b>sering nyuci</b> <br />semakin <b>banyak PROMO!</b>
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="promo in promotion" :key="promo.id">
          <!-- {{ promo.picture }} -->
          <img :src="'http://spindry17.test/img/promotions/' + promo.picture" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoComp",
  props: ["promotion"],
};
</script>

<style>
#PromoComp {
    margin-top: 120px;
}

#PromoComp img {
  margin-top: 50px;
  width: 100%;
}
</style>
