<template>
  <div class="secciones">
      <Seccion v-for="item of secciones" :titulo="item.nombre"></Seccion>
  </div>
</template>

<script>
import Seccion from '@/components/Seccion.vue'

export default {
  name: 'Secciones',
  components:{
    Seccion
  },
  data(){
    return {
      secciones:[
      {id:1,nombre:"all",logo:"@/assets/logo.png"},
      {id:2,nombre:"Restaurant",logo:"@/assets/logo.png"},
      {id:3,nombre:"Fast food",logo:"@/assets/logo.png"},
      {id:4,nombre:"Bebidas",logo:"@/assets/logo.png"}
      ]
    }
  }
}
</script>


<style scoped>
.secciones{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding:22px 0;
}
</style>
