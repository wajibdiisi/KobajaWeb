<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>Web</v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-card-actions>
          <v-btn class="about" to="/about" x-small color="orange" text>
            About Us
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="about" to="/about" x-small color="orange" text>
            About Us
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="about" to="/about" x-small color="orange" text>
            About Us
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn class="about" to="/about" x-small color="orange" text>
            About Us
          </v-btn>
        </v-card-actions>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/about">About</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/contact"
                  >Contact</router-link
                ></v-list-item-title
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
