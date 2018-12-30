import Vue from 'vue';
import VueYouTubeEmbed from 'vue-youtube-embed';
import VueResource from 'vue-resource';
import router from './router';
import App from './App.vue';

import 'css/app.styl';

Vue.use(VueResource);
Vue.use(VueYouTubeEmbed);

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
