<template>
  <div id="MitraComp">
    <div class="container">
      <div class="row">
        <div class="col">
          <p>
            Spindry telah <b>dipercaya lebih 100+</b> partner di kota palembang
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2" v-for="partner in partners" :key="partner.id">
          <img :src="'http://spindry17.test/img/partners/' + partner.logo" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MitraComp",
  props: ["partners"]
};
</script>

<style>
#MitraComp {
  margin-top: 100px;
  text-align: center;
}
#MitraComp img {
  width: 100%;
  margin-top: 20px;
}

/* mobile */
@media (max-width: 991.98px) {
  #MitraComp {
    margin-top: 100px;
    text-align: center;
  }
  #MitraComp img {
    width: 150px;
    margin-top: 20px;
  }
}
</style>
