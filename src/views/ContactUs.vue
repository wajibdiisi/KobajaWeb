<template>
<v-container fluid class="lighten-5 mb-10">
   <v-img max-height="400" src="@/assets/contactus.jpg">
      <v-overlay absolute>
        <div class="d-flex fill-height" style="flex-direction:column">
          <div class="d-flex fill-height align-center justify-center">
            <v-card flat color="transparent">
              <v-card-text  ><h1 class="contact">{{ $t("contactUs.contactUsTitle") }}</h1></v-card-text>
              <v-card-subtitle ><h2><p>{{ $t("contactUs.contactUsText") }}</p></h2></v-card-subtitle>
            </v-card>
          </div>
        
        </div>
      </v-overlay>
    </v-img>
  <v-row>
    <v-col cols="12" md="6" sm="6" offset-md="3" offset-sm="3">
   
   <h1 class="text-center mt-15">{{ $t("contactUs.contact") }}</h1>
 
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
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Jl. Antartika II, Kav.B4/2</v-list-item-title>
          <v-list-item-subtitle> – B4/3 Kec.Grogol, Cilegon</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>kobajanp@gmail.com</v-list-item-title>
          <!-- <v-list-item-subtitle>Personal</v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>0254 7735463</v-list-item-title>
          <!-- <v-list-item-subtitle>Personal</v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
       <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-whatsapp
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>+62 813-8669-2047</v-list-item-title>
          <!-- <v-list-item-subtitle>Personal</v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
  </v-col>
  <v-divider vertical></v-divider>
  <v-col cols="12" md="7" sm="7">
      <v-card-text>
    <v-form @submit.prevent="sendEmail"
    ref="form"
    lazy-validation
  >
    <v-text-field
      label="Name"
      required
       v-model="name"
    ></v-text-field>

    <v-text-field
      label="Email"
      required
      v-model="email"
    ></v-text-field>
    
    <v-text-field
      label="Phone Number"
      required
       v-model="phoneNumber"
    ></v-text-field>


 <v-textarea
          label="Message"
          auto-grow
          rows="3"
          row-height="25"
          shaped
          v-model="message"
        ></v-textarea>

   <vue-recaptcha sitekey="6Ldli5kfAAAAAFNV5IsUyYXtJMZbrvV79Kgb7Jja"></vue-recaptcha>

  

   


    <v-btn
      color="error"
      class="mr-4"
      type="submit"
    >
     {{ $t("contactUs.sendMessage") }}
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
 import emailjs from 'emailjs-com';
export default {
  name: "ContactUs",
  components: {
    VueRecaptcha
  },
  data() {
    return {
      tabs: null,
      name : '',
      email : '',
      message : '',
      phoneNumber : ''
    };
  },
  methods : {
      sendEmail() {
      try {
        console.log(this.message)
        emailjs.send('service_p5f0my8', 'template_mblg577', {
          from_name: this.name,
          email: this.email,
          message: this.message,
          phoneNumber : this.phoneNumber,
        },'2EvflXwJgDdtdchnd')

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
      this.phoneNumber = ''
    },
  }
  
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