<template>
  <div class="pageTienda">
    <Cabecera :nombre="getNombreTienda" />
    <Saludo
      :titulo="Saludotitulo"
      :descripcion="SaludoDescripcion"
    />
    <Productos :nombreTienda="getNombreTienda"/>
  </div>
</template>

<script>
  import Cabecera from '@/components/Cabecera.vue'
  import Saludo from '@/components/Saludo.vue'
  import Secciones from '@/components/Secciones.vue'
  import Productos from '@/components/Productos.vue'

export default {
  name: 'Tienda',
  components: {
  	Secciones,
  	Saludo,
  	Cabecera,
    Productos
  },
  data(){
    return {
      Saludotitulo:'¡Hola somo ',
      SaludoDescripcion:'Servimos comida preparada con amor y dedicacion para disfrutarla con el corazón'
    }
  }
  ,
  computed:{
    getNombreTienda(){
      const nombre = this.$route.params.nombreTienda;
      this.Saludotitulo+= nombre+"!";
      return nombre;
    }
  }
}
</script>
