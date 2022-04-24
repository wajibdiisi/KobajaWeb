import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue';
//import { colors } from 'vuetify/lib';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'fa4'
    },
    theme: {
        dark: true,
        options: { customProperties: true },
        themes: {
          dark: {
  
            // Color is applied to selected drop down item
            primary: '#0064A2',
            
            // Uncomment this to make things worse
            // 'primary--text': '#FF00FF'
          }
        }
      } 
});
