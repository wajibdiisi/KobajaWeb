<template>
  <div>
    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-10">
        <v-col>
          <p class="trivia">
            {{ $t("home.description.firstText") }}
            <span class="trivia-01">
              {{ $t("home.description.firstColorText") }}</span
            >
            {{ $t("home.description.secondText") }}
            <span class="trivia-04">
              {{ $t("home.description.secondColorText") }}
            </span>
          </p>
          <!-- <p class="trivia">
            Pt. <span class="trivia-01"> Kobaja </span>
            <span class="trivia-02"> Prima </span>
            <span class="trivia-03"> Nusantara </span>
          </p> -->
        </v-col>
      </v-row>
    </v-container>

    <!-- Card -->
    <!-- <v-container>
      <v-hover v-slot="{ hover }">
        <v-card
          width="auto"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          height="450px"
        >
          <v-img
            lazy-src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            max-height="450px"
          >
            <v-card-title class="text-h6 white--text">
              <v-row align="center" justify="start">
                <v-col cols="6">
                  <p class="mt-8 subheading text-left">
                    More about our product!
                  </p>
                  <v-btn to="/" x-small text color="white"> Learn More </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
          </v-img>
        </v-card>
      </v-hover>
    </v-container> -->

    <!-- Card -->
    <v-container>
      <v-hover class="my-2" v-slot="{ hover }">
        <v-card
          width="auto"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          img="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          height="450px"
        >
          <v-row style="height: 450px" align="center">
            <v-col>
              <v-card-title class="text-h4 font-weight-regular mx-4">
                {{ $t("home.card.productTitle") }}
              </v-card-title>
              <v-card-subtitle class="text-h6 font-weight-light mx-4">
                {{ $t("home.card.productDesc") }}
              </v-card-subtitle>
              <v-card-actions class="d-flex mx-5">
                <v-btn to="/product" small plain text color="white">
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-hover>
    </v-container>

    <!-- Card -->
    <v-container>
      <v-hover class="my-2" v-slot="{ hover }">
        <v-card
          width="auto"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          img="https://images.unsplash.com/photo-1613970351372-9804e380bd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          height="450px"
        >
          <v-row style="height: 450px" align="center">
            <v-col>
              <v-card-title class="text-h4 font-weight-regular mx-4">
                {{ $t("home.card.aboutTitle") }}
              </v-card-title>
              <v-card-subtitle class="text-h6 font-weight-light mx-4">
                {{ $t("home.card.aboutDesc") }}
              </v-card-subtitle>
              <v-card-actions class="d-flex mx-5">
                <v-btn to="/about-us" small plain text color="white">
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-hover>
    </v-container>

    <!-- Card -->
    <v-container>
      <v-hover class="my-2" v-slot="{ hover }">
        <v-card
          width="auto"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          img="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          height="450px"
        >
          <v-row style="height: 450px" align="center">
            <v-col>
              <v-card-title class="text-h4 font-weight-regular mx-4">
                {{ $t("home.card.contactTitle") }}
              </v-card-title>
              <v-card-subtitle class="text-h6 font-weight-light mx-4">
                {{ $t("home.card.contactDesc") }}
              </v-card-subtitle>
              <v-card-actions class="d-flex mx-5">
                <v-btn to="/contactus" small plain text color="white">
                  Learn More
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-hover>
    </v-container>

    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-2 mb-10">
        <v-col>
          <p class="trivia" v-if="$i18n.locale == 'en'">
            {{ $t("home.bestValue.provideBest") }}
            <span class="trivia-01"> {{ $t("home.bestValue.value") }} </span>
            {{ $t("home.bestValue.and") }}
            <span class="trivia-02"> {{ $t("home.bestValue.solution") }} </span>
          </p>
          <p class="trivia" v-if="$i18n.locale == 'id'">
            {{ $t("home.bestValue.provideBest") }}
            <span class="trivia-01"> {{ $t("home.bestValue.value") }} </span>
            {{ $t("home.bestValue.and") }}
            <span class="trivia-02"> {{ $t("home.bestValue.solution") }} </span>
            terbaik
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {};
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
  color: #3ac569;
}
.trivia-03 {
  color: #414cf0;
}
.trivia-04 {
  color: #3ac569;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1350px;
  }
}
</style>
