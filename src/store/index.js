import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import * as getters from './getters.js'
import * as actions from './actions.js'

import app from 'store/modules/app.js'
import auth from 'store/modules/auth.js'
import config from 'store/modules/config.js'

const store = new Vuex.Store({
  modules: {
    app, auth, config
  },
  getters,
  actions
})

export default store;