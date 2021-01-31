<template>
    <div class="producto">
      <div class="producto__imagen">
        <h4 class="producto__titulo" :style="{'color':color}">{{tipo}}</h4>
            <img src="@/assets/logo.png" alt="">
              </div>
            <p class="producto__direccion">
                  {{nombre}}
             </p>
             <span   class="producto__precio">{{precio}}</span>
                  </div>
</template>

<script>
export default {
  name: 'Producto',
  props:['nombre','color',"precio","tipo"]
}
</script>


<style scoped>

.producto{
width: 100%;
height: 280px;
max-width: 191px;
}
.producto__titulo{
font-size: 12px;
line-height:18px;
color:#A3D2CA;
margin: 0;
font-weight: bold;
text-align: center;
}
.producto__imagen{
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

.producto__imagen img{
  width: 148px;
  height: 148px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border:solid 1px #8D8B8B20;
  user-select: none;
}

.producto__direccion{
  font-size: 12px;
  color:#605B5B;
  text-align: center;
  padding: 0 36px;
}
.producto__precio{
  font-weight: bold;
  font-size: 16px;
  color:#000;
  display: block;
  text-align: center;

}

</style>
