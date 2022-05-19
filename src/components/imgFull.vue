<template>
  <!-- <div class="backdrop-confirm" @click.self="closeConfirm"> -->
  <!-- <div class="modal-container"> -->
 
 <div class="text-center">
   
    <v-dialog v-model="dialog" width="1000">
      <template v-slot:activator="{ on, attrs }">
       
             <v-img :src="data.photo" class="img-fluid" v-bind="attrs" v-on="on"></v-img>
      </template>
  
      <v-card flat color="#404040">
        <v-row justify="center" no-gutters class="mx-3">
          <v-col
            sm="8"
            md="8"
            lg="8"
            cols="12"
            class="d-flex justify-start align-center py-7"
          >
            <v-card-text>
              <v-card-title class="title_produk_pop">{{data.name}}</v-card-title>
              <hr>
              <v-card-subtitle class="desc_title_produk_pop"
                v-if="$i18n.locale =='en'">{{data.description_en}}</v-card-subtitle
              >
              <v-card-subtitle class="desc_title_produk_pop"
                v-if="$i18n.locale =='id'">{{data.description_id}}</v-card-subtitle
              >
              <!-- <h1 class="mb-4">Latest Product</h1>
              <p>
                Iron ores are rocks and minerals from which metallic iron can be
                economically extracted. The ores are usually rich in iron oxides
                and vary in color from dark grey, bright yellow, or deep purple
                to rusty red. The iron is usually found in the form of
                magnetite, hematite, goethite, limonite or siderite.
              </p> -->
            </v-card-text>
          </v-col>
          <v-col
            sm="4"
            md="4"
            lg="4"
            cols="12"
            class="d-flex py-7 mx-auto justify-center"
          >
            <v-img :src="data.photo" max-width="300"></v-img>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    <!-- <slot></slot>
    <button class="btn btn-confirm-back" @click="closeConfirm">Close</button> -->
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "Modal",
  props :['data'],
  data(){
    return {
      dialog : false
    }
  },
  methods: {
    closeConfirm() {
      this.$emit("close");
    },
    submitBooklet() {
      this.$emit("submit");
    },
  },
};
</script>

<style scoped>
.title_produk_pop{
  font-size: 2rem;
}
.desc_title_produk_pop{
  font-size: 1.2rem;
  line-height: 1.7rem;
  text-align: justify;
}
.custom-icon {
  margin: 5px 29px;
  color: #ed7d2b;
}
.modal-container {
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow: auto;
  width: 100vw;
  height: 100vh;
}
.backdrop-confirm {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 10;
}
.btn-confirm-submit {
  background-color: #ed7d2b;
  margin: 10px;
  color: white;
}
.btn-confirm-submit:hover {
  border: 2px #ed7d2b solid;
  background-color: white;
}
.btn-confirm-back {
  border: 2px #ed7d2b solid;
  margin: 10px;
  color: #ed7d2b;
}
.btn-confirm-back:hover {
  background-color: #ed7d2b;
  color: white;
}
.icon {
  margin: 0 auto;
}
.img-fluid {
  max-width: 400px;
  min-height: 250px;
  max-height: 135px;
  object-fit: cover;
}
</style>