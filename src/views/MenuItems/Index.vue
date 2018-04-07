<template>
   <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Menu Items
              <v-btn small color="primary"
                to="/menu-items/create"
              >Add New</v-btn>
            </h3>
            
            <v-spacer></v-spacer>

            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td> 
              <td class="text-xs-left">{{ props.item.menu_category }}</td> 
              <td class="text-xs-left">{{ props.item.price }}</td> 
              <td class="justify-center layout px-0">
                <v-btn icon class="mx-0"
                  :to="`/menu-items/${props.item.id}/edit`"
                >
                  <v-icon color="teal">edit</v-icon>
                </v-btn> 
              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>

        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="text/javascript">

  import Form from 'helpers/Form.js'
  
  export default {

    data: () => ({
      form: new Form,
      search: '',
      headers: [
        { text: 'Menu item', sortable:false, value: 'name' },
        { text: 'Menu Category', value: 'pan_no' }, 
        { text: 'Price', value: 'pan_no' }
      ],
      items: []
    }),

    mounted() {
      this.form.get('/api/product-categories')
        .then(data => {

          data.data.forEach(item => { 
            let menu_category_name = ''; 
            this.form.get(`/api/menu-categories/${item.menu_category_id}`)
            .then(data => {
              menu_category_name = data.data.name; 
              this.items.push({
                id:item.id, name: item.name, price: item.price, menu_category: menu_category_name
              })
            }) 
          }) 

        })
        .catch(errors => {

        })
    }

  }
</script>