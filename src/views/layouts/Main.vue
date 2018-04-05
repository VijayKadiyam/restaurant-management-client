<template>
  <v-content>
    
    <router-view></router-view>

  </v-content>
</template>

<script type="text/javascript">
  
  export default {
    props: {
      source: String
    },
  }
</script>