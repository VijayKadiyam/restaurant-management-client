<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Edit a tax
              <v-btn small color="primary"
                to="/taxes"
              >View taxes</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="update"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="money_off" name="name" label="Tax name" id="name" type="text" 
                ref="name"
                v-model="form.name"
                :rules="[() => !form.errors.has('name') || form.errors.get('name') ]"
              ></v-text-field>

              <v-text-field prepend-icon="money_off" name="tax_percent" label="Tax percent" id="tax_percent" type="text" 
                ref="tax_percent"
                v-model="form.tax_percent"
                :rules="[() => !form.errors.has('tax_percent') || form.errors.get('tax_percent') ]"
              ></v-text-field>  

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Update Tax
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
        name: '',
        tax_percent: ''
      })
    }),

    mounted() {

      this.form.get(`/api/taxes/${this.$route.params.tax_id}`)
        .then(data  =>  {
          this.form = new Form(data.data)
        })
    },

    methods: {

      update() {
        this.form.patch(`/api/taxes/${this.$route.params.tax_id}`)
          .then(data  =>  {
            this.$router.push('/taxes');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }
    }
  }
</script>