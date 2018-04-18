// Autor: Giovanny Mora
// Frontend developer 
// Portafolio de proyectos https://github.com/gmorac

var display = document.getElementById('display');
var acum = 0;
var numPantalla = "";
var primerOp = true;

var operandos = {
  operador: "",
  opAnterior: "",
  numAnterior: 0
}

var calculadora = {

  init: function() {
    /* Asignacion de teclas*/
    var self = this
    // Números
    var tecla0 = document.getElementById('0');
    var tecla1 = document.getElementById('1');
    var tecla2 = document.getElementById('2');
    var tecla3 = document.getElementById('3');
    var tecla4 = document.getElementById('4');
    var tecla5 = document.getElementById('5');
    var tecla6 = document.getElementById('6');
    var tecla7 = document.getElementById('7');
    var tecla8 = document.getElementById('8');
    var tecla9 = document.getElementById('9');
    // Operaciones
    var on = document.getElementById('on');
    var signo = document.getElementById('sign');
    var punto = document.getElementById('punto');
    var dividido = document.getElementById('dividido');
    var menos = document.getElementById('menos');
    var mas = document.getElementById('mas');
    var por = document.getElementById('por');
    var igual = document.getElementById('igual');

    
    tecla0.addEventListener("click", function() {
      self.numero("0");
    });

    tecla0.addEventListener("mousedown", function() {
      tecla0.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla0.addEventListener("mouseout", function() {
      tecla0.setAttribute("style", "transform: scale(1,1)");
    });

    tecla1.addEventListener("click", function() {
      self.numero("1");
    });

    tecla1.addEventListener("mousedown", function() {
      tecla1.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla1.addEventListener("mouseout", function() {
      tecla1.setAttribute("style", "transform: scale(1,1)");
    });

    tecla2.addEventListener("click", function() {
      self.numero("2");
    });

    tecla2.addEventListener("mousedown", function() {
      tecla2.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla2.addEventListener("mouseout", function() {
      tecla2.setAttribute("style", "transform: scale(1,1)");
    });

    tecla3.addEventListener("click", function() {
      self.numero("3");
    });

    tecla3.addEventListener("mousedown", function() {
      tecla3.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla3.addEventListener("mouseout", function() {
      tecla3.setAttribute("style", "transform: scale(1,1)");
    });

    tecla4.addEventListener("click", function() {
      self.numero("4");
    });

    tecla4.addEventListener("mousedown", function() {
      tecla4.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla4.addEventListener("mouseout", function() {
      tecla4.setAttribute("style", "transform: scale(1,1)");
    });

    tecla5.addEventListener("click", function() {
      self.numero("5");
    });

    tecla5.addEventListener("mousedown", function() {
      tecla5.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla5.addEventListener("mouseout", function() {
      tecla5.setAttribute("style", "transform: scale(1,1)");
    });

    tecla6.addEventListener("click", function() {
      self.numero("6");
    });

    tecla6.addEventListener("mousedown", function() {
      tecla6.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla6.addEventListener("mouseout", function() {
      tecla6.setAttribute("style", "transform: scale(1,1)");
    });

    tecla7.addEventListener("click", function() {
      self.numero("7");
    });

    tecla7.addEventListener("mousedown", function() {
      tecla7.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla7.addEventListener("mouseout", function() {
      tecla7.setAttribute("style", "transform: scale(1,1)");
    });

    tecla8.addEventListener("click", function() {
      self.numero("8");
    });

    tecla8.addEventListener("mousedown", function() {
      tecla8.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla8.addEventListener("mouseout", function() {
      tecla8.setAttribute("style", "transform: scale(1,1)");
    });

    tecla9.addEventListener("click", function() {
      self.numero("9");
    });

    tecla9.addEventListener("mousedown", function() {
      tecla9.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    tecla9.addEventListener("mouseout", function() {
      tecla9.setAttribute("style", "transform: scale(1,1)");
    });

    on.addEventListener("click", function() {
      self.numero("on");
    });

    on.addEventListener("mousedown", function() {
      on.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    on.addEventListener("mouseout", function() {
      on.setAttribute("style", "transform: scale(1,1)");
    });

    signo.addEventListener("click", function() {
      self.signo();
    });

    signo.addEventListener("mousedown", function() {
      signo.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    signo.addEventListener("mouseout", function() {
      signo.setAttribute("style", "transform: scale(1,1)");
    });

    punto.addEventListener("click", function() {
      if (!display.innerHTML.includes(".")) {
        self.numero(".");
      }
    });

    punto.addEventListener("mousedown", function() {
      punto.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    punto.addEventListener("mouseout", function() {
      punto.setAttribute("style", "transform: scale(1,1)");
    });

    mas.addEventListener("click", function() {
      self.operandos("+");
    });

    mas.addEventListener("mousedown", function() {
      mas.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    mas.addEventListener("mouseout", function() {
      mas.setAttribute("style", "transform: scale(1,1)");
    });

    menos.addEventListener("click", function() {
      self.operandos("-");
    });

    menos.addEventListener("mousedown", function() {
      menos.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    menos.addEventListener("mouseout", function() {
      menos.setAttribute("style", "transform: scale(1,1)");
    });

    por.addEventListener("click", function() {
      self.operandos("*");
    });

    por.addEventListener("mousedown", function() {
      por.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    por.addEventListener("mouseout", function() {
      por.setAttribute("style", "transform: scale(1,1)");
    });

    dividido.addEventListener("click", function() {
      self.operandos("/");
    });

    dividido.addEventListener("mousedown", function() {
      dividido.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    dividido.addEventListener("mouseout", function() {
      dividido.setAttribute("style", "transform: scale(1,1)");
    });

    igual.addEventListener("click", function() {
      self.operandos("=");
    });

    igual.addEventListener("mousedown", function() {
      igual.setAttribute("style", "transform: scale(0.95,0.95)");
    });

    igual.addEventListener("mouseout", function() {
      igual.setAttribute("style", "transform: scale(1,1)");
    });

  },

  numero: function (num){
    numPantalla = display.innerHTML
    // Validar que no hayan más de 8 digitos
    if ( numPantalla.length<8 ) {
      
      if ( num=="."&&numPantalla=="0" ) {
        numPantalla+=num;
        display.innerHTML=numPantalla;
      }
      else if ( numPantalla=="0" ) {
        numPantalla = num;
        display.innerHTML = numPantalla;
      } else {
        numPantalla+=num;
        display.innerHTML=numPantalla;
      }
    }
    if ( num == "on" ) {
      operandos.numAnterior = 0;
      operandos.opAnterior = "";
      operandos.operador = "";
      acum = 0;
      numPantalla = "";
      primerOp = true;
      display.innerHTML = 0;
    }
  },

  signo: function() {

    numPantalla = display.innerHTML;
    var aux = numPantalla;
    
    if ( numPantalla != "0" ) {
      
      if ( numPantalla.includes("-") ) {
        display.innerHTML = numPantalla.substr(1,numPantalla.length-1);
      } else {
        numPantalla = "-";
        numPantalla+=aux;
        display.innerHTML = numPantalla;
      }
    }
  },

  operandos: function(op) {

    switch (op) {
      case "+":
      if ( operandos.opAnterior == "*" || operandos.opAnterior == "/" ) {
        acum = acum + parseFloat(numPantalla)-1;
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "+";
        primerOp = false;
      } else {
        acum = acum + parseFloat(numPantalla);
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "+";
        primerOp = false;
      }
        operandos.operador = "+";
        break;
      case "-":
        if (primerOp) {
          acum = parseFloat(numPantalla);
          primerOp = false;
          display.innerHTML = numPantalla = "";
          operandos.opAnterior = "-";
        } else if ( operandos.opAnterior == "*" || operandos.opAnterior == "/" ) {
          acum = acum + parseFloat(numPantalla)-1;
          display.innerHTML = numPantalla = "";
          operandos.opAnterior = "-";
          primerOp = false;
        } else {
          acum = acum - parseFloat(numPantalla);
          display.innerHTML = numPantalla = "";
          operandos.opAnterior = "-";
        }

        operandos.operador = "-";
        break;
      case "*":

      if (primerOp) {
        acum = parseFloat(numPantalla);
        primerOp = false;
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "*";
      } else if ( operandos.opAnterior == "+" || operandos.opAnterior == "-" ) {        
        acum = acum + parseFloat(numPantalla);
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "*";
        primerOp = false;
      } else {
        acum = acum * parseFloat(numPantalla);
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "*";
      }

      operandos.operador = "*";

      break;
      case "/":
      if (primerOp) {
        acum = parseFloat(numPantalla);
        primerOp = false;
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "/";
      } else if (operandos.opAnterior == "+" || operandos.opAnterior == "-") {
        acum = acum + parseFloat(numPantalla);
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "/";
        primerOp = false;
      } else {
        acum = acum / parseFloat(numPantalla);
        display.innerHTML = numPantalla = "";
        operandos.opAnterior = "/";
      }

      operandos.operador = "/";
      break;
      case "=":

      if ( operandos.operador=="=" ) {
        switch (operandos.opAnterior) {
          case "+":
            acum = acum + operandos.numAnterior;
            acum = organizarDisplay(acum);
            display.innerHTML = acum;
            break;
          case "-":
            acum = acum - operandos.numAnterior;
            acum = organizarDisplay(acum);
            display.innerHTML = acum;
            break;
          case "*":
            acum = acum * operandos.numAnterior;
            acum = organizarDisplay(acum);
            display.innerHTML = acum;
            break;
          case "/":
            acum = acum / operandos.numAnterior;
            acum = organizarDisplay(acum);
            display.innerHTML = acum;
            break;
        }
      }
      
      else {
        switch ( operandos.opAnterior ) {
          case "+":
          if ( operandos.operador=="+" ) {
            operandos.numAnterior = parseFloat(display.innerHTML);
          }
          acum = acum + parseFloat(numPantalla);
          acum = organizarDisplay(acum);
          display.innerHTML = acum;
          numPantalla = 0;
          operandos.operador = "=";
          break;

          case "-":
          if ( operandos.operador=="-" ) {
            operandos.numAnterior = parseFloat(display.innerHTML);
          }

          acum = acum - parseFloat(numPantalla);
          acum = organizarDisplay(acum);
          display.innerHTML = acum;
          numPantalla =0;
          operandos.operador = "=";
          break;

          case "*":
          if ( operandos.operador=="*" ) {
            operandos.numAnterior = parseFloat(display.innerHTML);
          }

          acum = acum * parseFloat(numPantalla);
          acum = organizarDisplay(acum);
          display.innerHTML = acum;
          numPantalla =1;
          operandos.operador = "=";
          break;

          case "/":
          if ( operandos.operador=="/" ) {
            operandos.numAnterior = parseFloat(display.innerHTML);
          }

          acum = acum / parseFloat(numPantalla);
          acum = organizarDisplay(acum);
          display.innerHTML = acum;
          numPantalla =1;
          operandos.operador = "=";
          break;
        }
      }
        break;
    }
  }

}

function organizarDisplay(pantalla) {
  
  var cadena = String(pantalla);
  
  if ( cadena.length > 8 ) {
    return parseFloat(cadena.substr(0,8));
  } else {
    return pantalla;
  }
}

calculadora.init();
