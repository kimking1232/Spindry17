<template>
    <div id="LokasiComp">
        <div class="container">
            <div class="row text-center">
                <div class="col">
                    <p style="color: #3A86E3;"><b>Lokasi</b></p>
                    <h1>Lokasi outlet kami <b>mudah ditemukan</b></h1>
                    <p><Icon icon="material-symbols:location-on-rounded" color="#3a86e3" />Jl. Rajawali, Komplek Rajawali Vilage, Kota Palembang</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4522808169504!2d104.76201793672274!3d-2.971917098248279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75fb21469d1f%3A0x941c3b4f42a53340!2sSynapse%20Academy%20Tempat%20Pelatihan%20IT%20Palembang%20Belajar%20Programming%20Berkualitas%20Sertifikasi%20Nasional!5e0!3m2!1sid!2sid!4v1678594429640!5m2!1sid!2sid" width="100%" height="450" style="border:0; border-radius: 15px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import iconify
import { Icon } from '@iconify/vue';

    export default {
        name: 'LokasiComp',
        components: {
            Icon
        }
    }
</script>

<style>
    #LokasiComp {
        margin-top: 120px;
    }
</style>