<template>
  <v-app>
    <v-app-bar app color="black" flat>
      <Header />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <!-- <v-footer> -->
      <Footer />
    <!-- </v-footer> -->
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
