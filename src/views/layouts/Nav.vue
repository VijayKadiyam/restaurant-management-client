<template>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
    class="grey lighten-4"
    v-model="nav.opened"
  >
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="item.key"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <!-- <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex> -->
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon="" 
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click=""
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else @click="" :key="item.text"  
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script type="text/javascript">

  import { mapGetters } from 'vuex'
  
  export default {
    data: () => ({
      items: [
        { icon: 'dashboard', text: 'Dashboard', url: '/dashboard' }, 

        { heading: 'Sales' },
        { icon: 'attach_money', text: 'Product Sales', url: '/sales' },
        
        { heading: 'Products' },
        { icon: 'local_mall', text: 'Product Categories', url: '/product-categories' },
        { icon: 'add_shopping_cart', text: 'Products', url: '/products' },
        
        { heading: 'Stocks' },
        { icon: 'account_balance', text: 'Stock Categories', url: '/stock-categories' },
        { icon: 'shopping_cart', text: 'Stocks', url: '/stocks' },

        { heading: 'Contacts' },
        { icon: 'navigate_next', text: 'Suppliers', url: '/suppliers' }, 
        { icon: 'navigate_before', text: 'Customers', url: '/customers' }, 

        { heading: 'My Profile' },
        { icon: 'people', text: 'Users', url: '/users' },
        { icon: 'domain', text: 'Companies', url: '/companies' },
        // { icon: 'person_pin', text: 'My Details', url: '/mydetails' },
        { icon: 'settings', text: 'Settings', url: '/settings' },

        { heading: 'Utilities' },
        { icon: 'camera_roll', text: 'User Roles', url: '/roles' }, 
        { icon: 'device_hub', text: 'Measurement Units', url: '/units' }, 
        { icon: 'money_off', text: 'Tax Percents', url: '/taxes' }, 
        { icon: 'money_off', text: 'Discount Percents', url: '/discounts' }, 

        { heading: 'Reports' },
      ]
    }),

    computed: {
      ...mapGetters([
        'nav'
      ])
    }
  }
</script>