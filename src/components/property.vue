<template>
    <v-container fluid>
      <v-row class="align-center justify-center">
          <template>
          <v-carousel show-arrows-on-hover hide-delimiters>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
          </template>
      </v-row>
      <v-row class="align-center justify-center my-4 mx-2">
          <v-col cols="8">
              <h1 class="my-2">Departamento · 158m² · 5 Ambientes</h1>
              <subtitle-1>Pueyrredon al 2400, Recoleta, Capital Federal</subtitle-1>
              <v-divider light class="my-3"></v-divider>
              <v-flex class="my-3">
                <v-label class="my-5 grey lighten-4 rounded">Publicado hace 35 días</v-label>
              </v-flex>
              <v-divider light class="my-3"></v-divider> 
              <v-flex class="grey lighten-4 rounded">
                <h2>Departamento de 3 Dorm. en Venta en Recoleta</h2>
              </v-flex>
              <v-flex class="grey lighten-4 rounded">
              <v-chip v-if="chip4" class="ma-2" color="teal" label outlined @click:close="chip4 = false"><v-icon left> mdi-server-plus</v-icon> #tag</v-chip>
              <v-chip v-if="chip4" class="ma-2" color="teal" label outlined @click:close="chip4 = false"><v-icon left> wifi</v-icon> #tag</v-chip>
              <v-chip v-if="chip4" class="ma-2" color="teal" label outlined @click:close="chip4 = false"><v-icon left> room_service</v-icon> #tag</v-chip>
              <v-chip v-if="chip4" class="ma-2" color="teal" label outlined @click:close="chip4 = false"><v-icon left> local_laundry_service</v-icon> #tag</v-chip>
              </v-flex>
              <v-flex readonly class="my-5" >
                <v-expansion-panels light hover>
                  <v-expansion-panel v-for="(item,i) in 1" :key="i">
                    <v-expansion-panel-header color="lime lighten-2">Caracteristicas Generales</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-flex>
              <v-flex d-flex class="grey lighten-3 my-9" justify-center>
                  <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="si" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=es&amp;q=Les Rambles, 1 Barcelona, Spain+(Mi nombre de egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">Dibuja un circulo Google Maps</a></div>
              </v-flex>
                <v-flex class="grey lighten-4 rounded pa-10" justify="center">
                  <h2> Sobre el inmueble</h2>
                  <v-divider light class="my-3"></v-divider>
                  <!--<template>
                  <div>
                    <div class="google-map" ref="googleMap"></div>
                    <template v-if="Boolean(this.google) && Boolean(this.map)">
                      <slot :google="google" :map="map" />
                    </template>
                  </div>
                </template>-->
                <p>
                    Departamento muy luminoso en Recoleta!
                    Sobre la Avenida Pueyrredón, a metros de la isla.
                    Recepción conformada por un living y comedor al frente con salida a balcón, un toilette.
                    Hall de distribución con dos dormitorios al frente con salida a balcón, mas dos dormitorios al contrafrente , el cual uno de ellos tiene doble salida al pasillo interno o a pasillo de servicio . Cuenta con doble circulación, 2 baños completos 1 de ellos en suite..
                    Amplia cocina con comedor diario.
                    Dependencia de servicio, gran lavadero.
                </p>

                <p> 
                    El departamento es muy luminoso y alegre, esta en buen estado. Tiene pisos de parquet.

                    "Las expensas, ABL y Aysa no son exactas y están sujetas a modificaciones"
                    Las medidas son aproximadas y orientativas. Las medidas exactas surgirían del título de propiedad"
                </p>

                  <p> 
                    "Las expensas, ABL y Aysa no son exactas y están sujetas a modificaciones"
                    "Las medidas son aproximadas y orientativas. Las medidas exactas surgirían del título de propiedad"
                    “Venta supeditada al cumplimiento por parte del propietario de los requisitos de la Resolución General 2371 de la AFIP.”
                  </p>
                </v-flex>
          </v-col>

          <v-col cols="4" class="blue-grey lighten-5 py-8">
            <h2>Alquiler $ 100.000 </h2>
            <v-subtitle>+ $ 19.500 Expensas</v-subtitle>
            <v-divider light class="my-3"></v-divider>
            <template>
              <v-form class="my-5" ref="form" v-model="valid" lazy-validation>
                <v-text-field outlined dense background-color="white" color="blue-grey lighten-4" v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>
                <v-text-field outlined dense background-color="white" color="blue-grey lighten-4" v-model="surname" :counter="10" :rules="surnameRules" label="Apellido" required></v-text-field>
                <v-text-field outlined dense background-color="white" color="blue-grey lighten-4" v-model="email" :rules="emailRules" label="Ingrese E-mail" required ></v-text-field>
                <v-text-field v-if="checkbox" outlined dense background-color="white" color="blue-grey lighten-4" v-model="number" :rules="numberRules" label="Ingrese Telefono" required ></v-text-field>
                
                <v-checkbox v-model="checkbox" label="Quiero que me llamen"></v-checkbox>
                <v-label> A que hora se pueden contactar conmigo: </v-label>
                <v-flex d-flex flex-row class="my-3">
                    <v-combobox v-model="select" :items="days" class="mr-2" label="Dias" multiple outlined clearable dense background-color="white" ></v-combobox>
                    <v-select :items="hr1" label="Desde" class="mr-3" outlined dense background-color="white"></v-select>
                    <v-select :items="hr2" label="Hasta" class="mr-3" outlined dense background-color="white" ></v-select>
                </v-flex>

                <v-textarea solo name="input-7-4" label="Mensaje" value="Hola, me interesa esta propiedad que vi en Domus y quiero que me contacten. Gracias."></v-textarea>
                
                <v-btn tile width="425" :disabled="!valid" color="lime" class="mr-4 mb-4" @click="validate">Enviar </v-btn>
                <v-btn tile width="425" :disabled="!valid" color="success" class="mr-4 mb-4" @click="validate" href="https://api.whatsapp.com/send/?phone=5493624123456&text&app_absent=0">
                  <v-icon left> mdi-whatsapp </v-icon>
                    Conectate mediante Whatsapp
                </v-btn>
              </v-form>
          </template>
          </v-col>
      </v-row>

      <v-divider light></v-divider>
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
  // import GoogleMapsApiLoader from 'google-maps-api-loader'
  export default {
    // props: {
    // mapConfig: Object,
    // apiKey: String,
    // },
    data () {

      return {
        icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
      ],
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'El Nombre es requerido',
          v => (v && v.length <= 10) || 'El nombre tiene que ser menos que 10 characteres',
        ],
        surname: '',
        surnameRules: [
          v => !!v || 'El Apellido es requerido',
          v => (v && v.length <= 10) || 'El Apellido tiene que ser menos que 10 characteres',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
        ],
        number: '',
        numberRules:[
          v => !!v || 'Numero es requirido',
          v => /.+@.+\..+/.test(v) || 'Celular debe ser valido',
        ],
       checkbox: false,
        items: [
          {
             src: require('../assets/4.jpg'),
          },
          {
             src: require('../assets/5.jpg'),
          },
          {
             src: require('../assets/6.jpg'),
          },
        ],
        chip4: true,
        // google: null,
        // map: null,
        days:['Lunes','Martes','Miercoles', 'Jueves', 'Viernes'
        ],
        hr1:['8:00', '9:00', '10:00','11:00','12:00','17:00','18:00','19:00','20:00','21:00'

        ],
        hr2:['8:00', '9:00', '10:00','11:00','12:00','17:00','18:00','19:00','20:00','21:00'

        ]
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
    //   async mounted() {
    //   const googleMapApi = await GoogleMapsApiLoader({
    //     apiKey: this.apiKey
    //   })
    //   this.google = googleMapApi
    //   this.initializeMap()
    //   },
    //   methods: {
    //     initializeMap() {
    //       const mapContainer = this.$refs.googleMap
    //       this.map = new this.google.maps.Map(
    //         mapContainer, this.mapConfig
    //       )
    //     }
    //   }
  }
  
</script>
