<template>
   <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Suppliers
              <v-btn small color="primary"
                to="/suppliers/create"
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
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">
                {{ props.item.contact1 }}
                <br>
                {{ props.item.contact2 }}
              </td>
              <td class="text-xs-left">
                {{ props.item.address }}
                <br>
                State Code: {{ props.item.state_code }}
              </td>
              <td class="text-xs-left">{{ props.item.gstn_no }}</td>
              <td class="text-xs-left">{{ props.item.pan_no }}</td>
              <td class="text-xs-left">
                {{ props.item.acc_name }}
                <br>
                {{ props.item.acc_no }}
                <br>
                {{ props.item.ifsc_code }}
                <br>
                {{ props.item.branch }}
              </td>
              <td class="justify-center layout px-0">
                <v-btn icon class="mx-0"
                  :to="`/suppliers/${props.item.id}/edit`"
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
        { text: 'Company Name', sortable:false, value: 'name' },
        { text: 'Email ID', value: 'pan_no' },
        { text: 'Contact No', value: 'gstn_no' },
        { text: 'Address', value: 'address' },
        { text: 'GST No', value: 'acc_no' },
        { text: 'PAN No.', value: 'acc_no' },
        { text: 'Account Details', value: 'acc_no' },
        { text: 'Actions', value: 'name' }
      ],
      items: []
    }),

    mounted() {
      this.form.get('/api/suppliers')
        .then(data => {
          this.items = data.data;
        })
        .catch(errors => {

        })
    }

  }
</script>