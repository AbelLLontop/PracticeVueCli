f<template>
    <div class="articulo">
      <div class="articulo__imagen">
        <h4 class="articulo__titulo">{{nombre}}</h4>
            <img src="@/assets/logo.png" alt="">
              </div>
            <p class="articulo__direccion">
                  Avenida Peru #509
             </p>
                  </div>
</template>

<script>
export default {
  name: 'Articulo',
  props:['nombre']
}
</script>


<style scoped>

.articulo{
width: 100%;
height: 280px;
max-width: 191px;
}
.articulo__titulo{
font-size: 12px;
font-weight: 400;
line-height:18px;
margin: 0;
text-align: center;
}
.articulo__imagen{
  background: #FCFCFC;
  border-radius: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 219px;
padding-top: 9px;
}

.articulo__imagen img{
  width: 148px;
  height: 148px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border:solid 1px #8D8B8B20;
  user-select: none;
}

.articulo__direccion{
  font-size: 12px;
  color:#605B5B;
  text-align: center;
  padding: 0 40px;
}
</style>
