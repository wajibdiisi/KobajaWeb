<template>
<v-container>
    <v-toolbar flat color="black">
    <v-toolbar-title>
      <v-card-actions>
        <router-link to="/">
          <v-img src="@/assets/logo kobaja v.2 trans.png" class="logo"></v-img>
        </router-link>
      </v-card-actions>
    </v-toolbar-title>
    <v-toolbar-items class="hidden-xs-only">
      <v-card-actions>
        <v-btn to="/" x-small color="white" text> Home </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/about" x-small color="white" text> Product </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/contactus" x-small color="white" text> Contact Us </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/adoption" x-small color="white" text> About Us </v-btn>
      </v-card-actions>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <!-- <v-card-actions>
        <v-btn to="/register" x-small text color="#515151"> Register </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="/login" x-small color="#489FB5" rounded dark> Login </v-btn>
      </v-card-actions> -->
    </v-toolbar-items>
    <div class="hidden-sm-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list class="responsiveMenus">
          <v-list-item>
            <v-list-item-title
              ><v-btn to="/about" x-small color="orange" text>
                About Us
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn to="/adoption" x-small color="orange" text>
                Adopsi
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn to="/care" x-small color="orange" text>
                Care&Training
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn to="/ageconversion" x-small color="orange" text>
                Age Conversion
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn to="/article" x-small color="orange" text>
                Article
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn to="/breeds" x-small color="orange" text>
                Breeds
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><v-btn to="/register" x-small text color="#515151">
                Register
              </v-btn></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn to="/login" x-small text color="#515151">
                Login
              </v-btn></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</v-container>

</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>

<style>
/* .logo::before{
  content: "";
  display: block;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 11em;
  height: 3em;
  background: rgba(240, 240, 240, 0.6);
} */
.logo {
  width: 60px;
  height: 60px;
}
.v-sheet.theme--dark.v-toolbar.v-toolbar--flat.v-app-bar.v-app-bar--fixed.v-app-bar--is-scrolled.black {
background-color: #121212 !important;
}
.v-sheet.theme--dark.v-toolbar.v-toolbar--flat.black {
background-color: #121212 !important;
}
</style>
