<template>
  <div class="saludo">
      <h1 class="saludo__titulo">{{titulo}}</h1>
      <p class="saludo__descripcion">{{descripcion}}</p>
    </div>
</template>

<script>
export default {
  name: 'Saludo',
  props:['titulo','descripcion']
}
</script>


<style scoped>

.saludo{
  text-align: left;
  padding:0 37px;
  margin-top: 34px;
}
.saludo__titulo,.saludo__descripcion,.cabecera__titulo-ciudad{
  margin: 0;
}

.saludo__titulo{
  font-size: 24px;
  line-height: 36px;
  font-weight: 600px;
}
.saludo__descripcion{
    font-size: 20px;
    line-height: 30px;
    font-weight: 400px;
}

</style>
