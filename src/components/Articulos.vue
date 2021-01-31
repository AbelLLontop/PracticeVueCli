<template>
         <div class="articulos">

  <router-link class="link" :to="{name:'Tienda',params:{nombreTienda:item}}"
    v-for="(item,index) of tiendas" :key="index">
            <Articulo :nombre="item"/>
    </router-link>
      </div>

</template>

<script>
  import Articulo from '@/components/Articulo.vue'
export default {
  name: 'Articulos',
  components:{
    Articulo
  },
  data(){
    return{
      tiendas:['becxis','tiaVeneno','Cracks','La Royale','Edith']
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

.articulos{
  width: 100%;
    display: grid;
    grid-gap:50px 12px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, 191px);
}
</style>
