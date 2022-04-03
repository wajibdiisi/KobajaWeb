<template>
  <div class="home">
    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-10">
        <v-col>
         <p class="trivia">Lorem ipsum <span class="trivia-01"> dolor </span> sit amet consectetur adipisicing elit. Unde eos fugiat, optio aperiam pariatur et  <span class="trivia-02"> minus </span> reprehenderit provident <span class="trivia-03"> quam </span>. Reprehenderit?</p>
        </v-col>
      </v-row>
    </v-container>

      <!-- Card -->
    <v-container>
      <v-card class="elevation-1 mt-10 mb-10 " rounded="2">
      <v-card-title primary-title class="layout justify-center">
        <h1>TITLE</h1>
      </v-card-title>
      <v-card-text>
        ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus enim
        et justo eleifend pharetra. Nam consectetur, nulla in viverra mattis,
        ipsum libero faucibus odio, at eleifend mauris arcu non nibh. Aliquam
        congue augue sed sapien tristique, eget faucibus risus pulvinar. Nullam
        ut nunc felis.
      </v-card-text>
    </v-card>
    </v-container>
    
       <!-- Card -->
    <v-container>
      <v-card class="elevation-1 mt-10 mb-10 " rounded="2">
      <v-card-title primary-title class="layout justify-center">
        <h1>TITLE</h1>
      </v-card-title>
      <v-card-text>
        ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus enim
        et justo eleifend pharetra. Nam consectetur, nulla in viverra mattis,
        ipsum libero faucibus odio, at eleifend mauris arcu non nibh. Aliquam
        congue augue sed sapien tristique, eget faucibus risus pulvinar. Nullam
        ut nunc felis.
      </v-card-text>
    </v-card>
    </v-container>

        <!-- Card -->
    <v-container>
      <v-card class="elevation-1 mt-10 mb-10 " rounded="2">
      <v-card-title primary-title class="layout justify-center">
        <h1>TITLE</h1>
      </v-card-title>
      <v-card-text>
        ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus enim
        et justo eleifend pharetra. Nam consectetur, nulla in viverra mattis,
        ipsum libero faucibus odio, at eleifend mauris arcu non nibh. Aliquam
        congue augue sed sapien tristique, eget faucibus risus pulvinar. Nullam
        ut nunc felis.
      </v-card-text>
    </v-card>
    </v-container>

    <!-- Tulisan -->
    <v-container>
      <v-row class="mt-2 mb-10">
        <v-col>
         <p class="trivia">Providing the best <span class="trivia-01"> value </span> and  <span class="trivia-02"> solution </span> </p>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style>
.home{
  background-color: black;
}
.trivia{
  font-size: 2.5rem;
  text-align: center;
}
.trivia-01{
  color: #f5bd3c
}
.trivia-02{
  color: #c23331;
}
.trivia-03{
  color: #414CF0
}
</style>
