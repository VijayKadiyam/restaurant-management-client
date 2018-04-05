import * as types from '../mutation-types.js'

const state = {
  api: {
    baseUrl: 'http://localhost:8080/'
  },
  company: {
    id: Number,
    name: ''
  },
  color: 'light-blue'
}

const mutations = {
  // To set config in the local storage
  [types.CONFIG_SET] (state, config) {
    if(config.hasOwnProperty('company'))
      localStorage.setItem('companyId', config.company.id)
    if(config.hasOwnProperty('company'))
      localStorage.setItem('companyName', config.company.name) 
    if(config.hasOwnProperty('color'))
      localStorage.setItem('color', config.color) 
  },

  // To initialize config state variables
  [types.CONFIG_INITIALIZE] (state) {
    state.company.id = parseInt(localStorage.getItem('companyId'));
    state.company.name = localStorage.getItem('companyName');
    if(localStorage.getItem('color'))
      state.color = localStorage.getItem('color');
  },

  // To remove the localStorage config values
  [types.CONFIG_REMOVE] (state) {
    localStorage.removeItem('companyId')
    localStorage.removeItem('companyName')
  }


}

const actions = {
  // To set config in the local storage
   configSet( { commit }, config ) {
    commit(types.CONFIG_SET, config)
  },

  // To initialize config in the local storage
  configInitialize( { commit }) {
    commit(types.CONFIG_INITIALIZE);
  },

  // To remove local storage config variables
  configRemove( { commit }) {
    commit(types.CONFIG_REMOVE);
  }
}

export default {
  state, mutations, actions
}