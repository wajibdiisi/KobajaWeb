<template>
  <div>
    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-200 justify-center align-center">
        <v-img
          class="mt-200"
          max-height="350"
          max-width="250"
          src="@/assets/logo kobaja v.2 trans.png"
        ></v-img>
        <v-row class="my-7 justify-center align-center">
          <v-col cols="12">
          <h1 class="title_about text-center">PT. Kobaja Prima Nusantara Prima</h1></v-col>
          <p class="mx-10 mt-7 text--secondary desc_about">
            {{ $t("aboutUs.description") }}
          </p>
          <!-- <v-btn to="/" x-small color="orange"> Learn More </v-btn> -->
        </v-row>
      </v-row>
    </v-container>

    <v-container>
      <hr />
      <v-card flat outlined color="transparent">
        <v-container class="container-tab">
          <v-row>
            <v-col cols="12">
              <div class="mt-2">
                <h2 class="sub_divisi_about">{{ $t("aboutUs.businessPreview") }}</h2>
                <v-img
                  class="my-3"
                  max-height="250"
                  src="@/assets/bannerabout.jpg"
                ></v-img>
                <p class="font-weight-regular text--secondary desc_about">
                 {{ $t("aboutUs.businessReviewDescription") }}
                </p>
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
          <v-row>
            <v-col>
              <h2 class="sub_divisi_about">{{ $t("aboutUs.visionTitle") }}</h2>
              <br>
              <p class="font-weight-regular text--secondary desc_about">
                {{ $t("aboutUs.visionDescription") }}
              </p>
            </v-col>
            <v-col>
              <h2 class="sub_divisi_about">{{ $t("aboutUs.missionTitle") }}</h2>
              <br>
              <p class="font-weight-regular text--secondary desc_about">
                {{ $t("aboutUs.missionDescription") }}
              </p>
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
              <h2 class="sub_divisi_about">{{ $t("aboutUs.businessScopeTitle") }}</h2>
              <br>
              <p class="font-weight-regular text--secondary desc_about">
                {{ $t("aboutUs.businessScopeDescription") }}
              </p>
              <v-img
                src="@/assets/scope.png"
                width="1000"
                class="d-flex mx-auto my-4"
              ></v-img>
              <!-- <v-row class="mt-4 justify-center align-center">
                <v-col lg="6" md="6" sm="12">
                  <v-img src="@/assets/logo kobaja v.2 trans.png"></v-img>
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
              </v-row> -->

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
              <div class="mt-2">
                <h2 class="sub_divisi_about">Our Organizational Structure</h2>
                <v-row class="mt-4">
                  <v-col cols="12" md="3" class="d-flex justify-center">
                    <v-card height="auto" width="auto">
                      <v-img
                        src="@/assets/People2.png"
                        max-width="250"
                        class="mx-8 mt-4"
                      >
                      </v-img>
                      <v-card-text class="pt-2">
                        <div class="text-h6 text-center desc_about">
                          GA Marlinawati
                        </div>
                        <div class="font-weight-medium grey--text text-center">
                          Comissioner
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>

                   <v-col cols="12" md="3"  class="d-flex justify-center">
                    <v-card height="auto" width="auto">
                      <v-img
                        src="@/assets/People1.png"
                        max-width="250"
                        class="mx-8 mt-4"
                      >
                      </v-img>
                      <v-card-text class="pt-2">
                        <div class="text-h6 font-weight-regular text-center">
                          IWG Darmayadi
                        </div>
                        <div class="font-weight-medium grey--text text-center">
                          Director
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>

                   <v-col cols="12" md="3" class="d-flex justify-center">
                    <v-card height="auto" width="auto">
                      <v-img
                        src="@/assets/People3.png"
                        max-width="250"
                        class="mx-8 mt-4"
                      >
                      </v-img>
                      <v-card-text class="pt-2">
                        <div class="text-h6 font-weight-regular text-center">
                          Yang Yung Mo
                        </div>
                        <div class="font-weight-medium grey--text text-center">
                          Commercial Director 
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                   <v-col cols="12" md="3"  class="d-flex justify-center">
                    <v-card height="auto" width="auto">
                      <v-img
                        src="@/assets/People4.png"
                        max-width="250"
                        class="mx-8 mt-4"
                      >
                      </v-img>
                      <v-card-text class="pt-2">
                        <div class="text-h6 font-weight-regular text-center">
                          Triesna Mahasti
                        </div>
                        <div class="font-weight-medium grey--text text-center">
                          Finance Director 
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script scoped>
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
.title_about{
  font-size: 2.5rem;
}
.desc_about{
  font-size: 1.4rem;
  text-align: justify;
}
.sub_divisi_about{
  font-size: 2rem;
}
@media (min-width: 1200px) {
    .container{
        max-width: 1350px;
    }
}

</style>
