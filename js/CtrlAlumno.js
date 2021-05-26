var forma = document.getElementById("forma"),
        entradas = ["boleta", "nombre", "grupo","materia", "fecha"],
        salidas = ["salidaBoleta", "salidaNombre", "salidaGrupo","salidaMateria", "salidaFecha"],
        txtFecha = forma["fecha"],salidaFecha = document.getElementById("salidaFecha"),
        MiFecha;

forma.addEventListener("submit", Enviar, false);

function Enviar() {
    
  var fecha = new Date (txtFecha.value);
    MiFecha = (fecha.getDate()+1) + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    salidaFecha.textContent = MiFecha;
    salidaFecha.textContent = "Fecha: " + MiFecha;
    
  var boleta = forma["boleta"].value;
  var Salida = forma["salidaBoleta"];
      Salida.value = "El número de boleta es: " + boleta;
  
  var nombre = forma["nombre"].value;
  var Salida = forma["salidaNombre"];
      Salida.value = "El nombre es: "+ nombre;
      
  var grupo = forma["grupo"].value;
  var Salida = forma["salidaGrupo"];
      Salida.value = "El grupo es: "+ grupo;   
      
  var materia = forma["materia"].value;
  var Salida = forma["salidaMateria"];
      Salida.value = "La materia es: "+ materia;     
}
 var firebaseConfig = {
    apiKey: "AIzaSyDuu4GWFiK_2hqIvq7-pqyFrvUdKJgjp88",
    authDomain: "alumno-7a953.firebaseapp.com",
    projectId: "alumno-7a953",
    storageBucket: "alumno-7a953.appspot.com",
    messagingSenderId: "988363010766",
    appId: "1:988363010766:web:7f97b5df4032829804969f",
    measurementId: "G-X8W187JGY8"
  };
