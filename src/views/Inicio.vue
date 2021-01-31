<template>
  <div class="pageInicio">
    <Cabecera nombre="Casma" />
    <Saludo
      :titulo=tituloSaludo
      :descripcion=mensajeSaludo
    />
    <Secciones/>
          <Articulos/>
  </div>
</template>

<script>
  import Cabecera from '@/components/Cabecera.vue'
  import Saludo from '@/components/Saludo.vue'
  import Secciones from '@/components/Secciones.vue'
  import Articulos from '@/components/Articulos.vue'

export default {
  name: 'Inicio',
  components: {
  	Articulos,
  	Secciones,
  	Saludo,
  	Cabecera
  },
  data(){
    return{
        tituloSaludo:"¿Hambre?",
        mensajeSaludo:"Ordena y empieza a disfrutar"
    }
  }

}
</script>


