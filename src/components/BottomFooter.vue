<template>
    <footer id="elfooter" class="row">

      <!-- Sponsors -->
      <div class="col">
        <h5 class="textoarriba">NUESTROS PATROCINADORES</h5>
        <div id="parasponsors" class="row">
          <ul class="col list-unstyled">
            <li>
              <a class="grande row" href="https://rauwalejandro.com/" target="_blank" style="text-decoration: none;">
                <img id="logo1" class="col-3 ps-0 pe-0 ms-2 me-2" src="@/assets/imgs/placeholder1.jpg" alt="Sponsor1">
                <h6 id="sponsor1" class="col ps-2 mt-2">Rauw Alejandro</h6>
              </a>
            </li>
            <li>
              <a class="grande row" href="https://www.anuelaa.com/" target="_blank" style="text-decoration: none;">
                <img id="logo2" class="col-3 ps-0 pe-0 ms-2 me-2" src="@/assets/imgs/placeholder1.jpg" alt="Sponsor1">
                <h6 id="sponsor2" class="col ps-2 mt-2">Rauw Alejandro</h6>
              </a>
            </li>
            <li>
              <a class="grande row" href="https://rauwalejandro.com/" target="_blank" style="text-decoration: none;">
                <img id="logo3" class="col-3 ps-0 pe-0 ms-2 me-2" src="@/assets/imgs/placeholder1.jpg" alt="Sponsor1">
                <h6 id="sponsor3" class="col ps-2 mt-2">Rauw Alejandro</h6>
              </a>
            </li>
          </ul>
          <!-- <ul class="col list-unstyled">
            <li>
              <a class="row" href="https://rauwalejandro.com/" target="_blank" style="text-decoration: none;">
                <img id="logo4" class="col-3 ps-0 pe-0 ms-2 me-2" src="@/assets/imgs/placeholder1.jpg" alt="Sponsor1">
                <h6 id="sponsor4" class="col ps-2 mt-2">Rauw Alejandro</h6>
              </a>
            </li>
            <li>
              <a class="row" href="https://www.anuelaa.com/" target="_blank" style="text-decoration: none;">
                <img id="logo5" class="col-3 ps-0 pe-0 ms-2 me-2" src="@/assets/imgs/placeholder1.jpg" alt="Sponsor1">
                <h6 id="sponsor5" class="col ps-2 mt-2">Rauw Alejandro</h6>
              </a>
            </li>
            <li>
              <a class="row" href="https://rauwalejandro.com/" target="_blank" style="text-decoration: none;">
                <img id="logo6" class="col-3 ps-0 pe-0 ms-2 me-2" src="@/assets/imgs/placeholder1.jpg" alt="Sponsor1">
                <h6 id="sponsor6" class="col ps-2 mt-2">Rauw Alejandro</h6>
              </a>
            </li>
          </ul> -->
        </div>
      </div>

      <!-- Contacto -->
      <div id="paranosotros" class="col-4">
        <h5 class="textoarriba">CONTÁCTANOS</h5>
        <ul class="col list-unstyled">
          <li>
            <a id="textogmail" class="grande nav-link" href="mailto:eventoabrilfutbol@gmail.com" target="_blank" style="text-decoration: none;">
              eventoabrilfutbol@gmail.com
              <img id="gmail" src="@/assets/imgs/gmail.png" alt="NuestroEmail">
            </a>
          </li>
          <li>
            <a id="textoinsta" class="grande nav-link" href="https://www.instagram.com/fc.rayovicareno/" target="_blank" style="text-decoration: none;">
              @fc.rayovicareno
              <img id="insta" src="@/assets/imgs/instagram.png" alt="NuestroInstagram">
            </a>
          </li>
        </ul>     
      </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style>

  #elfooter {
    font-family: "Aller";
    color: #202020;
    text-align: left;
  }

  /* #gmail, #insta {
    position: absolute;
  } */

  a, h5, #logo1, #logo2, #logo3, #logo4, #logo5, #logo6, #sponsor1, #sponsor2, #sponsor3, #sponsor4, #sponsor5, #sponsor6, #textogmail, #gmail, #textoinsta, #insta {
    color: #202020;
    transition: 0.2s;
  }

  a:hover, #sponsor1:hover, #sponsor2:hover, #sponsor3:hover, #sponsor4:hover, #sponsor5:hover, #sponsor6:hover, #textogmail:hover, #textoinsta:hover {
    color: #3f3f3f;
  }

  .grande:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    /* Safari */
  }

  #gmail, #insta {
    padding: 0px;
  }

  @media only screen and (min-width: 1439px) {

    #elfooter {
      height: 400px;  
      margin-left: 6vw;
      margin-right: 6vw;
      padding-top: 32px;
      padding-left: 18px;
      padding-right: 18px;
    }
    .textoarriba {
      font-size: 23px;
    }

    #logo1, #logo2, #logo3, #logo4, #logo5, #logo6 {
      width: 85px;
    }
    a, #sponsor1, #sponsor2, #sponsor3, #sponsor4, #sponsor5, #sponsor6 {
      font-size: 21px;
      padding-top: 16px;
      padding-left: 4px;
    }

    #paranosotros {
      text-align: end;
      width: 350px;
    }
    #gmail, #insta {
      width: 55px;
      margin-right: -16px;
      margin-left: 12px;
    }

    #textogmail, #textoinsta {
      font-size: 17px;
      text-align: end;
    }
      /* #gmail {
      right: 36px;
    }
      #insta {
      right: 36px;
    } */
  }

  @media only screen and (max-width: 1439px) {

    #elfooter {
      height: 400px;  
      margin-left: 5vw;
      margin-right: 5vw;
      padding-top: 32px;
      padding-left: 18px;
      padding-right: 18px;
    }
    .textoarriba {
      font-size: 22px;
    }

    #logo1, #logo2, #logo3, #logo4, #logo5, #logo6 {
      width: 80px;
    }
    a, #sponsor1, #sponsor2, #sponsor3, #sponsor4, #sponsor5, #sponsor6 {
      font-size: 20px;
      padding-top: 16px;
      padding-left: 4px;
    }

    #paranosotros {
      text-align: end;
      width: 350px;
    }
    #gmail, #insta {
      width: 50px;
      margin-right: -16px;
      margin-left: 12px;
    }

    #textogmail, #textoinsta {
      font-size: 17px;
      text-align: end;
    }
      /* #gmail {
      right: 36px;
    }
      #insta {
      right: 36px;
    } */
  }

  @media only screen and (max-width: 1023px) {

    #elfooter {
      height: 345px;
      padding-top: 20px;
      padding-left: 36px;
      padding-right: 36px;
    }
    .textoarriba {
      font-size: 20px;
    }

    #logo1, #logo2, #logo3, #logo4, #logo5, #logo6 {
      width: 70px;
    }
    a, #sponsor1, #sponsor2, #sponsor3, #sponsor4, #sponsor5, #sponsor6 {
      font-size: 18px;
      padding-top: 14px;
      padding-left: 4px;
    }

    #paranosotros {
      text-align: end;
      width: 350px;
    }
    #gmail, #insta {
      width: 45px;
      margin-right: -16px;
      margin-left: 12px;
    }

    #textogmail, #textoinsta {
      font-size: 16px;
      text-align: end;
    }
    /* #gmail {
      right: 36px;
    }
    #insta {
      right: 36px;
    } */
  }

  @media only screen and (max-width: 767px) {

    #elfooter {
      height: 510px;
      padding-left: 32px;
      padding-right: 32px;
    }

    #parasponsors {
      width: 400px;
    }
    #paranosotros {
      text-align: start;
      padding-top: 20px;
    }
    #gmail, #insta {
      position: relative;
    }
    #gmail {
      top: -34px;
      left: -74px;
    }
    #insta {
      left: -204px;
    }

    #textogmail, #textoinsta {
      font-size: 16px;
      text-align: start;
      margin-left: 48px;
    }
    #textoinsta {
      margin-top: -48px;
    }
  }

  @media only screen and (max-width: 349px) {

    #elfooter {
      height: 510px;
      padding-left: 30px;
      padding-right: 30px;
    }

    .textoarriba {
      font-size: 19px;
    }

    #parasponsors {
      width: 400px;
    }

    #logo1, #logo2, #logo3, #logo4, #logo5, #logo6 {
      width: 64px;
    }

    a, #sponsor1, #sponsor2, #sponsor3, #sponsor4, #sponsor5, #sponsor6 {
      font-size: 17px;
      padding-top: 12px;
      padding-left: 4px;
    }

    #paranosotros {
      text-align: start;
      padding-top: 20px;
    }
    #gmail, #insta {
      width: 40px;
      position: relative;
    }
    #gmail {
      top: -30px;
      left: -74px;
    }
    #insta {
      left: -188px;
    }

    #textogmail, #textoinsta {
      font-size: 14px;
      text-align: start;
      margin-left: 48px;
    }
    #textoinsta {
      margin-top: -48px;
    }
  }

  /* #parapatrocinadores {
    background-color: #202020;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23202020' stroke-width='0.2' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cuse fill='%23303030' href='%23s' y='2'/%3E%3Cuse fill='%23303030' href='%23s' x='1' y='2'/%3E%3Cuse fill='%233c3c3c' href='%23s' x='2' y='2'/%3E%3Cuse fill='%233c3c3c' href='%23s'/%3E%3Cuse fill='%23464646' href='%23s' x='2'/%3E%3Cuse fill='%23464646' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cg fill='%234e4e4e'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cg fill='%234e4e4e'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cg fill='%23565656'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cg fill='%23202020'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%235d5d5d'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cg fill='%23FFD700'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cg fill='%23FFD700'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(45 1000 750) scale(34.9) translate(-971.35 -728.51)'%3E%3Cg fill='%23FFD700'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
       Fondo de mi ahora gran amigo (aunque él no lo sabe)
      Matt Visiwig, creador de SVGBackgrounds 
  } */
</style>