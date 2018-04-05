<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Edit measurement detail
              <v-btn small color="primary"
                to="/units"
              >View units</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="update"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="device_hub" name="unit" label="Unit" id="unit" type="text" 
                ref="unit"
                v-model="form.unit"
                :rules="[() => !form.errors.has('unit') || form.errors.get('unit') ]"
              ></v-text-field> 

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Update Unit
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
        unit: '' 
      })
    }),

    mounted() {

      this.form.get(`/api/units/${this.$route.params.unit_id}`)
        .then(data  =>  {
          this.form = new Form(data.data); 
        })
        .catch(errors => {

        })

    },

    methods: {

      update() {
        this.form.patch(`/api/units/${this.$route.params.unit_id}`)
          .then(data  =>  {
            this.$router.push('/units');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }
    }
  }
</script>