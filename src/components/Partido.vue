<template>
    <!-- Header -->
    <div class="seccion border border-bottom-0 rounded-top">
        <img class="iconoseccion" src="@/assets/imgs/iconotrofeo.png" alt="IconoPartido">
        EL EVENTO
    </div>

    <!-- Body -->
    <div id="contenedorPartido" class="d-flex flex-column">
        <h1 id="evento">¡Vícar juega!</h1>
        <p id="evento-texto">LoreñÑ ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt tempore, repellat officia veritatis ipsam tempora adipisci magni voluptatem vero recusandae nostrum rerum, consequatur corporis harum voluptatum quas quae neque.</p>
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

  #contenedorPartido {
    background-color: #ffffff;
    border-radius: 20px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-color: #dee2e6;
    border-width: 1px;
    border-style: solid;
  }

  @media only screen and (min-width: 767px) {
    #evento {
        font-family: "Aller";
        padding: 12px;
    }

    #evento-texto {
        text-align: start;
        padding: 12px;
        font-family: "Aller";
        color: #202020;
        font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 1439px) {
    #contenedorPartido {
      margin-left: 6vw;
      margin-right: 6vw;
      border-top-left-radius: 20px;
    }
  }

  @media only screen and (max-width: 1439px) {
    #contenedorPartido {
      margin-left: 5vw;
      margin-right: 5vw;
      border-top-left-radius: 20px;
    }
  }

  @media only screen and (max-width: 1023px) {
      #contenedorPartido {
          margin: 0px;
      }
  }

  @media only screen and (max-width: 767px) {

    #contenedorPartido {
        border-top: #dee2e6;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-left-radius: 0px;
        border-top-right-radius: 20px;
    }

    #evento {
        font-family: "Aller";
        padding: 12px;
    }

    #evento-texto {
        text-align: start;
        padding: 12px;
        font-family: "Aller";
        color: #202020;
        font-size: 1rem;
    }
  }
</style>