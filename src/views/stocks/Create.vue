<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Add stock
              <v-btn small color="primary"
                to="/stocks"
              >View stocks</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="create"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text>  

              <v-layout row wrap> 

                <v-flex xs6>
                  <v-subheader>Stock Category</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    ref="stock_category_id"
                    :items="stockCategories"
                    v-model="form.stock_category_id"
                    label="Select stock category"
                    single-line
                    :rules="[() => !form.errors.has('stock_category_id') || form.errors.get('stock_category_id') ]"
                    @input="changeStockCategory"
                  ></v-select>
                </v-flex>

                <v-flex xs6>
                  <v-subheader>Stock Supplier</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    ref="supplier_id"
                    :items="suppliers"
                    v-model="form.supplier_id"
                    label="Select supplier"
                    single-line
                    :rules="[() => !form.errors.has('supplier_id') || form.errors.get('supplier_id') ]"
                  ></v-select>
                </v-flex>

                <v-flex xs8>
                  <v-text-field prepend-icon="format_list_numbered" name="qty" label="Quantity" id="qty" type="text" 
                    ref="qty"
                    v-model="form.qty"
                    :rules="[() => !form.errors.has('qty') || form.errors.get('qty') ]"
                  ></v-text-field>
                </v-flex>
                <v-flex xs4>  
                  <h4 class="headline mb-0">{{ stockCategoryUnit }}</h4>
                </v-flex>

              </v-layout> 

              <v-text-field prepend-icon="attach_money" name="price" label="Price" id="price" type="text" 
                ref="price"
                v-model="form.price"
                :rules="[() => !form.errors.has('price') || form.errors.get('price') ]"
              ></v-text-field> 

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Add Stock
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
        stock_category_id: '', 
        supplier_id: '',
        qty: '',
        price: ''
      }),
      stockCategories: [],
      suppliers: [],
      stockCategoryUnit: ''
    }),

    mounted() {
      this.form.get('/api/stock-categories')
        .then(data  =>  {
          data.data.forEach(item => {
            this.stockCategories.push({
              text: item.name,
              value: item.id,
              unit_id: item.unit_id
            })
          })
        })

      this.form.get('/api/suppliers')
        .then(data  =>  {
          data.data.forEach(item => {
            this.suppliers.push({
              text: item.name,
              value: item.id
            })
          })
        })
    },

    methods: {

      create() {
        this.form.post('/api/stocks')
          .then(data  =>  {
            this.$router.push('/stocks');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }, 

      changeStockCategory() {
        let selectedStockCategory = this.stockCategories.find(item => item.value === this.form.stock_category_id);

        this.form.get(`/api/units/${selectedStockCategory.unit_id}`)
          .then(data  =>  {
            this.stockCategoryUnit = data.data.unit
          })
      }
    }
  }
</script>