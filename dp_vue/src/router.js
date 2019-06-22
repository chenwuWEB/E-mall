import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Detail from './views/detail'
import Login from './views/login'
import Product from './views/products'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index", component:Index},
    {path:"/detail/:lid", component:Detail,props:true},
    {path:"/login", component:Login},
    {path:"/product/:words/:pno", component:Product,props:true},
  ]
})
