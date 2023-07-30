<template>
  <div id="OrderPage">
    <header>
      <!-- navbar -->
      <NavbarComp />
      <!-- navbar -->
    </header>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <!-- breadcrumb -->
          <nav
            style="
              --bs-breadcrumb-divider: url(
                &#34;data:image/svg + xml,
                %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='%236c757d'/%3E%3C/svg%3E&#34;
              );
            "
            aria-label="breadcrumb"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#"
                  ><Icon
                    icon="material-symbols:home-rounded"
                    color="#0d6efd"
                  /><b>Beranda</b></a
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <b>Pemesanan</b>
              </li>
            </ol>
          </nav>
          <!-- breadcrumb -->

          <!-- pemesanan -->
          <div class="isi-pemesanan">
            <h3><b>Detail Pemesanan</b></h3>
            <h5><b>Pilih Layanan</b></h5>
          </div>
          <!-- pemesanan -->

          <div class="isi-pemesanan">
            <h3><b>Detail Pemesanan</b></h3>
            <h5><b>Pilih Layanan</b></h5>
          </div>
          <div class="row mb-4">
            <div class="col-lg-12">
              <select class="form-select" v-model="order.service_id">
                <template v-for="service in services" :key="service.id">
                  <option :value="service.id">{{ service.title }}</option>
                </template>
              </select>
            </div>
          </div>

          <h6>
            <b>Detail Layanan :</b> Disediakan Fasilitas, Sabun cuci, Dry
            Cleaning, Setrika & Packing
          </h6>

          <!-- form pribadi -->
          <form v-on:submit.prevent="postOrder">
            <div class="row mb-3">
              <div class="col-lg-6">
                <br />
                <label for=""><b>Berat Pakaian</b></label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Berat kering pakaian"
                  min="1"
                  max="20"
                  v-model="order.weight"
                />
              </div>
              <div class="col-lg-6">
                <br />
                <label for=""><b>Tanggal Pencucian</b></label>
                <input
                  type="datetime-local"
                  class="form-control"
                  placeholder="Tanggal Pencucian"
                  v-model="order.date"
                />
              </div>
            </div>
            <div class="row mb-5">
              <div class="col-lg-12">
                <label for=""><b>Pilih Promo</b></label>
                <select class="form-select" v-model="order.promo_id">
                  <template v-for="promo in promotions" :key="promo.id">
                    <option :value="promo.id">{{ promo.title }}</option>
                  </template>
                </select>
              </div>
            </div>

            <div class="alert alert-warning" role="alert">
              *Informasi total Biaya dan pembayaran akan dilakukan di outlet
              setelah melakukan penimbangan
            </div>

            <button class="btn btn-primary">Pesan Sekarang ></button>
            
          </form>
          <!-- end form pribadi -->

          <!-- form standar -->
          <!-- <h6>
            <b>Detail Layanan :</b> Kami bantu cuci, Dry Cleaning, Setrika &
            Packing
          </h6>

          <form>
            <div class="row mb-5">
              <div class="col-lg-6">
                <br />
                <label for=""><b>Jenis Pakaian</b></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="cth. kemeja, jeans, dll."
                  aria-label="jenis pakaian"
                />
              </div>
              <div class="col-lg-6">
                <br />
                <label for=""><b>Tanggal Pencucian</b></label>
                <input
                  type="datetime-local"
                  class="form-control"
                  placeholder="Tanggal Pencucian"
                  aria-label="tanggal pencucian"
                />
              </div>
            </div>

            <div class="alert alert-warning" role="alert">
              *Informasi total Biaya dan pembayaran akan dilakukan di outlet
              setelah melakukan penimbangan
            </div>

            <router-link to="/SuksesPage1"
              ><button class="btn btn-primary">
                Pesan Sekarang >
              </button></router-link
            >
          </form> -->

          <!-- premium -->
          <!-- <h6>
            <b>Detail Layanan :</b> Jemput & Antar, Kami bantu cuci, Dry
            Cleaning, Setrika & Packing
          </h6>

          <form>
            <div class="row mb-5">
              <div class="col-lg-6">
                <br />
                <label for=""><b>Jenis Pakaian</b></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="cth. kemeja, jeans, dll."
                  aria-label="jenis pakaian"
                />
              </div>
              <div class="col-lg-6">
                <br />
                <label for=""><b>Tanggal Pencucian</b></label>
                <input
                  type="datetime-local"
                  class="form-control"
                  placeholder="Tanggal Pencucian"
                  aria-label="tanggal pencucian"
                />
              </div>
            </div>

            <div class="alert alert-warning mt-3" role="alert">
              *Informasi total Biaya dan pembayaran akan dilakukan di outlet
              setelah melakukan penimbangan
            </div>

            <button class="btn btn-primary">Pesan Sekarang ></button>
          </form> -->
          
          <!-- pilih layanan -->
        </div>
      </div>
    </div>

    <!-- footer -->
    <FooterComp />
    <!-- footer -->
  </div>
</template>

<script>
//import components
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";

//iconify
import { Icon } from "@iconify/vue";
import axios from "axios";

export default {
  name: "OrderPage",
  components: {
    NavbarComp,
    Icon,
    FooterComp,
  },
  data() {
    return {
      'token': localStorage.getItem("token"),
      'statusLogin': localStorage.getItem("statusLogin"),
      'username': localStorage.getItem("username"),
      'order': {},
      'promotions': [],
      'services': [],
      'headers': {
        headers: {'authorization': 'Bearer ' + localStorage.getItem("token")}
      }
    };
  },

  methods: {
    getService() {
      axios
        .get("http://spindry17.test/api/service")
        .then((response) => {
          this.services = response.data.data;
          // console.log(response.data.data);
        })
        .catch((error) => {
          alert(error);
          // console.log(error);
        });
    },
    getPromotion() {
      axios
        .get("http://spindry17.test/api/promotion")
        .then((response) => {
          // console.log(response.data.data);
          this.promotions = response.data.data;
        })
        .catch((error) => {
          alert(error);
          // console.log(error);
        });
    },
    postOrder() {
      axios
      .post("http://spindry17.test/api/order", this.order, this.headers )
      .then((response) => {
        if(response.data.status == "error") {
          for(var pesan in response.data.message)
          {
            // console.log(response.data.status[pesan][0]);
            this.$toast.error(response.data.message[pesan][0], {
              position: 'top-right',
              duration: 2000
            });
          }
        } else {
          // console.log(response.data.data.token)
          this.$toast.success(response.data.message, {
            position: 'top-right',
            duration: 2000
          });
          return this.$router.push('/sukses')
        }
      })
    },
  },

  mounted() {
    // console.log(this.statusLogin)
    if (this.statusLogin) {
      this.$router.push("/OrderPage");
    } else {
      this.$router.push("/LoginPage");
    }
    this.getPromotion();
    this.getService();
  },
};
</script>

<style>
#OrderPage header {
  background-image: url(../assets/bg-hero.png);
  background-size: cover;
  height: auto;
}

#OrderPage .breadcrumb {
  margin-left: -30px;
}

#OrderPage .isi-pemesanan h5 {
  padding-top: 30px;
  padding-bottom: 10px;
}
</style>
