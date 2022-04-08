<template>
  <div class="home">
    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-4 justify-center align-center">
        <v-col lg="6" md="6" sm="12">
          <h1>Latest Product 1.0</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            finibus faucibus quam, quis vulputate est consequat vel.
          </p>
          <v-btn to="/" x-small color="orange"> Learn More </v-btn>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-img src="@/assets/logo kobaja v.2 trans.png"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-tabs v-model="tabs" background-color="transparent " dark>
        <v-tab background-color="transparent " dark> Company Profile </v-tab>
        <v-tab> Vision & Mision </v-tab>
        <v-tab> Company History </v-tab>
        <v-tab> Management </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item class="mt-5">
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row>
                <v-col cols="12">
                  <h1 class="text-center text-uppercase">
                    Strategy of the Company
                  </h1>
                  <div class="text-center mt-2">
                    <h3 class="font-weight-regular">
                      Main strategy of PT Kobaja Nusantara Prima is leading the
                      company into the best and trustable company in providing
                      steel trading and raw material.
                    </h3>
                    <h3 class="font-weight-regular">
                      ● Giving the best value and solution to the customer.
                    </h3>
                    <h3 class="font-weight-regular">
                      ● Developing steel trading and other raw minerals as
                      supporting materials in the steel industry.
                    </h3>
                    <h3 class="font-weight-regular">
                      ● Improving human resources development continually.
                    </h3>
                    <h3 class="font-weight-regular">
                      ● running the business company based on the regulation
                      from the government.
                    </h3>
                    <h3 class="font-weight-regular">
                      ● Keep on protecting the environment actively.
                    </h3>

                    <h1 class="text-center text-uppercase mt-15">
                      Scope of The Company Business
                    </h1>
                    <h3 class="font-weight-regular text-center mt-2">
                      ● Trading Steel and Raw Mineral of Steel industry and
                      other industries.
                    </h3>
                    <v-col cols="12">
                      <v-img src="@/assets/index.jpg"></v-img>
                    </v-col>
                  </div>
                </v-col>
              </v-row>
            </v-container>

            <!-- <v-container class="container-tab">
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
            </v-container> -->
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat color="basil">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              totam esse quasi nulla sed? Maxime consequuntur corrupti explicabo
              eaque ipsam.
            </p>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-img src="@/assets/logo kobaja v.2 trans.png"></v-img>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-img src="@/assets/logo kobaja v.2 trans.png"></v-img>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
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
<style>
.home {
  background-color: black;
}
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
</style>
