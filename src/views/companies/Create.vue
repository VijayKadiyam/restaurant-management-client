<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Add your company
              <v-btn small color="primary"
                to="/companies"
              >View companies</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="createCompany"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="domain" name="name" label="Company name" id="name" type="text" 
                ref="name"
                v-model="form.name"
                :rules="[() => !form.errors.has('name') || form.errors.get('name') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="done" name="pan_no" label="PAN no." id="pan_no" type="text" 
                ref="pan_no"
                v-model="form.pan_no"
                :rules="[() => !form.errors.has('pan_no') || form.errors.get('pan_no') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="done_all" name="gstn_no" label="GSTN no." id="gstn_no" type="text" 
                ref="gstn_no"
                v-model="form.gstn_no"
                :rules="[() => !form.errors.has('gstn_no') || form.errors.get('gstn_no') ]"
              ></v-text-field>

              <v-text-field prepend-icon="add_location" name="address" label="Address" id="address" type="text" 
                ref="address"
                v-model="form.address"
                :rules="[() => !form.errors.has('address') || form.errors.get('address') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="code" name="state_code" label="State code" id="state_code" type="text" 
                ref="state_code"
                v-model="form.state_code"
                :rules="[() => !form.errors.has('state_code') || form.errors.get('state_code') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="sort" name="acc_name" label="Bank account name" id="acc_name" type="text" 
                ref="acc_name"
                v-model="form.acc_name"
                :rules="[() => !form.errors.has('acc_name') || form.errors.get('acc_name') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="confirmation_number" name="acc_no" label="Account no" id="acc_no" type="text" 
                ref="acc_no"
                v-model="form.acc_no"
                :rules="[() => !form.errors.has('acc_no') || form.errors.get('acc_no') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="trending_flat" name="ifsc_code" label="IFSC code" id="ifsc_code" type="text" 
                ref="ifsc_code"
                v-model="form.ifsc_code"
                :rules="[() => !form.errors.has('ifsc_code') || form.errors.get('ifsc_code') ]"
              ></v-text-field>

              <v-text-field prepend-icon="touch_app" name="branch" label="Branch" id="branch" type="text" 
                ref="branch"
                v-model="form.branch"
                :rules="[() => !form.errors.has('branch') || form.errors.get('branch') ]"
              ></v-text-field> 

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary" 
              >
                Create Company
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
        pan_no: '',
        gstn_no: '',
        address: '',
        state_code: '',
        acc_name: '',
        acc_no: '',
        ifsc_code: '',
        branch: ''
      })
    }),

    methods: {

      createCompany() {
        this.form.post('/api/companies')
          .then(data  =>  {
            this.$router.push('/companies');
          })
          .catch(errors => {
            this.form.validate(this.$refs)
          })
      }
    }
  }
</script>