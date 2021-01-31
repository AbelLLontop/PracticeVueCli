<template>
 <div class="cabecera">
      <div class="cabecera__icono-menu"><img src="@/assets/logo.png" alt=""></div>
     <!-- <h2 class="cabecera__titulo-ciudad">Casma</h2>-->
       <router-link to="/" class="link__titulo">
        <h2 class="cabecera__titulo-ciudad">{{nombre}}</h2></router-link>
      <div class="cabecera__icono-accion"><img src="@/assets/logo.png" alt=""></div>
    </div>
</template>





<script>
export default {
  name: 'Cabecera',
  props:['nombre']

}
</script>


<style scoped>

.cabecera{
  width: 100%;
  height:30px;
  display: flex;
  align-items: center;
  padding: 0px 31px;
  gap:31px;
  justify-content: space-between;
}

.cabecera__icono-menu,.cabecera__icono-accion{
  width: 24px;
  height: 24px;
}
.cabecera__icono-menu img,.cabecera__icono-accion img{
width: 100%;
height: 100%;
object-fit: cover;
}

.cabecera__titulo-ciudad{
font-size: 20px;
line-height: 30px;
font-weight: 400;
color:#2E3C50;
}

.link__titulo{
  text-decoration: none;
  flex-grow: 1;
  text-align: left;
}

</style>
