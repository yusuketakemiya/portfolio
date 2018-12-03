// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import MenueSwipe from '@/components/MenueSwipe'
import SAOLikeMenue from './components/SAOLikeMenue'
import ArrowBox from './components/ArrowBox'
import SkillPanel from './components/SkillPanel'
import SkillPanelUP from './components/SkillPanelUP'
import SkillPanelName from './components/SkillPanelName'
import SkillPanelDown from './components/SkillPanelDown'
import SkillIcon from './components/SkillIcon'
import UserIcon from './components/UserIcon'
import HistoryPanel from './components/HistoryPanel'
import NodeItem from './components/NodeItem'

Vue.config.productionTip = false

// load library
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'vue-touch'})

Vue.component('menue-swipe', MenueSwipe)
Vue.component('sao-menue', SAOLikeMenue)
Vue.component('arrow-box', ArrowBox)
Vue.component('skill-panel', SkillPanel)
Vue.component('skill-panelup', SkillPanelUP)
Vue.component('skill-panelname', SkillPanelName)
Vue.component('skill-paneldown', SkillPanelDown)
Vue.component('skill-icon', SkillIcon)
Vue.component('user-icon', UserIcon)
Vue.component('history-panel', HistoryPanel)
Vue.component('node-item', NodeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
