<template>
<v-container fluid class="lighten-5 mb-10">
   <v-img max-height="400" src="@/assets/contactus.jpg">
      <v-overlay absolute>
        <div class="d-flex fill-height" style="flex-direction:column">
          <div class="d-flex fill-height align-center justify-center">
            <v-card flat color="transparent">
              <v-card-text  ><h1 class="contact">Contact Us</h1></v-card-text>
              <v-card-subtitle ><h2><p>{{ $t("message.hello") }}</p></h2></v-card-subtitle>
            </v-card>
          </div>
        
        </div>
      </v-overlay>
    </v-img>
  <v-row>
    <v-col cols="12" md="6" sm="6" offset-md="3" offset-sm="3">
   
   <h1 class="text-center mt-15">Kontak</h1>
 
  <v-card
    
    flat
    class="mx-auto"
    max-width="1500"
  >
 <hr class="line">  
  <v-row justify="center"
      no-gutters
      align="center"
      >
<v-col cols="12" md="4" sm="4" class="px-auto">
   <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Jl.Ir. H. Juanda 3 No. 17-19, RT.008/RW.002, Kel.Kebon Kelapa Kec. Gambir, Jakarta Pusat 10120</v-list-item-title>
          <v-list-item-subtitle>Jl.Ir. H. Juanda 3 No. 17-19, RT.008/RW.002, Kel.Kebon Kelapa Kec. Gambir, Jakarta Pusat 10120</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
       <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
  </v-col>
  <v-divider vertical></v-divider>
  <v-col cols="12" md="7" sm="7">
      <v-card-text>
    <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      label="Email"
      required
    ></v-text-field>
    
    <v-text-field
      label="No Telp"
      required
    ></v-text-field>


 <v-textarea
          label="Pesan"
          auto-grow
          rows="3"
          row-height="25"
          shaped
        ></v-textarea>

   <vue-recaptcha sitekey="6Ldli5kfAAAAAFNV5IsUyYXtJMZbrvV79Kgb7Jja"></vue-recaptcha>

  

   


    <v-btn
      color="error"
      class="mr-4"
    >
     Kirim Pesan
    </v-btn>

 
  </v-form>
    </v-card-text>
  </v-col>
  </v-row>
  </v-card>
  </v-col>
  </v-row>
</v-container>
</template>
<script>
 import { VueRecaptcha } from 'vue-recaptcha';
export default {
  name: "ContactUs",
  components: {
    VueRecaptcha
  },
  data() {
    return {
      tabs: null,
    };
  },
};
</script>
<style scoped>
.trivia {
  font-size: 2.5rem;
  text-align: center;
}
.trivia-01 {
  color: #f5bd3c;
}
.trivia-02 {
  color: #c23331;
}
.trivia-03 {
  color: #414cf0;
}
/* .container-tab{
  padding: 0 0 25px 25px;
} */
.basil {
  background-color: black !important;
}
.basil--text {
  color: black !important;
}
.v-tabs-items {
  background-color: transparent !important;
}
.contact{
  text-align: center;
  font-size: 2.5rem;
}
</style>