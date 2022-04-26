<template>
  <div>
    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-4 justify-center align-center">
        <v-col lg="6" md="6" sm="12">
          <h1>Tentang Pt. Kobaja Prima Nusantara Prima</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            finibus faucibus quam, quis vulputate est consequat vel.
          </p>
          <!-- <v-btn to="/" x-small color="orange"> Learn More </v-btn> -->
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-img src="@/assets/logo kobaja v.2 trans.png"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <hr />
      <v-card flat outlined color="transparent">
        <v-container class="container-tab">
          <v-row>
            <v-col cols="12">
              <div class="mt-2">
                <h2 class="font-weight-regular">
                  Main strategy of PT Kobaja Nusantara Prima is leading the
                  company into the best and trustable company in providing steel
                  trading and raw material. We are giving the best value and
                  solution to the customer. We develop steel trading and other
                  raw minerals as supporting materials in the steel industry to
                  Improv human resources development continually. We run our
                  business company based on the regulation from the government.
                  We want to keep on protecting the environment actively.
                </h2>
                <!-- <h3 class="font-weight-regular">
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
                  ● Running the business company based on the regulation from
                  the government.
                </h3>
                <h3 class="font-weight-regular">
                  ● Keep on protecting the environment actively.
                </h3> -->

                <!-- <h1 class="text-center text-uppercase mt-15">
                  Scope of The Company Business
                </h1>
                <h3 class="font-weight-regular text-center mt-2">
                  ● Trading Steel and Raw Mineral of Steel industry and other
                  industries.
                </h3>
                <v-col cols="12">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col> -->
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

      <hr />
      <v-card flat outlined color="transparent">
        <v-container class="container-tab">
          <v-row>
            <v-col cols="12">
              <h1 class="text-center text-uppercase">
                Vision and Mission of the Company
              </h1>
              <v-row class="mt-4 justify-center align-center">
                <v-col lg="6" md="6" sm="12">
                  <v-img src="@/assets/visimisi.jpg"></v-img>
                </v-col>
                <v-col lg="6" md="6" sm="12">
                  <h2>Vision</h2>
                  <h3 class="font-weight-regular mt-2">
                    Leading the company into the best company in providing steel
                    trading and raw material for the steel industry.
                  </h3>
                  <h2>Mission</h2>
                  <h3 class="font-weight-regular mt-2">
                    Providing high quality and the best price of steel trading
                    and raw material for the steel industry and other related
                    industries.
                  </h3>
                  <h2>Value</h2>
                  <h3 class="font-weight-regular mt-2">
                    Providing the best value and solution to the customer.
                  </h3>
                </v-col>
              </v-row>

              <!-- <v-row class="mt-4 justify-center align-center">
                <v-col lg="6" md="6" sm="12">
                  <h2>Mission</h2>
                  <h3 class="font-weight-regular mt-2">
                    Providing high quality and the best price of steel trading
                    and raw material for the steel industry and other related
                    industries.
                  </h3>
                </v-col>
                <v-col lg="6" md="6" sm="12">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </v-row>

              <v-row class="mt-4 justify-center align-center">
                <v-col lg="6" md="6" sm="12">
                  <h2>Value</h2>
                  <h3 class="font-weight-regular mt-2">
                    Providing the best value and solution to the customer.
                  </h3>
                </v-col>
                <v-col lg="6" md="6" sm="12">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </v-row> -->
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <hr />
      <v-card flat outlined color="transparent">
        <v-container class="container-tab">
          <v-row>
            <v-col cols="12">
              <div class="text-center mt-2">
                <h1 class="text-center text-uppercase mt-15">
                  Our scope of business
                </h1>
                <h3 class="font-weight-regular text-center mt-2">
                  Trading Steel and Raw Mineral of Steel industry and other
                  industries.
                </h3>
                <v-col cols="12">
                  <v-img src="@/assets/scope.png"></v-img>
                </v-col>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <hr />
      <v-card flat outlined color="transparent">
        <v-container class="container-tab">
          <v-row>
            <v-col cols="12">
              <div class="text-center mt-2">
                <h1 class="text-center text-uppercase mt-15">
                  Organizational Structures
                </h1>
                <v-col cols="12">
                  <v-img src="@/assets/index.jpg"></v-img>
                </v-col>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
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
