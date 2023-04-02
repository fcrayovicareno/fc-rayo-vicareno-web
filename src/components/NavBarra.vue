<template>
  <header id="paranavegacion" class="cover-container h-100 text-center">
    <div class="row">
      <nav class="navbar">
        <div class="d-flex flex-wrap">

          <!--Heading-->
          <img class="rayo" src="@/assets/imgs/rayovicareñomil.png" alt="Escudo del Rayo"/>
          <h1 class="nombre" style="">Rayo Vicareño</h1>
          <a href="https://www.ieslapuebla.com/centro/" target="_blank">
            <img class="puebla" src="@/assets/imgs/logopuebla.png" alt="IES La Puebla"/>
          </a>
        
          <!--Hamburger-->
          <!--<label id="hamburger">
            <nav id="sidebar">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </label>
          <div class="overlay"></div> -->

        </div>              
      </nav>
    </div>

    <!--NavBar-->
    <nav id="barragrande" class="nav nav-tabs nav-justified border-bottom-0">
        <button id="botonequipo" class="nav-link border-bottom-0"
          :key="tab1"
          :class="['tab-button', { active:
          currentTab === tab1 }]"
          @click="currentTab = tab1">
          <img class="iconobarra" src="@/assets/imgs/iconopelota.png" alt="IconoEquipo">
          EL EQUIPO
        </button>
        <button id="botonplantilla" class="nav-link"
          :key="tab2"
          :class="['tab-button', { active:
          currentTab === tab2 }]"
          @click="currentTab = tab2">
          <img class="iconobarra" src="@/assets/imgs/iconocamiseta.png" alt="IconoPlantilla">
          LA PLANTILLA
        </button>
        <button id="botonpartido" class="nav-link border-bottom-0"
          :key="tab3"
          :class="['tab-button', { active:
          currentTab === tab3 }]"
          @click="currentTab = tab3">
          <img class="iconobarra" src="@/assets/imgs/iconotrofeo.png" alt="IconoEvento">
          EL EVENTO
        </button>
    </nav>

    <!--Hamburger-->
    <nav class="container-fluid">
      <button id="hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <button id="hamequipo" class="nav-link"
          :key="tab1"
          :class="['tab-button', { active:
          currentTab === tab1 }]"
          @click="currentTab = tab1">
          <img class="iconobarra" src="@/assets/imgs/iconopelota.png" alt="IconoEquipo">
          EL EQUIPO
        </button>
        <button id="hamplantilla" class="nav-link"
          :key="tab2"
          :class="['tab-button', { active:
          currentTab === tab2 }]"
          @click="currentTab = tab2">
          <img class="iconobarra" src="@/assets/imgs/iconocamiseta.png" alt="IconoPlantilla">
          LA PLANTILLA
        </button>
        <button id="hampartido" class="nav-link"
          :key="tab3"
          :class="['tab-button', { active:
          currentTab === tab3 }]"
          @click="currentTab = tab3">
          <img class="iconobarra" src="@/assets/imgs/iconotrofeo.png" alt="IconoEvento">
          EL EVENTO
        </button>
      </div>
    </nav>
    
    <!--Main body-->
    <component :is="currentTab">
    </component>

    <BottomFooter/>

    <!--NavBar--
    <div id="navbar" class="">
      <nav>
        <div class="nav nav-tabs nav-justified" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-club-tab" data-bs-toggle="tab" data-bs-target="#nav-club" type="button" role="tab">EL CLUB</button>
          <button class="nav-link" id="nav-plantilla-tab" data-bs-toggle="tab" data-bs-target="#nav-plantilla" type="button" role="tab">EL EQUIPO</button>
          <button class="nav-link" id="nav-partido-tab" data-bs-toggle="tab" data-bs-target="#nav-partido" type="button" role="tab">EL EVENTO</button>
        </div>
      </nav>
    </div> -->
    
  </header>
</template>

<script>
  import ClubVue from '@/components/Club.vue'
  import Plantilla from '@/components/Plantilla.vue'
  import Partido from '@/components/Partido.vue'
  import BottomFooter from '@/components/BottomFooter.vue'

  export default {
    components: {
      ClubVue,
      Plantilla,
      Partido,
      BottomFooter
    },
    data() {
      return {
        currentTab: 'ClubVue',
        tab1: 'ClubVue',
        tab2: 'Plantilla',
        tab3: 'Partido'
      }
    }
  }

  /* function muFunction(x) {
      x.classList.dataBsToggle("change");
    } */

</script>

