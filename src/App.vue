<template>
  <v-app>
      <Header />
    <router-view></router-view>

    <!-- <v-footer>
      <Footer />
    </v-footer> -->
  </v-app>
</template>

<script>
import Header from "./components/common/Header";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  })
};
</script>
