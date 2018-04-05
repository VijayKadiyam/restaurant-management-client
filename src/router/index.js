import VueRouter from 'vue-router'
import routes from './routes.js'
import store from 'store'

const router = new VueRouter({
  routes,
  mode: 'history'
})

// This is to force the user to select a company
router.afterEach((to, from) => {
  if(isNaN(store.getters.company.id) && store.getters.user.id) { 
    if(! to.path.includes("/companies"))
      router.push('/settings')
  } 
})

export default router;