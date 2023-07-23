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

          <!-- pilih layanan -->
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-pribadi-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-pribadi"
                type="button"
                role="tab"
                aria-controls="pills-pribadi"
                aria-selected="true"
              >
                Pribadi
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-standar-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-standar"
                type="button"
                role="tab"
                aria-controls="pills-standar"
                aria-selected="false"
              >
                Standar
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-premium-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-premium"
                type="button"
                role="tab"
                aria-controls="pills-premium"
                aria-selected="false"
              >
                Premium
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-pribadi"
              role="tabpanel"
              aria-labelledby="pills-pribadi-tab"
              tabindex="0"
            >
              <h6>
                <b>Detail Layanan :</b> Disediakan Fasilitas, Sabun cuci, Dry
                Cleaning, Setrika & Packing
              </h6>

              <!-- form pribadi -->
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
              </form>
            </div>
            <!-- form standar -->
            <div
              class="tab-pane fade"
              id="pills-standar"
              role="tabpanel"
              aria-labelledby="pills-standar-tab"
              tabindex="0"
            >
              <h6>
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
              </form>
            </div>

            <!-- premium -->
            <div
              class="tab-pane fade mt-2"
              id="pills-premium"
              role="tabpanel"
              aria-labelledby="pills-premium-tab"
              tabindex="0"
            >
              <h6>
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

                <router-link to="/SuksesPage2"
                  ><button class="btn btn-primary">
                    Pesan Sekarang >
                  </button></router-link
                >
              </form>
            </div>
          </div>
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

export default {
  name: "OrderPage",
  components: {
    NavbarComp,
    Icon,
    FooterComp,
  },
  data() {
    return {
      order: {},
      token: localStorage.getItem("token"),
      statusLogin: localStorage.getItem("statusLogin"),
      username: localStorage.getItem("username"),
    };
  },
  mounted() {
    // console.log(this.statusLogin)
    if (this.statusLogin) {
      this.$router.push("/OrderPage");
    } else {
      this.$router.push("/LoginPage");
    }
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
