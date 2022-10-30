//Arreglo de objeto
const propiedadesJSON = [
                          {
                            name: "Casa de campo",
                            description: "Un lugar ideal para descansar de la ciudad",
                            src:
                              "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
                            rooms: 2,
                            m: 170
                          },
                          {
                            name: "Casa de playa",
                            description: "Despierta tus días oyendo el oceano",
                            src:
                              "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
                            rooms: 2,
                            m: 130
                          },
                          {
                            name: "Casa en el centro",
                            description: "Ten cerca de ti todo lo que necesitas",
                            src:
                              "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
                            rooms: 1,
                            m: 80
                          },
                          {
                            name: "Casa rodante",
                            description: "Conviertete en un nómada del mundo sin salir de tu casa",
                            src:
                              "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
                            rooms: 1,
                            m: 6
                          },
                          {
                            name: "Departamento",
                            description: "Desde las alturas todo se ve mejor",
                            src:
                              "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
                            rooms: 3,
                            m: 200
                          },
                          {
                            name: "Mansión",
                            description: "Vive una vida lujosa en la mansión de tus sueños ",
                            src:
                              "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
                            rooms: 5,
                            m: 500
                          }
  ];

//Carga dinámica con let html y ciclo for of
window.onload = function() {
  cargarPropiedades(propiedadesJSON);
};

function cargarPropiedades(arreglo_propiedades_resultado) {
  let html = '';
  let contenedor_propiedades = document.querySelector('.propiedades');

  for (let propiedad of arreglo_propiedades_resultado){
    html += `<div class="propiedad">
              <div class="img" style="background-image: url('${propiedad.src}')"></div>
              <section>
                <h5>${propiedad.name}</h5>
                <div class="d-flex justify-content-between">
                  <p>Cuartos: ${propiedad.rooms}</p>
                  <p>Metros: ${propiedad.m}</p>
                </div>
                <p class="my-3">${propiedad.description}</p>
                <button class="btn btn-info ">Ver más</button>
              </section>
            </div>`
  }

//Valor Total de arreglo  
  document.querySelector('#total_propiedades').innerHTML = arreglo_propiedades_resultado.length;  /*el valor debe ser el largo del arreglo (nombre arrlego.length)*/
  contenedor_propiedades.innerHTML = html;//mostrar carga dinamica del arreglo html  
}

//Validación campos por llenar en el buscador
function validarCampos(){
  let num_cuartos = document.querySelector('#num_cuartos');
  let metros_desde = document.querySelector('#metros_desde');
  let metros_hasta = document.querySelector('#metros_hasta');  

  if (num_cuartos.value == '') {
    alert('Debes ingresar número de cuartos');
    num_cuartos.focus();
    return false; 
  } else if (metros_desde.value == '') {
      alert('Debes ingresar metros desde');
      metros_desde.focus();
      return false; 
  } else if (metros_hasta.value == '') {
      alert('Debes ingresar metros hasta');
      metros_hasta.focus();
      return false; 
  } else {
    filtrarPropiedades(+num_cuartos.value, +metros_desde.value, +metros_hasta.value); /*el dato se obtiene del input let validarCampos*/
  }
}

//Evento click validarCampos
document.querySelector('#buscar').addEventListener('click', function() {
  validarCampos();
});


// Funcion filtro de Propiedades
  function filtrarPropiedades(num_cuartos, metros_desde, metros_hasta) {
    let arreglo_propiedades_resultado = [];
    for (let propiedad of propiedadesJSON) {
      if (propiedad.rooms == num_cuartos && metros_desde <= propiedad.m && metros_hasta >= propiedad.m) {
        arreglo_propiedades_resultado.push(propiedad);
      }
    }
    
     cargarPropiedades(arreglo_propiedades_resultado);
  } 
