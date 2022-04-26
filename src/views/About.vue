<template>
    <v-container>
      <v-row class="mt-4 justify-center align-center">
        <v-col lg="6" md="6" sm="12">
          <h1>Latest Product</h1>
          <p>
            Iron ores are rocks and minerals from which metallic iron can be
            economically extracted. The ores are usually rich in iron oxides and
            vary in color from dark grey, bright yellow, or deep purple to rusty
            red. The iron is usually found in the form of magnetite, hematite,
            goethite, limonite or siderite.
          </p>
          <!-- <v-btn to="/" x-small color="orange"> Learn More </v-btn> -->
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-img src="@/assets/logo kobaja v.2 trans.png"></v-img>
        </v-col>
      </v-row>
      <!-- Tabs -->
        <v-tabs v-model="tabs" background-color="transparent " dark>
        <v-tab background-color="transparent " dark> All </v-tab>
        <v-tab> Product 1 </v-tab>
        <v-tab> Product 2 </v-tab>
        <v-tab> Product 3 </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row class="tab">
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/alloyOre.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/alumina.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/anthracite.jpeg" class="img-fluid"></v-img>
                </v-col>
                 <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/carbonRiser.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/coke.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/ferroAlloys.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/cokingCoal.jpg" class="img-fluid"></v-img>
                </v-col>
                  <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/highCalorieCoal.jpg" class="img-fluid"></v-img>
                </v-col>
                  <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/hotBriquettedIron.jpg" class="img-fluid"></v-img>
                </v-col>
                  <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/ironOres.jpg" class="img-fluid"></v-img>
                </v-col>
                  <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/petroleumCoke.jpg" class="img-fluid"></v-img>
                </v-col>
                  <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/pigIron.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/scrap.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/spongeIron.jpg" class="img-fluid"></v-img>
                </v-col>
                <v-col sm="4" md="4" lg="3">
                  <v-img src="@/assets/thermalCoal.jpg" class="img-fluid"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item class="mt-5">
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="container-tab">
              <v-row>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="container-tab">
              <v-row>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
                <v-col cols="4">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      tabs: null,
    };
  },
};
</script>
<style scoped>
/* .home {
  background-color: black;
} */
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
/* .basil {
  background-color: black  !important;
}
.basil--text {
  color: black !important;
}
.v-tabs-items {
  background-color: transparent !important;
} */
.img-fluid{
  max-width : 400px;
  min-height: 250px;
  max-height: 135px;
  object-fit: cover;
}
.row.tab {
  background-color: #121212;
}
@media (min-width: 1200px) {
    .container{
        max-width: 1350px;
    }
}
</style>
