import * as types from './mutation-types.js'

export const navToggle = ({ commit }, config) => {
  commit(types.NAV_TOGGLE, config);
} 