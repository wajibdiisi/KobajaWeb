<template>
  <div>
    <v-container class="mb-10">
      <v-row class="my-4 justify-center align-center">
        <v-col lg="6" md="6" sm="12">
          <h1 class="title_produk">{{ $t("product.pageTitle") }}</h1>
          <p class="desc_produk">
            {{ $t("product.pageDesc") }}
          </p>
          <!-- <v-btn to="/" x-small color="orange"> Learn More </v-btn> -->
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-img
            class="img_produk"
            height="300"
            src="https://www.mining-technology.com/wp-content/uploads/sites/19/2020/10/Feature-Image-top-ten-metals-and-mining-companies.jpg"
          >
          </v-img>
        </v-col>
      </v-row>

      <hr />
      <!-- Tabs -->
      <v-tabs v-model="tabs" background-color="transparent " dark class="my-3">
        <!-- <v-tab background-color="transparent " dark> All </v-tab> -->
        <v-tab> {{ $t("product.categoryRaw") }} </v-tab>
        <v-tab> {{ $t("product.categoryEnergy") }} </v-tab>
        <v-tab> {{ $t("product.categoryConsumable") }} </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-col lg="12" md="12" sm="12" style="background: #121212">
            <h2 class="title_tabs">{{ $t("product.categoryRaw") }}</h2>
            <p class="desc_tabs">
              {{ $t("product.categoryRawDesc") }}
            </p>
          </v-col>
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row class="tab">
                <v-col
                  v-for="(product, index) of filteredList"
                  :key="index"
                  sm="4"
                  md="4"
                  lg="3"
                >
                  <imgFull
                    v-if="showImage"
                    @close="toggleImage"
                    :data="product"
                  >
                  </imgFull>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row class="tab">
                <v-col lg="12" md="12" sm="12" style="background: #121212">
                  <h2 class="title_tabs">{{ $t("product.categoryEnergy") }}</h2>
                  <p class="desc_tabs">
                    {{ $t("product.categoryEnergyDesc") }}
                  </p>
                </v-col>
                <v-col
                  v-for="(product, index) of filteredList"
                  :key="index"
                  sm="4"
                  md="4"
                  lg="3"
                >
                  <imgFull
                    v-if="showImage"
                    @close="toggleImage"
                    :data="product"
                  >
                  </imgFull>
                </v-col>
              </v-row>
            </v-container>
          </v-card> </v-tab-item
        ><v-tab-item>
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row class="tab">
                <v-col lg="12" md="12" sm="12" style="background: #121212">
                  <h2 class="title_tabs">
                    {{ $t("product.categoryConsumable") }}
                  </h2>
                  <p class="desc_tabs">
                    {{ $t("product.categoryConsumableDesc") }}
                  </p>
                </v-col>
                <v-col
                  v-for="(product, index) of filteredList"
                  :key="index"
                  sm="4"
                  md="4"
                  lg="3"
                >
                  <imgFull
                    v-if="showImage"
                    @close="toggleImage"
                    :data="product"
                  >
                  </imgFull>
                </v-col>
              </v-row>
            </v-container>
          </v-card> </v-tab-item
        ><v-tab-item>
          <v-card flat color="basil">
            <v-container class="container-tab">
              <v-row class="tab">
                <v-col
                  v-for="(product, index) of filteredList"
                  :key="index"
                  sm="4"
                  md="4"
                  lg="3"
                >
                  <imgFull
                    v-if="showImage"
                    @close="toggleImage"
                    :data="product"
                  >
                  </imgFull>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import imgFull from "@/components/imgFull.vue";
export default {
  components: {
    imgFull,
  },
  name: "Home",
  data() {
    return {
      currentTab: "",
      tabs: null,
      products: [],
      showImage: [],
    };
  },
  async created() {
    try {
      const resp = await axios.get(
        "https://kobaja.onrender.com/kobaja-product"
      );
      this.products = resp.data.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
  methods: {
    toggleImage(id) {
      this.showImage[id] = false;
    },
    imageDetail(id) {
      this.showImage[id] = true;
    },
  },
  computed: {
    filteredList: function () {
      return this.products.filter((product) => {
        if (this.tabs == 0) {
          return product.category.includes("Raw Materials");
        } else if (this.tabs == 1) return product.category.includes("Energy");
        else if (this.tabs == 2) return product.category.includes("Consumable");
      });
    },
  },
};
</script>
<style scoped>
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
/* .basil {
  background-color: black  !important;
}
.basil--text {
  color: black !important;
}
.v-tabs-items {
  background-color: transparent !important;
} */
.img-fluid {
  max-width: 400px;
  min-height: 250px;
  max-height: 135px;
  object-fit: cover;
}
.row.tab {
  background-color: #121212;
}

.title_produk {
  font-size: 2.5rem;
}
.desc_produk {
  font-size: 1.5rem;
}
.title_tabs {
  font-size: 1.75rem;
}
.desc_tabs {
  font-size: 1.25rem;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1350px;
  }
}
</style>
