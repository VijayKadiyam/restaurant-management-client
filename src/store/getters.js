const api     = state => state.config.api;
const company = state => state.config.company;
const color   = state =>  state.config.color;
const nav     = state => state.app.nav;
const user    = state => state.auth.user;


export {
  api, company, color, nav, user 
} 