<style>

    h1 {
        color:#ffd700;
        text-align: left;
        font-family: "Berlin";
    }

    .puebla:hover, .rayo:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      /* Safari */
    }
    .nombre:hover {
      background-image: url(@/assets/imgs/confetti.gif);
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      /* Safari */
    }
    #hamburger:hover {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      /* Safari */
    }

    #botonequipo {
      color: #202020;
    }
    #botonplantilla {
      color: #202020;
    }
    #botonpartido {
      color: #202020;
    }
    #hamequipo {
      color: #202020;
    }
    #hamplantilla {
      color: #202020;
    }
    #hampartido {
      color: #202020;
    }
    #hamburger {
      border: none;
      background-color: transparent;
      background-image: url(@/assets/svgs/menu-icon.svg);
      background-size: cover;
    }

    @media only screen and (min-width: 1439px) {
        .rayo {
            width: 120px;
            height: 100%;
            margin-left: 6vw;
            transition: all 0.2s ease-in-out;
        }
        .nombre {
            font-size: 72px;
            align-self: center;
            margin-left: 1vw;
            transition: all 0.2s ease-in-out;
        }
        .puebla {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 20px;
            right: 8vw;
            transition: all 0.2s ease-in-out;
        }

        .iconobarra {
          width: 28px;
          height: auto;
          margin-bottom: 4px;
          margin-right: 5px;
        }
        .nav-link {
          font-size: 24px;
          font-family: "Aller";
        }

        #barragrande {
          display: flex;
          margin-left: 6vw;
          margin-right: 6vw;
        }
        #hamburger {
          display: none;
        }
    }

    @media only screen and (max-width: 1439px) {
        .rayo {
            width: 100px;
            height: 100%;
            margin-left: 6vw;
            transition: all 0.2s ease-in-out;
        }
        .nombre {
            font-size: 64px;
            align-self: center;
            margin-left: 1vw;
            transition: all 0.2s ease-in-out;
        }
        .puebla {
            width: 76px;
            height: 76px;
            position: absolute;
            top: 12px;
            right: 7vw;
            transition: all 0.2s ease-in-out;
        }

        .iconobarra {
          width: 24px;
          height: auto;
          margin-bottom: 4px;
          margin-right: 4px;
        }
        .nav-link {
          font-size: 20px;
          font-family: "Aller";      
        }

        #barragrande {
          margin-left: 5vw;
          margin-right: 5vw;
        }
        #hamburger {
          display: none;
        }
    }

    @media only screen and (max-width: 1023px) {
        .rayo {
            width: 80px;
            height: 100%;
            margin-left: 0.5vw;
        }
        .nombre {
            font-size: 48px;
            align-self: center;
            margin-left: 1vw;
        }
        .puebla {
            width: 60px;
            height: 60px;
            position: absolute;
            right: 30px;
        }

        .iconobarra {
          width: 20px;
          height: auto;
          margin-right: 4px;
        }
        .nav-link {
          font-size: 18px;
          font-family: "Aller";
        }
        .active {
          transform: scale(1.05);
          -webkit-transform: scale(1.05);
          /* Safari */
        }

        #barragrande {
          display: flex;
          margin: 0px;
        }

        #hamburger {
          display: none;
        }
    }

    @media only screen and (max-width: 767px) {
        .rayo {
            width: 64px;
            height: 100%;
            margin-left: 6px;
        }
        .nombre {
            font-size: 32px;
            margin-top: 10px;
            margin-left: 4px;
        }
        .puebla {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 16px;
            right: 80px;
        }

        .nav-link {
          font-size: 16px;
          font-family: "Aller";
          border: none;
          background-color: transparent;
          margin: 12px;
        }

        #barragrande {
          display: none;
        }

        #hamMenu {
          display: block;
          position: absolute;
          top: 24px;
          right: 10px
        }
        #hamburger {
          cursor: pointer;
          display: block;
          width: 30px;
          height: 25px;
          position: absolute;
          top: 28px;
          right: 20px;
          transition: 0.2s;
          /* background: url(@/assets/svgs/menu-icon.svg);
          background-size: cover;
          background-repeat: no-repeat;
          Este no funciona
          background-attachment: fixed; 
          background-position: center;
          border: none; */
        }
        #navbarNav {
          position: absolute;
          left: 60vw;
          right: 0px;
          background-color: #ffffff;
          border-radius: 15px;
          border-width: 1px;
          border-style: solid;
          border-color: #dee2e6;
        }
    }

    @media only screen and (min-width: 767px) {
        #navbarNav {
          display: none;
        }
    }

    @media only screen and (max-width: 425px) {
        .puebla {
          display: none;
        }

        #navbarNav {
          left: 53vw;
        }
    }

    @media only screen and (max-width: 320px) {
        .rayo {
            width: 53px;
            height: 100%;
        }
        .nombre {
            font-size: 26px;
            margin-top: 8px;
        }

        .nav-link {
          font-size: 14px;
          font-family: "Aller";
          margin-left: 40vw;
        }

        #barragrande {
          display: none;
        }
        
        #hamburger {
          display: block;
          position: absolute;
          top: 20px;
          right: 16px;
        }

        #navbarNav {
          position: initial;
          background-color: transparent;
          border-radius: 0px;
          border-width: 0px;
          border-color: transparent;
        }
    }

  #paranavegacion {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23FFFFFF' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23FFD700' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23ffd929' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23ffdb3e' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ffde4e' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23ffe05d' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23ffe26b' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23ffe478' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23ffe785' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23ffe992' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23ffeb9e' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23ffeeaa' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23fff0b6' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23fff3c2' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23fff5cf' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23fff7db' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23fffae7' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23fffcf3' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23FFFFFF' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
      /* Fondo de mi ahora gran amigo (aunque él no lo sabe)
      Matt Visiwig, creador de SVGBackgrounds */
  }
</style>