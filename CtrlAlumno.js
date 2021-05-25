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
