<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Add a new measurement unit
              <v-btn small color="primary"
                to="/units"
              >View measurement units</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="create"
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
                Create Measurement Unit
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
        unit: '', 
      })
    }),

    methods: {

      create() {
        this.form.post('/api/units')
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