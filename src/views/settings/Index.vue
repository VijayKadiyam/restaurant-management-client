<template>
   <v-container fluid fill-height>
    <v-layout justify-center>
      <v-flex xs12 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">
              Settings 
            </h3>
          </v-card-title>

          <v-card-text>

            <v-layout row wrap>
              <v-flex xs6>
                <v-subheader>Company</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  :items="companies"
                  v-model="selectedCompany"
                  label="Select Company"
                  single-line
                  @input="changeCompany"
                ></v-select>
              </v-flex>

              <v-flex xs6>
                <v-subheader>Color</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-select
                  :items="colors"
                  v-model="selectedColor"
                  label="Select Color"
                  single-line
                  @input="changeColor"
                ></v-select>
              </v-flex>
            </v-layout>

          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="text/javascript">
  
  import  { mapGetters, mapActions } from 'vuex'
  import Form from 'helpers/Form.js'
  
  export default {
    data: () => ({
      form: new Form,
      companies: [],
      selectedCompany: '',
      colors: [
        { text: 'Red', value: 'red' },
        { text: 'Pink', value: 'pink' },
        { text: 'Purple', value: 'purple' },
        { text: 'Blue', value: 'light-blue' },
        { text: 'Green', value: 'green' },
        { text: 'Yellow', value: 'yellow' },
        { text: 'Amber', value: 'amber' },
        { text: 'Orange', value: 'orange' },
      ],
      selectedColor: ''
    }),

    computed: {
      ...mapGetters([
        'company', 'color'
      ])
    },

    mounted() {
      this.form.get('/api/companies')
        .then(data  =>  {
          data.data.forEach(item => {
            this.companies.push({
              value  : item.id,
              text: item.name
            })

            this.selectedCompany = this.company.id
          }) 
        })

      this.selectedColor = this.color;
    },

    methods: {

      ...mapActions([
        'configSet', 'configInitialize'
      ]),

      changeCompany() {
        this.form.get(`/api/companies/${this.selectedCompany}`)
          .then(data  =>  {

            this.configSet({
              company: {
                id: data.data.id,
                name: data.data.name
              } 
            }),

            this.configInitialize() 
          }) 
      },

      changeColor() {
        this.configSet({
          color: this.selectedColor
        })

        this.configInitialize();
      }
    }
  }
</script>