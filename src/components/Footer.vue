<template>
  <v-footer dark padless>
    <v-container>
    <v-card flat tile outlined color="transparent">
      <v-card-text class="text-right">
       
      </v-card-text>
<hr class="line">
      <v-card-text class="white--text pt-0">
      <v-list-item two-line>
  

        <v-list-item-content>
          <v-list-item-title>PT. Kobaja Nusantara Prima</v-list-item-title>
          <v-list-item-subtitle>Jl. Antartika II, Kav.B4/2 – B4/3 Kec.Grogol</v-list-item-subtitle>
            <v-list-item-subtitle>
          Cilegon, Banten
        </v-list-item-subtitle>
        <v-list-item-subtitle>
         Telephone: 0254 7735463
        </v-list-item-subtitle>
        <v-list-item-subtitle>
         Email: kobajanp@gmail.com
        </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </v-card-text>

<hr>

      <v-card-text class="white--text text-right">
        <v-col cols="12" md="6" offset-md="6">
          <v-row>
        <v-col cols="6" md="9">  
          © {{ new Date().getFullYear() }} — <strong>KOBAJA NUSANTARA PRIMA</strong>
       </v-col>
       <v-col cols="6" md="3">
      
       <v-overflow-btn  @change="changeCountry(selectedCountry)"
       v-model="selectedCountry"
          :items="items"
          label="Language"
          item-value="value"
          item-text="name"
          overflow
          style="margin-top:-30px"
        ></v-overflow-btn>

        </v-col>
      </v-row>
      </v-col>
 
      </v-card-text>
    </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    selectedCountry : {name : "English", value : "en"},
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    items: [{
      name : "English",
      value : "en"
    },{
      name : "Indonesia",
      value : "id"
    }],
  }),
  methods : {
    changeCountry(value){
      console.log(value)
      this.$root.$i18n.locale = value;
      
    }
  }
};
</script>
