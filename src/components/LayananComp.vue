<template>
  <div id="LayananComp">
    <div class="container">
      <div class="row">
        <div class="col">
          <p style="color: #3A86E3;"><b>Layanan</b></p>
          <h1>Layanan <b>hebat</b> dengan <br />biaya yang <b>terjangkau!</b></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="service in services" :key="service.id">
          <div class="card" style="width: 100%">
            <div class="card-body">
                <img :src="'http://spindry17.test/img/services/' + service.logo" alt="">
              <h6 class="card-title"><b>{{ service.title }}</b></h6>
              <h3 class="card-subtitle mb-2">Rp {{ service.price }}k/KG</h3>
                <div v-html="service.description"></div>
                <router-link to="/OrderPage"><button class="btn btn-primary">Pesan Sekarang ></button></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayananComp",
  props: ['services'],
};
</script>

<style>
#LayananComp {
    margin-top: 120px;
}

#LayananComp .card {
    margin-top: 30px;
    border-color: #3A86E3;
    border-radius: 15px;
}

#LayananComp .card img {
    width: 50px;
    margin-bottom: 10px;
}

#LayananComp .card .card-subtitle {
    color: #3A86E3;
    padding-bottom: 10px;
}

#LayananComp .card .card-body {
    margin: 15px;
}
</style>