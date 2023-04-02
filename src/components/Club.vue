<template>
    <!-- Header -->
    <div class="seccion border border-bottom-0 rounded-top">
        <img class="iconoseccion" src="@/assets/imgs/iconopelota.png" alt="IconoEquipo">
        EL EQUIPO
    </div>

    <!-- Body -->
    <div id="contenedorEquipo">
        <h1 class="tituloSpoti">¡El Rayo tiene playlist de Spotify!</h1>
        <iframe style="border-radius:12px; max-width: 500px;" src="https://open.spotify.com/embed/playlist/1eIps5I5hYBc5UgGkrhzGV?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    <!-- <StickyFooter/> -->
</template>

<script>
    import StickyFooter from './StickyFooter.vue';

    export default {
        components: { StickyFooter }
    }
</script>

<style>

    .iconoseccion {
        width: 22px;
        height: auto;
        margin: -4px 7px 0 8px;
    }

    .seccion {
        margin-top: 16px;
        color: #202020;
        font-size: 18px;
        font-family: "Aller";
        text-align: left;
        padding: 18px 0 12px 5vw;
        background-color: #ffffff;
        width: 50vw;
        transform: scale(1.05);
        -webkit-transform: scale(1.05);
    }

    #contenedorEquipo {
        background-color: #ffffff;
        border-radius: 20px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-color: #dee2e6;
        border-width: 1px;
        border-style: solid;
    }

    .tituloSpoti {
        font-family: "CircularBlack";
    }

    @media only screen and (min-width: 1439px) {
        #contenedorEquipo {
            margin-left: 6vw;
            margin-right: 6vw;
            border-top-right-radius: 20px;
        }

        .seccion {
            display: none;
        }
    }

    @media only screen and (max-width: 1439px) {
        #contenedorEquipo {
            margin-left: 5vw;
            margin-right: 5vw;
            border-top-right-radius: 20px;
        }

        .seccion {
            display: none;
        }
    }

    @media only screen and (max-width: 1023px) {
        #contenedorEquipo {
            margin: 0px;
        }
    }

    @media only screen and (max-width: 767px) {

        .seccion {
            display: block;
        }

        #contenedorEquipo {
            border-top: #dee2e6;
            border-top-width: 1px;
            border-top-style: solid;
        }
    }

    @media only screen and (max-width: 425px) {
        .seccion {
            font-size: 16px;
        }
    }

    @media only screen and (max-width: 320px) {
        
        .seccion {
            width: 60vw;
        }
    }

</style>