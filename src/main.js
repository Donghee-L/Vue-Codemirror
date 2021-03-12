import Vue from 'vue'
import App from './App.vue'
import VueCodeHighlight from "vue-code-highlight"
import Codemirror from "vue-codemirror"
import "codemirror/lib/codemirror.css"

Vue.use(VueCodeHighlight)
Vue.use(Codemirror)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
