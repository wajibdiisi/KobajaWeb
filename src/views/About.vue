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
      <v-tabs
          v-model="tabs"
           background-color="transparent "
            dark
        >
          <v-tab color>
            Product 1
          </v-tab>
           <v-tab>
            Product 2
          </v-tab>
            <v-tab>
            Product 3
          </v-tab>
           <v-tab>
           All
          </v-tab>
        </v-tabs>

      <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
           <v-img src="@/assets/logo kobaja v.2 trans.png"></v-img>
          </v-card-text>
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
   data () {
      return {
        tabs: null,
      }
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
</style>
