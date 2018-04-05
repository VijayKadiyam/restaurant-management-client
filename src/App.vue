<template>
  <v-app id="productms">

    <Toolbar></Toolbar>

    <Nav></Nav> 

    <Main></Main>
    
  </v-app>
</template>

<script>
  
  import Toolbar from 'views/layouts/Toolbar.vue'
  import Nav from 'views/layouts/Nav.vue'
  import Main from 'views/layouts/Main.vue'

  export default { 
    
    components: {
      Toolbar, Nav, Main
    }
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
  }
</style>