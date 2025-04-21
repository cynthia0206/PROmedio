function calcularPromedio() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var nota5 = parseFloat(document.getElementById("nota5").value);

    var resultadoPromedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
    
    if (resultadoPromedio >= 7) {
        document.writeln("promedio: "+ resultadoPromedio + " ¡Pasa de año!");
      } else if (resultadoPormedio >= 3.5 && resultadoPromedio < 7) {
        document.writeln("promedio: " + resultadoPromedio + " Queda en suspenso.");
      } else {
        document.writeln("promedio: "+  resultadoPromedio +" Pierde el año.");
      }
}
