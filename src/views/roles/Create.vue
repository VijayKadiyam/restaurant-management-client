<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Add a new role
              <v-btn small color="primary"
                to="/roles"
              >View roles</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="create"
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
                Create User Role
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

    methods: {

      create() {
        this.form.post('/api/roles')
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