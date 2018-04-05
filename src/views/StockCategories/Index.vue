<template>
   <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Stock categories
              <v-btn small color="primary"
                to="/stock-categories/create"
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
              <td class="text-xs-left">{{ props.item.unit }}</td> 
              <td class="justify-center layout px-0">
                <v-btn icon class="mx-0"
                  :to="`/stock-categories/${props.item.id}/edit`"
                >
                  <v-icon color="teal">edit</v-icon>
                </v-btn>
                <v-btn icon class="mx-0" @click="">
                  <v-icon color="pink">delete</v-icon>
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
        { text: 'Stock Category Name', sortable:false, value: 'name' },
        { text: 'Unit', value: 'pan_no' }, 
        { text: 'Actions', value: 'name' }
      ],
      items: []
    }),

    mounted() {
      this.form.get('/api/stock-categories')
        .then(data => {

          data.data.forEach(item => { 
            let unit = ''; 
            this.form.get(`/api/units/${item.unit_id}`)
            .then(data => {
              unit = data.data.unit; 
              this.items.push({
                id:item.id ,name: item.name, unit: unit
              })
            }) 
          }) 

        })
        .catch(errors => {

        })
    }

  }
</script>