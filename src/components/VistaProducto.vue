<template>
    <div class="producto">
      <div class="producto__imagen">
        <h4 class="producto__titulo" :style="{'color':color}">{{tipo}}</h4>
                    <p class="producto__direccion">
                  {{nombre}}
             </p>
            <img src="@/assets/logo.png" alt="">
              </div>

             <span   class="producto__precio">{{precio}}</span>
                  </div>
</template>

<script>
export default {
  name: 'VistaProducto',
  props:['nombre','color',"precio","tipo"]
}
</script>


<style scoped>

.producto{
width: 100%;
}
.producto__titulo{
font-size: 24px;
line-height:36px;
color:#A3D2CA;
margin: 0;
font-weight: bold;
text-align: center;
}
.producto__imagen{
  border-radius: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
padding-top: 9px;
}

.producto__imagen img{
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border:solid 1px #8D8B8B20;
  user-select: none;
}

.producto__direccion{
  font-size: 26px;
  color:#000;
  font-weight: 600;
  text-align: center;
  margin: 0;
}
.producto__precio{
  font-weight: bold;
  font-size: 16px;
  color:#000;
  display: block;
  text-align: center;

}

</style>
