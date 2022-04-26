<template>
  <div>
    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-10">
        <v-col>
          <p class="trivia">
            {{ $t("message.test") }}
          </p>
          <p class="trivia">
            Pt. <span class="trivia-01"> Kobaja </span>
            <span class="trivia-02"> Prima </span>
            <span class="trivia-03"> Nusantara </span>
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Card -->
    <v-container>
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
          <v-img src="@/assets/gunung.jpg" height="225px">
            <v-card-title class="text-h6 white--text">
              <v-row>
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
    </v-container>

    <!-- Card -->
    <v-container>
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
          <v-img src="@/assets/gunung.jpg" height="225px">
            <v-card-title class="text-h6 white--text">
              <v-row>
                <v-col cols="6">
                  <p class="mt-8 subheading text-left">Make a deal with us!</p>
                  <v-btn to="/" x-small text color="white"> Learn More </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
          </v-img>
        </v-card>
      </v-hover>
    </v-container>

    <!-- Card -->
    <v-container>
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
          <v-img src="@/assets/gunung.jpg" height="225px">
            <v-card-title class="text-h6 white--text">
              <v-row>
                <v-col cols="6">
                  <p class="mt-8 subheading text-left">Learn more about us!</p>
                  <v-btn to="/" x-small text color="white"> Learn More </v-btn>
                </v-col>
              </v-row>
            </v-card-title>
          </v-img>
        </v-card>
      </v-hover>
    </v-container>

    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-2 mb-10">
        <v-col>
          <p class="trivia">
            We provide the best <span class="trivia-01"> value </span> and
            <span class="trivia-02"> solution </span>
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
  color: #c23331;
}
.trivia-03 {
  color: #414cf0;
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
    .container{
        max-width: 1350px;
    }
}
</style>
