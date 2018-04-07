<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Add a new menu item
              <v-btn small color="primary"
                to="/menu-items"
              >View menu items</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="create"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="domain" name="name" label="Menu item" id="name" type="text" 
                ref="name"
                v-model="form.name"
                :rules="[() => !form.errors.has('name') || form.errors.get('name') ]"
              ></v-text-field> 

              <v-layout row wrap> 

                <v-flex xs6>
                  <v-subheader>Menu Category</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    ref="menu_category_id"
                    :items="menu_categories"
                    v-model="form.menu_category_id"
                    label="Select menu category"
                    single-line
                    :rules="[() => !form.errors.has('menu_category_id') || form.errors.get('menu_category_id') ]"
                  ></v-select>
                </v-flex>

              </v-layout> 

              <v-text-field prepend-icon="money" name="price" label="Price" id="price" type="text" 
                ref="price"
                v-model="form.price"
                :rules="[() => !form.errors.has('price') || form.errors.get('price') ]"
              ></v-text-field> 

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Create Menu Item
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
        menu_category_id: '',
        price: ''
      }),
      menu_categories: []
    }),

    mounted() {
      this.form.get('/api/menu-categories')
        .then(data  =>  {
            data.data.forEach(item => {
              this.menu_categories.push({
                text: item.name,
                value: item.id
              })
            })
          })
    },

    methods: {

      create() {
        this.form.post('/api/product-categories')
          .then(data  =>  {
            this.$router.push('/menu-items');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }, 
    }
  }
</script>