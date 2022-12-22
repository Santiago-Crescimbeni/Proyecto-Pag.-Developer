/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

 
 const h3SpanNombre= document.getElementById("nombre");
 const h3SpanEdad= document.getElementById("edad");
 const h3SpanCiudad= document.getElementById("ciudad");
 const h3SpanGustaJs= document.getElementById("javascript");
 const div= document.getElementById("fila")
 const cambiarIntensidad= document.getElementById("sitio");
 const pClase= document.querySelector(".oculto");
 
 
 
 function obtenerDatosDelUsuario() { 

  let NombreUsuario=(prompt('Ingrese su Nombre:')); 
  let EdadUsuario=(prompt('Ingrese el año de nacimiento: '));
  let CiudadUsuario=(prompt('Ingrese la ciudad en donde vive:'));
  let InteresPorJsUsuario=confirm('¿Le interesa javaScript?');

   
    
      datosPersona.nombre=NombreUsuario;
      datosPersona.edad= 2022-EdadUsuario;
      datosPersona.ciudad=CiudadUsuario;
      datosPersona.interesPorJs=InteresPorJsUsuario === true? 'Si ':' No '; 
      }

  function renderizarDatosUsuario() {
 
  obtenerDatosDelUsuario();

      h3SpanNombre.innerHTML= datosPersona.nombre;
      h3SpanEdad.innerHTML=datosPersona.edad;
      h3SpanCiudad.innerHTML=datosPersona.ciudad;
      h3SpanGustaJs.innerHTML=datosPersona.interesPorJs; 
}
function recorrerListadoYRenderizarTarjetas() {

  
 listado.forEach((card)=>{
 

    div.innerHTML+=`
      <div class="caja">
    <img src="${card.imgUrl}" alt="${card.lenguajes}">
      <p class="lenguajes">Lenguajes: ${card.lenguajes}</p>
      <p class="bimestre">Bimestre: ${card.bimestre}</p>
      </div>
      `     
  })

   materiasBtn.removeEventListener('click',recorrerListadoYRenderizarTarjetas)
}
function alternarColorTema() {

  cambiarIntensidad.classList.toggle("dark");

}
window.addEventListener('keypress', (e)=>{

   e.key === "f"? pClase.classList.remove('oculto'):null;
        
        
});
      


