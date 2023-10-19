<script>
import {getPeliculas,infoDetallada} from '../services/communicationManager.js';
export default {
    data() {
      return {
        searchString: '',
        result : [],
        details : {},
        isActive: false,
      }
    },
    methods:{
         cercaPelicula(){
            getPeliculas(this.searchString).then((response) => {
                this.result = response;
                this.isActive = false;
             });
        },
        async infoDetallada(imdbID){
            console.log(imdbID);
            this.details= await infoDetallada(imdbID);
            this.isActive = true;
        }
    }
  }
  </script>
  
  <template>
            <v-app class="rounded rounded-md">
            <v-app-bar title="Cercador de pel·licules"></v-app-bar>

            <v-navigation-drawer>
            <v-list>
                <v-list-item title="Navigation drawer"></v-list-item>
                
            </v-list>
            </v-navigation-drawer>

           
            <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
                <v-container class=" mb-6">
                <v-row>
                    <v-col cols="8">
                        <v-text-field
                        label="Titol a cercar"
                        hide-details="auto"
                        v-model="searchString"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-btn @click="cercaPelicula"> Cerca pe·licula </v-btn>
                    </v-col>
                </v-row>
                     <v-card v-if="isActive" :title="details.Title">
                            <v-card-text> 
                                {{ details.Plot }}
                                {{ details.Director }}
                                <v-list>
                                    <v-list-item v-for="item in details.Ratings" :key="item">{{ item.Source }} <v-chip>{{ item.Value }}</v-chip> </v-list-item>
                                </v-list>
                            
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn  text="TANCAR" @click="isActive = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                <v-row>
                    <v-col cols="12">
                        <span class="headline">Resultats</span>
                    </v-col>
                </v-row>
                <v-row>             
                        <v-col cols="4" v-for="item in result" :key="item.imdbID">
                        <v-card >
                            <img :src="item.Poster" cover />
                            <v-card-title>
                                {{item.Title }}
                            </v-card-title>
                            <v-card-text>
                               {{ item.Year }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn @click="infoDetallada(item.imdbID)" color="primary" text>MÉS INFO</v-btn>
                            </v-card-actions>  
                        </v-card>
                    </v-col>
                </v-row>
                </v-container>  
                
            </v-main>
        </v-app>
  </template>
  
  <style>
  .greeting {
    color: red;
    font-weight: bold;
  }
  </style>