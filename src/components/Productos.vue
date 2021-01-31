<template>
         <div class="productos">

    <router-link class="link" :to="{name:'Producto',params:{nombreTienda:nombreTienda,idProducto:index}}"
    v-for="(item,index) of productos" :key="index">
            <Producto :tipo="item.tipo" :color="item.color" :nombre="item.nombre" :precio="item.precio"/>
    </router-link>
      </div>



</template>

<script>
  import Producto from '@/components/Producto.vue'
export default {
  name: 'Productos',
  components:{
    Producto
  },
  props:['nombreTienda'],
  data(){
    return{
      productos:[
      {tipo:'prime',nombre:'Torta de queque rellena de Chantilly',precio:'S/50.00',color:'#A3D2CA'},
      {tipo:'dessert',nombre:'Alitas Crujientes Mixtas',precio:'S/25.00',color:'#DB6400'},
      {tipo:'goodbye cold',nombre:'Caldo de Gallina',precio:'S/2.00',color:'#5EAAA8'},
      {tipo:'prime',nombre:'Tallarin Saltado',precio:'S/16.00',color:'#DB6400'},
      {tipo:'prime',nombre:'Alitas a la BBQ (6 piezas)',precio:'S/77.00',color:'#DB6400'},
      ]
    }
  }
}
</script>


<style scoped>
.link{
  text-decoration: none;
  color:#000;
  user-select: none;
  outline: none;
   outline-color: transparent;
    outline-style: none;
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.productos{
  width: 100%;
    display: grid;
    grid-gap:50px 12px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, 191px);
}
</style>
