<template>
  <body class="d-flex flex-column h-100">   
    <NavBarra/>
    
    <!--Main Body Anterior-->
    <!--
    <main class="tab-content d-flex flex-column h-100" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-club" role="tabpanel">
        <ClubVue/>
      </div>
      <div class="tab-pane fade" id="nav-plantilla" role="tabpanel">
        <Plantilla/>
      </div>
      <div class="tab-pane fade" id="nav-partido" role="tabpanel">
        <Partido/>
      </div>
    </main> -->
  </body>
</template> 

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBarra from './components/NavBarra.vue'
import ClubVue from './components/Club.vue'
import Plantilla from './components/Plantilla.vue'
import Partido from './components/Partido.vue'
import BottomFooter from './components/BottomFooter.vue'
import StickyFooter from './components/StickyFooter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ClubVue,
    NavBarra,
    Plantilla,
    Partido,
    BottomFooter,
    StickyFooter,
  },
  data() {
    return {
      currentTab: 'ClubVue',
      tabs: ['ClubVue', 'Plantilla', 'Partido']
    }
  }
}
</script>

<style>
  #app {

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    text-align: center;
    color: #2c3e50;
    margin-top: auto;
  }

  @font-face {
    font-family: "Berlin";
    src: url(@/assets/fonts/BRLNSDB.TTF) format("truetype");
  }
  @font-face {
    font-family: "Poppins";
    src: url(@/assets/fonts/POPPINS-REGULAR.TTF) format("truetype");
  }
  @font-face {
    font-family: "Aller";
    src: url(@/assets/fonts/Aller_Rg.ttf) format("truetype");
  }
  @font-face {
    font-family: "CircularBlack";
    src: url(@/assets/fonts/CircularSpotifyText-Black.otf) format("opentype"); 
  }

  body {
    overflow-x: hidden;
  }
  
</style>
