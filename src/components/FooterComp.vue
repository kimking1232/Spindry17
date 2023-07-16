<template>
    <div id="FooterComp">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h4>Platform Laundry Order & Delivery</h4>
                        <a href="https://wa.me/628123456789"><Icon icon="ri:whatsapp-fill" color="white" />628123456789</a>
                        <p>&copy; Spindry Indonesia, 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
//iconyfy
import { Icon } from '@iconify/vue';

    export default {
        name: 'FooterComp',
        components: {
            Icon
        }
    }
</script>

<style>
    #FooterComp {
        margin-top: 120px;
        background-color: #2D344D;
        color: white;
        height: auto;
    }

    #FooterComp footer {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    #FooterComp footer a {
        color: white;
        text-decoration: none;
    }

</style>