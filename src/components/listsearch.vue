<template>
    <container class="">
        <v-row class="align-center justify-center mx-4 my-12">
            
            <v-flex row pa-5 class="grey lighten-5 rounded">
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
                    <v-text-field label="Buscar"></v-text-field>
                    <v-btn text class="mt-3"><v-icon >search</v-icon></v-btn>
                </v-flex>
                </v-layout>
            </v-flex>

        </v-row>

        <v-row class="ma-4">   
            <v-col cols="8" class="grey lighten-5 rounded justify-center">
                <h2 class="ml-5" color="blue-grey darken-4">1.234 Departamentos en alquiler en Recoleta</h2>
                <v-row d-flex flex-row my-3>
                    <v-card v-for="n in 2" :key="n" outlined class="mx-auto my-6" width="400">
                        
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item v-for="(item,i) in item" :key="i" :src="item.src"></v-carousel-item>
                        </v-carousel>
                        <dividers light></dividers>
                        <v-card-title>Chaco</v-card-title>


                        <v-card-subtitle class="pb-0">Resistencia </v-card-subtitle><v-card-text class="text--primary">
                            <div>Calle French 123</div>
                            <div>2 baños, 3 habitaciones, patio, comedor</div>
                        </v-card-text>
                        <v-card-actions>

                            <v-btn color="teal" text to="/details">Ver mas</v-btn>

                                <template>
                                    <v-row justify="center">
                                    <v-dialog v-model="dialog" max-width="600px">
                                        <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="lime darken-2" text v-bind="attrs" v-on="on">Contactanos! </v-btn>
                                        </template>
                                            <v-card>
                                            <v-card-title>
                                                <v-flex>
                                                    <span class="headline teal--text my-4">Enviar Mensaje al Anunciante</span>
                                                    <!-- <v-btn class="ma-2 v-btn--example" outlined large fab bottom left color="lime" style="bottom: 100; position: absolute; margin: 0 0 0px 16px;">
                                                        <v-icon>mdi-pencil</v-icon>
                                                    </v-btn> -->
                                                    <v-divider class="my-3 lime lighten-3"> </v-divider>
                                                </v-flex>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                <v-row>
                                                    <v-flex d-flex flex-row>
                                                        <v-text-field class="mx-3" outlined dense background-color="white" color="blue-grey lighten-4" v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>
                                                        <v-text-field class="mx-3" outlined dense background-color="white" color="blue-grey lighten-4" v-model="surname" :counter="10" :rules="surnameRules" label="Apellido" required></v-text-field>
                                                    </v-flex>
                                                    <v-col cols="12">
                                                        <v-text-field outlined dense background-color="white" color="blue-grey lighten-4" v-model="email" :rules="emailRules" label="Ingrese E-mail" required ></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12">
                                                    <v-text-field v-if="checkbox" outlined dense background-color="white" color="blue-grey lighten-4" v-model="number" :rules="numberRules" label="Ingrese Telefono" required ></v-text-field>
                                                    <v-checkbox v-model="checkbox" label="Quiero que me llamen"></v-checkbox>
                                                    <v-label> A que hora se pueden contactar conmigo: </v-label>
                                                    </v-col>
                                                    <v-flex d-flex flex-row>
                                                        <v-combobox v-model="select" :items="days" class="mx-2" label="Dias" multiple outlined clearable dense ></v-combobox>
    
                                                        <v-select :items="hr1" label="Desde" class="mx-3" outlined dense ></v-select>
                                             
                                                        <v-select :items="hr2" label="Hasta" class="mx-3" outlined dense ></v-select>
                                                    </v-flex>
                                                    <v-col cols="12">
                                                    <v-textarea solo name="input-7-4" label="Mensaje" value="Hola, me interesa esta propiedad que vi en Domus y quiero que me contacten. Gracias."></v-textarea>
                                                    </v-col>
                                                </v-row>
                                                </v-container>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-col cols="12" >
                                                    <v-btn tile width="500" :disabled="!valid" color="lime" class="mr-4 mb-4" @click="dialog = false">Enviar </v-btn>
                                                    <v-btn tile width="500" :disabled="!valid" color="success" class="mr-4 mb-4" @click="dialog = false" href="https://api.whatsapp.com/send/?phone=5493624123456&text&app_absent=0">
                                                    <v-icon left> mdi-whatsapp </v-icon>
                                                        Conectate mediante Whatsapp
                                                    </v-btn>
                                                </v-col>
                                                </v-card-actions>
                                            </v-card>
                                    </v-dialog>
                                    </v-row>
                                </template>
                        </v-card-actions>
                    </v-card>
                    
                    <!-- THIS IS A ILUSTRATIVE MODE -->



                    <!-- THIS IS A ILUSTRATIVE MODE -->
                </v-row>
            </v-col>
            <v-col cols="4" class="">
                <v-row>
                    <v-col cols="1" fill-height>
                        <v-layout justify-center fill-height>
                            <v-divider class="lime darken-2" light vertical></v-divider>
                        </v-layout>
                    </v-col>
                    <v-col cols="11" class="grey lighten-5 rounded">

                        <label class="ma-4"> Tipo Inmobiliaria</label>
                        <v-layout class=" ma-4 justify-center">
                            <v-select flat  :items="tipeD" label="Tipo" outlined></v-select>
                        </v-layout>
                        
                        <V-layout>
                            <v-col>
                                <label class="ma-2">Habitaciones</label>
                                <v-layout class=" ma-1 justify-center">
                                    <v-select flat  :items="droom" label="Tipo" outlined></v-select>
                                </v-layout>
                            </v-col>
                            <v-col>
                            <label class="ma-2">Ambiente</label>
                            <v-layout class=" ma-1 justify-center">
                                <v-select flat  :items="amb" label="Tipo" outlined></v-select>
                            </v-layout>
                            </v-col>
                        </V-layout>

                        <label class="ma-4">Precio</label>
                        <v-layout class=" ma-4 justify-center">
                            <v-slider v-model="slider" class="align-center" :max="max" :min="min" hide-details thumb-label>
                                <template v-slot:append>
                                    <v-text-field v-model="slider" class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px"></v-text-field>
                                </template>
                            </v-slider>
                        </v-layout>

                        <label class="ma-4">Expensa</label>
                        <v-layout class=" ma-4 justify-center">
                            <v-slider v-model="sliderE" class="align-center" :max="maxE" :min="minE" hide-details thumb-label>
                                <template v-slot:append>
                                    <v-text-field v-model="sliderE" class="mt-0 pt-0" hide-details single-line type="number" style="width: 60px"></v-text-field>
                                </template>
                            </v-slider>
                        </v-layout>

                        <v-layout>
                            <label class="mr-6">¿Garage? :</label>
                            <p>{{ garage || 'null' }}</p>
                        </v-layout>
                        
                        <v-layout>
                            <v-radio-group v-model="garage" mandatory>
                            <v-radio label="Si" value="Si"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                            </v-radio-group>
                        </v-layout>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="align-content-center justify-center ma-10">
                <div class="text-center">
                    <v-pagination light v-model="page" :length="5"></v-pagination>
                </div>
        </v-row>
        
        <v-divider light ></v-divider>
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
    </container>   
</template>

<script>
  export default {
    data () {
        return {
        item: [
          {
            src: require('../assets/1.jpg'),
          },
          {
            src: require('../assets/2.jpg'),
          },
          {
            src: require('../assets/3.jpg'),
          },
        ],
        tipeD: ['Departamento', 'Casa', 'Terreno', 'Local', 'Oficina', 'Hotel', 'Quinta'],
        droom: ['1', '2','3','4','5'],
        amb: ['1', '2','3','4','5'],
        page: 1,
        min: 0,
        max: 999999,
        slider: 1,
        minE: 0,
        maxE:10000,
        garage: null,
        dialog: false,
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
        icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
        ],
        provincia : [ 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa',
        'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz','Santa Fe', 'Santiago del Estero', 'Tierra del Fuego, Antártida e Isla del Atlántico Sur', 'Tucumán'
        ],
        days:['Lunes','Martes','Miercoles', 'Jueves', 'Viernes'
        ],
        hr1:['8:00', '9:00', '10:00','11:00','12:00','17:00','18:00','19:00','20:00','21:00'

        ],
        hr2:['8:00', '9:00', '10:00','11:00','12:00','17:00','18:00','19:00','20:00','21:00'

        ]
      }
    },
  }
</script>