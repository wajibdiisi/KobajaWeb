<template>
  <v-footer dark padless>
    <v-container>
    <v-card flat tile outlined color="transparent">
      <v-card-text class="text-right">
        <v-col md="1" offset-md="11">
       
       <v-select  @change="changeCountry(selectedCountry)"
       v-model="selectedCountry"
          :items="items"
          label="Language"
          item-value="value"
          item-text="name"
        ></v-select>
      </v-col>
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
        © {{ new Date().getFullYear() }} — <strong>KOBAJA NUSANTARA PRIMA</strong>
         <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
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
