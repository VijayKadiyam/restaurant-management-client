<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Edit stock category
              <v-btn small color="primary"
                to="/stock-categories"
              >View stock categories</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="update"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="domain" name="name" label="Stock category" id="name" type="text" 
                ref="name"
                v-model="form.name"
                :rules="[() => !form.errors.has('name') || form.errors.get('name') ]"
              ></v-text-field> 

              <v-layout row wrap> 

                <v-flex xs6>
                  <v-subheader>Unit</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    ref="unit_id"
                    :items="units"
                    v-model="form.unit_id"
                    label="Select Unit"
                    single-line
                    :rules="[() => !form.errors.has('unit_id') || form.errors.get('unit_id') ]"
                  ></v-select>
                </v-flex>

              </v-layout> 

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Update Stock Category
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
        unit_id: ''
      }),
      units: []
    }),

    mounted() {
      this.form.get('/api/units')
        .then(data  =>  {
            data.data.forEach(item => {
              this.units.push({
                text: item.unit,
                value: item.id
              })
            })
          })

      this.form.get(`/api/stock-categories/${this.$route.params.stock_category_id}`)
        .then(data  =>  {
          this.form = new Form({
            name: data.data.name,
            unit_id: parseInt(data.data.unit_id)
          })
        })
    },

    methods: {

      update() {
        this.form.patch(`/api/stock-categories/${this.$route.params.stock_category_id}`)
          .then(data  =>  {
            this.$router.push('/stock-categories');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }, 
    }
  }
</script>