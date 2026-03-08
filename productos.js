const productos=[
{
nombre:"Auriculares Bluetooth",
imagen:"https://ae01.alicdn.com/kf/H1.jpg",
link:"producto.html"
},

{
nombre:"Smartwatch deportivo",
imagen:"https://ae01.alicdn.com/kf/H2.jpg",
link:"producto.html"
},

{
nombre:"Luces LED habitación",
imagen:"https://ae01.alicdn.com/kf/H3.jpg",
link:"producto.html"
}
]

const contenedor=document.getElementById("productos")

productos.forEach(p=>{

contenedor.innerHTML+=`

<div class="card">

<img src="${p.imagen}">

<h3>${p.nombre}</h3>

<a class="boton" href="${p.link}">Ver análisis</a>

</div>

`

})
