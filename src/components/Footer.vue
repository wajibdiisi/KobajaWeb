<template>
  <v-footer dark padless>
    <v-container>
    <v-card flat tile outlined color="transparent">
      <v-card-text class="text-right">
       <v-btn @click="changeCountry()">test</v-btn>
      </v-card-text>
<hr class="line">
      <v-card-text class="white--text pt-0">
      <v-list-item two-line>
  

        <v-list-item-content>
          <v-list-item-title>PT. Bapanya Bagud</v-list-item-title>
          <v-list-item-subtitle>Jl. H.R. Rasuna Said Kav. 1, Kuningan</v-list-item-subtitle>
            <v-list-item-subtitle>
          DKI Jakarta 12980
        </v-list-item-subtitle>
        <v-list-item-subtitle>
         Telephone: +62 21 831 5005
        </v-list-item-subtitle>
        <v-list-item-subtitle>
         Email: lgs@lgslaw.co.id
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
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods : {
    changeCountry(){
      console.log(this.$root.$i18n.locale);
      this.$root.$i18n.locale = "id";
    }
  }
};
</script>
