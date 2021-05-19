<template>
  <v-container fluid class="pa-0 ma-0">

  <div style="position: relative;">
    <v-layout align-center justify-center fill-height style="height:650px">
      <video id="myVideo" playsinline autoplay muted loop poster='@/assets/presentacion.webm'>
        <source :src='require("@/assets/presentacion.webm")' type='video/mp4'>
      </video>
      <div style="position: absolute;">
        <v-flex mb-4 align-self-center>
            <h1 class="display-3 font-weight-thin mb-3 text-center white--text">DOMUS.COM</h1>
            <h4 class="subheading text-center white--text">El mejor sitio para ti</h4>
          </v-flex>
          
        <v-flex row pa-5 class="grey lighten-5 rounded" style="filter:opacity(75%)">
          <v-spacer></v-spacer>
            <v-tabs color="basil" grow>
              <v-tab >Compra</v-tab>
              <v-tab>Venta</v-tab>
              <v-tab>Alquiler</v-tab>
            </v-tabs>
            <v-layout justify center align-center >
              <v-flex ml-2 xs-3>
                <v-select mt-4 :items="provincia" label="Ubicacion" dense></v-select>
              </v-flex>
              <v-flex d-flex flex-row ml-2 mb-3 >
                <v-text-field label="Buscar"> </v-text-field>
                <v-btn text class="mt-3"  to="/list"><v-icon >search</v-icon></v-btn>
              </v-flex>
            </v-layout>
        </v-flex>
      </div>
    </v-layout>
  </div> 

  <div>
    <v-parallax class="blue-grey lighten-1" >

      <v-row align="center" justify="center">
        <v-col class=" text--primary text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4 white--text"> Sobre Nosotros</h1>
          <h4 class="subheading white--text"> La inmobiliaria que te acompaña en cada momento de tu vida</h4>
              <p class="text-justify pa-10 my-3 white--text">Somos una empresa Inmobiliaria que garantiza en el mercado un trato basado en honestidad, integridad, ética y profesionalismo en los negocios. Esa identidad se nutre de un sentido evolutivo, que día a día, mientras que conserva sus principios y se adapta a las nuevas necesidades del mercado se acrecienta fortaleciendo su presencia y capacidad de gestión.
                Hemos desarrollado con una visión estratégica, un sistema que orientamos a la gestión para lograr respuestas específicas a las necesidades de nuestros clientes, brindando soluciones integrales y generando el nivel de rentabilidad que asegure su crecimiento y continuidad para alcanzar objetivos comerciales de excelencia.
                Nuestra Inmobiliaria brinda respuestas a cada desafío planteado con agilidad y creatividad comercial, pero también con solidez técnica, que nos permite dar un trato exclusivo y personalizado, aportando una dinámica basada en nuevas ideas, tecnologías y el marketing aplicado al negocio en el cual nos destacamos por sobre nuestros competidores.
            </p>

        </v-col>
      </v-row>

  </v-parallax>
  </div>
  <v-footer inset height="90" class="white">
      <v-row justify="center" no-gutters>

      <strong class="subheading mt-2 teal--text">Conectate a nuestras redes sociales!</strong>
      <v-btn v-for="icon in icons" :key="icon" class=" ml-3" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
        <v-col class="white py-3 text-center teal--text" cols="12">
          {{ new Date().getFullYear() }} — <overline class="teal--text">G13</overline>
        </v-col>
      </v-row>
  </v-footer>
  </v-container>    
</template>

<script> 
 
  export default {
    data: () => ({
      icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    provincia: [ 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa',
        'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz','Santa Fe', 'Santiago del Estero', 'Tierra del Fuego, Antártida e Isla del Atlántico Sur', 'Tucumán'
    ],
      return: {
      videoUrl: '@/assets/presentacion.webm',
      videoType: 'video/mp4',
    }
    }),

  }

</script>

<style scoped>
  #myVideo{
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    /*to edit the brightness effect change the percentage below */
    /*filter:brightness(30%);*/
    /*to edit the brightness effect change the percentage below */
    filter:opacity(35%);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
  }
/* Helper classes */
.basil {
  background-color: transparent!important;
}

</style>

