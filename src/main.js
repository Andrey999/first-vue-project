import Vue from 'vue'
import App from './App.vue'
import Cars from './Cars.vue'


Vue.component('Cars',{
  template: 'Cars'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
