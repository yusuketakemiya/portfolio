import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    main_menue: {
      items: [
        {
          id: 1,
          image: require('../assets/icons/man.png')
        },
        {
          id: 2,
          image: require('../assets/icons/mans.png')
        },
        {
          id: 3,
          image: require('../assets/icons/talk.png')
        },
        {
          id: 4,
          image: require('../assets/icons/share.png')
        },
        {
          id: 5,
          image: require('../assets/icons/setting.png')
        }
      ]
    }
  },
  actions,
  mutations
})
