<template>
    <!-- Header -->
    <div class="seccion border border-bottom-0 rounded-top">
        <img class="iconoseccion" src="@/assets/imgs/iconocamiseta.png" alt="IconoPlantilla">
        LA PLANTILLA
    </div>

    <!-- Body -->
    <div id="contenedorPlantilla">
      <h1 id="tituloPlantilla">Próximamente...</h1>
      <div>
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
        <img class="jugador" src="@/assets/imgs/toty1.png" alt="LaPlantilla">
      </div>     
    </div>
  
    <!-- <BottomFooter/> -->
</template>

<script>
    import BottomFooter from './BottomFooter.vue';

    export default {
        components: { BottomFooter }
    }
</script>

<style>

  #contenedorPlantilla {
    background-color: #ffffff;
    border-radius: 20px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-color: #dee2e6;
    border-width: 1px;
    border-style: solid;
  }

  #tituloPlantilla {
    font-family: "Berlin";
    color: #ffd700;
  }

  .jugador {
    margin-left: 2vw;
    margin-right: 2vw;
  }

  @media only screen and (min-width: 1439px) {
    #contenedorPlantilla {
      margin-left: 6vw;
      margin-right: 6vw;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .jugador {
      width: 22vw;
      margin: 0vw;
    }
  }

  @media only screen and (max-width: 1439px) {
    #contenedorPlantilla {
      margin-left: 5vw;
      margin-right: 5vw;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .jugador {
      width: 25vw;
    }
    #tituloPlantilla {
      padding-left: 72px;
      padding-top: 40px;
      font-size: 56px;
    }
  }

  @media only screen and (max-width: 1023px) {

    #contenedorPlantilla {
      margin: 0px;
    }

    .jugador {
      width: 35vw;
    }
    #tituloPlantilla {
      padding-left: 56px;
      padding-top: 32px;
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 767px) {
    
    #contenedorPlantilla {
      border-top-left-radius: 0px;
      border-top-right-radius: 20px;
    }

    .jugador {
      width: 40vw;
    }
    #tituloPlantilla {
      padding-left: 36px;
      padding-top: 24px;
      font-size: 36px;
    }
  }
</style>