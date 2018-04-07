import Home from 'views/Home.vue'
// auth
import Login from 'views/auth/Login.vue'
import Register from 'views/auth/Register.vue'
// menu categories
import MenuCategories from 'views/MenuCategories/Index.vue'
import MenuCategoriesCreate from 'views/MenuCategories/Create.vue'
import MenuCategoriesEdit from 'views/MenuCategories/Edit.vue'
// menu items
import MenuItems from 'views/MenuItems/Index.vue'
import MenuItemsCreate from 'views/MenuItems/Create.vue'
import MenuItemsEdit from 'views/MenuItems/Edit.vue'
// stock categories
import StockCategories from 'views/StockCategories/Index.vue'
import StockCategoriesCreate from 'views/StockCategories/Create.vue'
import StockCategoriesEdit from 'views/StockCategories/Edit.vue'
// stocks
import Stocks from 'views/stocks/Index.vue'
import StocksCreate from 'views/stocks/Create.vue'
import StocksEdit from 'views/stocks/Edit.vue'
//suppliers
import Suppliers from 'views/suppliers/Index.vue'
import SuppliersCreate from 'views/suppliers/Create.vue'
import SuppliersEdit from 'views/suppliers/Edit.vue'
//customers
import Customers from 'views/customers/Index.vue'
import CustomersCreate from 'views/customers/Create.vue'
import CustomersEdit from 'views/customers/Edit.vue'
// users
import Users from 'views/users/Index.vue'
import UsersCreate from 'views/users/Create.vue'
import UsersEdit from 'views/users/Edit.vue'
// mydetails
import MyDetails from 'views/mydetails/Index.vue'
// companies
import Companies from 'views/companies/Index.vue'
import CompaniesCreate from 'views/companies/Create.vue'
import CompaniesEdit from 'views/companies/Edit.vue'
// settings
import Settings from 'views/settings/Index.vue'
// user roles
import Roles from 'views/roles/Index.vue'
import RolesCreate from 'views/roles/Create.vue'
import RolesEdit from 'views/roles/Edit.vue'
// measurement units
import Units from 'views/units/Index.vue'
import UnitsCreate from 'views/units/Create.vue'
import UnitsEdit from 'views/units/Edit.vue'
// taxes
import Taxes from 'views/taxes/Index.vue'
import TaxesCreate from 'views/taxes/Create.vue'
import TaxesEdit from 'views/taxes/Edit.vue'
// discounts
import Discounts from 'views/discounts/Index.vue'
import DiscountsCreate from 'views/discounts/Create.vue'
import DiscountsEdit from 'views/discounts/Edit.vue'

const routes = [
  { path: '/', component: Home },
  // auth
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  // menu categories
  { path: '/menu-categories', component: MenuCategories },
  { path: '/menu-categories/create', component: MenuCategoriesCreate },
  { path: '/menu-categories/:menu_category_id/edit', component: MenuCategoriesEdit },
  // menu items
  { path: '/menu-items', component: MenuItems },
  { path: '/menu-items/create', component: MenuItemsCreate },
  { path: '/menu-items/:menu_item_id/edit', component: MenuItemsEdit },
  // stock categories
  { path: '/stock-categories', component: StockCategories },
  { path: '/stock-categories/create', component: StockCategoriesCreate },
  { path: '/stock-categories/:stock_category_id/edit', component: StockCategoriesEdit },
  // stocks
  { path: '/stocks', component: Stocks },
  { path: '/stocks/create', component: StocksCreate },
  { path: '/stocks/:stocks_id/edit', component: StocksEdit },
  // suppliers
  { path: '/suppliers', component: Suppliers },
  { path: '/suppliers/create', component: SuppliersCreate },
  { path: '/suppliers/:supplier_id/edit', component: SuppliersEdit },
  // customers
  { path: '/customers', component: Customers },
  { path: '/customers/create', component: CustomersCreate },
  { path: '/customers/:customer_id/edit', component: CustomersEdit },
  // Companies
  { path: '/companies', component: Companies },
  { path: '/companies/create', component: CompaniesCreate },
  { path: '/companies/:company_id/edit', component: CompaniesEdit },
  // mydetails
  { path: '/mydetails', component: MyDetails },
  // users
  { path: '/users', component: Users },
  { path: '/users/create', component: UsersCreate },
  { path: '/users/:user_id/edit', component: UsersEdit },
  // settings
  { path: '/settings', component: Settings },
  // user roles
  { path: '/roles', component: Roles },
  { path: '/roles/create', component: RolesCreate },
  { path: '/roles/:role_id/edit', component: RolesEdit },
  // measurement units
  { path: '/units', component: Units },
  { path: '/units/create', component: UnitsCreate },
  { path: '/units/:unit_id/edit', component: UnitsEdit },
  // taxes
  { path: '/taxes', component: Taxes },
  { path: '/taxes/create', component: TaxesCreate },
  { path: '/taxes/:tax_id/edit', component: TaxesEdit },
  // discounts
  { path: '/discounts', component: Discounts },
  { path: '/discounts/create', component: DiscountsCreate },
  { path: '/discounts/:discount_id/edit', component: DiscountsEdit },
];

export default routes;