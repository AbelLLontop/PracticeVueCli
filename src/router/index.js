import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')

  },
    {
    path:'/tienda/:nombreTienda',
    name:'Tienda',
    component: () => import(/* webpackChunkName: "tienda" */ '../views/Tienda.vue')
  }
  ,
  {
    path:'/tienda/:nombreTienda/:idProducto',
    name:'Producto',
    component: () => import(/* webpackChunkName: "producto" */ '../views/Producto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
