<template>

  <v-toolbar :color="color" dark app clipped-left fixed>
    <v-toolbar-side-icon @click.native="navToggle" v-if="authStatus"></v-toolbar-side-icon>
    <a href="/" style="text-decoration: none">
      <span class="title ml-3 mr-5"
        style="color: white;" 
      >
          &nbsp;<span class="text">MS</span>
      </span>
    </a> 

    <span class="text"
      v-if="authStatus"
    >
      <h3>
         Restaurant Name: <b>{{ company.name }}</b>
      </h3>
    </span>
    &nbsp;
    <a href="/settings" style="color: white;" v-if="authStatus">
      [Change company]
    </a>
    
    <!-- <v-text-field
      solo-inverted
      flat
      label="Search"
      prepend-icon="search"
    ></v-text-field> -->
    <v-spacer></v-spacer> 

    <span
      v-if="authStatus"
    >
      <b>
        Logged In as : {{ user.name }} ( {{ user.email }} )
      </b>
    </span> &nbsp;

    <!-- If the user is logged in  -->
    <v-btn color="info" v-if="authStatus"
      @click="logout"
    >Logout</v-btn>

    <!-- If the user is not logged in -->
    <v-btn color="success" v-if="! authStatus" to="/login">Login</v-btn>
    <v-btn color="error" v-if="! authStatus" to="/register">Register</v-btn>
  </v-toolbar>

</template>

<script type="text/javascript">

  import Form from 'helpers/Form.js'

  import { mapGetters, mapActions } from 'vuex'
  
  export default { 

    data: () => ({
      form: new Form 
    }),

    computed: {
    
      ...mapGetters([
        'user', 'company', 'color'
      ]),

      authStatus() { 
        if(this.user.api_token && this.user.id) { 

          this.navToggle({
            opened: true
          })

          return true;
        } 

        this.navToggle({
          opened: false
        })

        return false; 
      }
    },  

    mounted() {
      this.authInitialize()
      this.configInitialize();

      if(! this.authStatus)
          this.$route.fullPath == "/register" ? '' : this.$router.push('/login') 
      else { 
        this.$route.fullPath == "/login" ? this.$router.push('/') : ''
      } 

    },

    methods: {
      ...mapActions([
        'navToggle', 'authInitialize', 'authRemove', 'configInitialize'
      ]),

      logout() {
        this.authRemove();
        this.authInitialize(); 

        this.$router.push('/login')
      }
    }
  }
</script>