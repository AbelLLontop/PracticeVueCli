<template>
  <div class="seccion border" :class="{'seleccionado':estado}" @click="estado=true">
    <div class="seccion__logo border"><img src="@/assets/logo.png" alt=""></div>
    <h3 class="seccion__titulo">{{titulo}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Seccion',
  props: {
    titulo:String,
  },
  data(){
    return{
    estado:false
    }
  }
}
</script>


<style scoped>
.border{
  border:solid 1px #8D8B8B20;

}
.seleccionado{
background: #FEC302 !important;
}
.seccion{
width: 61px;
height: 101px;
border-radius: 60px;
background: #FFFFFF;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
padding-bottom:20px;
padding-top:17px;
}
.seccion__logo{
  background: #FFFFFF;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 4px;
}
.seccion__logo img{
width: 100%;
height: 100%;
object-fit: cover;
padding-top: 4px;
}
.seccion__titulo{
  font-weight: 400px;
  font-size: 9px;
  line-height: 13.5px;
  display: block;
  margin: 0;
}
</style>
