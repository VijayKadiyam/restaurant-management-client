<template>
   <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>

        <v-card class="elevation-12"> 

          <v-card-title primary-title>
            <h3 class="headline mb-0">Edit your supplier details <b>( {{ form.name }} )</b>
              <v-btn small color="primary"
                to="/suppliers"
              >View suppliers</v-btn>
            </h3>
          </v-card-title> 

          <form 
            @submit.prevent="updatesupplier"
            @keydown="form.errors.clear($event.target.name)"
          >

            <v-card-text> 

              <v-text-field prepend-icon="domain" name="name" label="Company name" id="name" type="text" 
                ref="name"
                v-model="form.name"
                :rules="[() => !form.errors.has('name') || form.errors.get('name') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="email" name="email" label="Email id" id="email" type="text" 
                ref="email"
                v-model="form.email"
                :rules="[() => !form.errors.has('email') || form.errors.get('email') ]"
              ></v-text-field>

              <v-text-field prepend-icon="phone" name="contact1" label="Mobile no 1" id="contact1" type="text" 
                ref="contact1"
                v-model="form.contact1"
                :rules="[() => !form.errors.has('contact1') || form.errors.get('contact1') ]"
              ></v-text-field> 

              <v-text-field prepend-icon="phone" name="contact2" label="Mobile no 2" id="contact2" type="text" 
                ref="contact2"
                v-model="form.contact2"
                :rules="[() => !form.errors.has('contact2') || form.errors.get('contact2') ]"
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
                Update Supplier
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
        email: '',
        contact1: '',
        contact2: '',
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

    mounted() {

      this.form.get(`/api/suppliers/${this.$route.params.supplier_id}`)
        .then(data  =>  {
          this.form = new Form(data.data); 
        })
        .catch(errors => {

        })

    },

    methods: {

      updatesupplier() {
        this.form.patch(`/api/suppliers/${this.$route.params.supplier_id}`)
          .then(data  =>  {
            this.$router.push('/suppliers');
          })
          .catch(errors => {
            this.form.validate(this.$refs);
          })
      }
    }
  }
</script>