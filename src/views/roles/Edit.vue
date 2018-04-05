<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Edit role
              <v-btn small color="primary"
                to="/roles"
              >View roles</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="update"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="camera_roll" name="role" label="Role" id="role" type="text" 
                ref="role"
                v-model="form.role"
                :rules="[() => !form.errors.has('role') || form.errors.get('role') ]"
              ></v-text-field>  

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Update Role
              </v-btn>
            </v-card-actions>
            
          </form> 

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="text/javascript">
  
  import Form from 'helpers/Form.js'

  export default {

    data: () => ({
      form: new Form({
        role: ''
      })
    }),

    mounted() {
      this.form.get(`/api/roles/${this.$route.params.role_id}`)
        .then(data => {
          this.form = new Form(data.data)
        })
    },

    methods: {

      update() {
        this.form.patch(`/api/roles/${this.$route.params.role_id}`)
          .then(data  =>  {
            this.$router.push('/roles');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }
    }
  }
</script>