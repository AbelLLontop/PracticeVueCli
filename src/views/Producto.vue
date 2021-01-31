<template>
  <div class="pageProducto">
    <Cabecera :nombre="getNombreTienda"  />
    <VistaProducto
      :tipo="producto.tipo"
      :color="producto.color"
      :nombre="producto.nombre"
      :precio="producto.precio"/>

  </div>
</template>

<script>
  import Cabecera from '@/components/Cabecera.vue'
  import VistaProducto from '@/components/VistaProducto.vue'

export default {
  name: 'Inicio',
  components: {
  	Cabecera,
    VistaProducto
  },
  computed:{
    getNombreTienda(){
      const nombre = this.$route.params.nombreTienda;
      return nombre;
    }
  },
    data(){
      return{
        producto:{
          tipo:'prime',
          nombre:'Torta de queque rellena de Chantilly',
          precio:'S/50.00',
          color:'#A3D2CA'
        },

      }
    }
}
</script>


