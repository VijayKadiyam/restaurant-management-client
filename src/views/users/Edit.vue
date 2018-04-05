<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Edit user details
              <v-btn small color="primary"
                to="/users"
              >View users</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="update"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="person" name="name" label="Name" type="text"
                ref="name"
                v-model="form.name"
                :rules="[() => !form.errors.has('name') || form.errors.get('name') ]"
              ></v-text-field>

              <v-text-field prepend-icon="email" name="email" label="Email" type="email"
                :disabled=true
                ref="email"
                v-model="form.email"
                :rules="[() => !form.errors.has('email') || form.errors.get('email') ]"
              ></v-text-field> 

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Update user details
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
        name: '' 
      })
    }),

    mounted() {

      this.form.get(`/api/users/${this.$route.params.user_id}`)
        .then(data  =>  {
          this.form = new Form(data.data); 
        })
        .catch(errors => {

        })

    },

    methods: {

      update() {
        this.form.patch(`/api/users/${this.$route.params.user_id}`)
          .then(data  =>  {
            this.$router.push('/users');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }
    }
  }
</script>