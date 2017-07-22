var celdas = document.getElementsByTagName('td');
var pasajerosObjts=[];
var N=32;
var array = [];
var global;

function AsientosReservados(nombrePasajero,apellidoPasajero,dniPasajero,numAsiento){
         this.nombrePasajero = nombrePasajero;
         this.apellidoPasajero = apellidoPasajero;
         this.dniPasajero = dniPasajero;
         this.numAsiento = numAsiento;
   
}

for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',crearCajas,false);
}

var num= new nAsiento();


function crearCajas(event){
            document.getElementById("tablaContenido").innerHTML=" <input type=" +"text "+ "id="+"txtNombre "+" placeholder="+"Nombre " +"required>"+"<br />"+
                    "<input type="+"text " + "id="+"txtApellido "+" placeholder="+"Apellido>"+"<br />"+
                    "<input type="+"text " +"id="+"txtDNI "+ "placeholder="+"DNI "+ "required>";
            
            document.getElementById("botones").innerHTML = '<button id="btnReservar" onclick="reservar()" >RESERVAR</button>'+
                    '<button id="btnCancelar" onclick="cancelar()">CANCELAR</button>';        

            var numAsiento=event.target.textContent;
            num.retornaAsiento(numAsiento);

            var numero = parseInt(numAsiento);
            for(var i=0; i<pasajerosObjts.length; i++){
                var datos = pasajerosObjts[i];
                if( datos.numAsiento == numero){
                    document.getElementById("txtNombre").value=datos.nombrePasajero;
                    document.getElementById("txtApellido").value=datos.apellidoPasajero;
                    document.getElementById("txtDNI").value=datos.dniPasajero;
                    document.getElementById("resultado").innerHTML=""; 
                    
                }
            }
            global=event.target;
    
}

function reservar(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var DNI = document.getElementById("txtDNI").value;
    var asiento = num.numAsiento;

    var asientoObj = new AsientosReservados(nombre, apellido, DNI,asiento);
    pasajerosObjts.push(asientoObj);
    
    console.log(pasajerosObjts);
    console.log(array);

    for (var i = 0; i < celdas.length; i++) {
        if(celdas[i].textContent == asiento){
            celdas[i].style.backgroundColor="#66ff33";
        }
        //limpiar();
    }
    alert("Asiento Reservado");
    

}


function nAsiento(){
    this.retornaAsiento= function (numAsiento){
        this.numAsiento= numAsiento;
    }
}

function buscar(){
    
    var DNIbusqueda = document.getElementById("dniBusqueda").value;
    for(var i=0; i<pasajerosObjts.length; i++){
        var datos = pasajerosObjts[i];
        if( datos.dniPasajero == DNIbusqueda){

            document.getElementById("tablaContenido").innerHTML=" <input type=" +"text "+ "id="+"txtNombre "+" placeholder="+"Nombre " +"required>"+"<br />"+
            "<input type="+"text " + "id="+"txtApellido "+" placeholder="+"Apellido>"+"<br />"+
            "<input type="+"text " +"id="+"txtDNI "+ "placeholder="+"DNI "+ "required>";

            txtNombre.value = datos.nombrePasajero;
            txtApellido.value = datos.apellidoPasajero;
            txtDNI.value = datos.dniPasajero;
        }
    }
    
}

function cancelar(){
    var DNI = document.getElementById("txtDNI").value;

    for(var i=0; i<pasajerosObjts.length; i++){  
        var datos = pasajerosObjts[i];
        if( datos.dniPasajero == DNI){
            pasajerosObjts.splice(i,1);

            limpiar();
            global.style.backgroundColor = "white";
            
            alert("Pasajero eliminado");
        }
    }
    


}

function listar(){
    var resultado = document.getElementById("resultado");
    for(var i=0; i<pasajerosObjts.length; i++){
        var datos = pasajerosObjts[i];
        console.log(pasajerosObjts[i]);
        resultado.innerHTML += "Nombre del Pasajero: " + datos.nombrePasajero + "<br />"+
                              "Apellido del Pasajero: " + datos.apellidoPasajero + "<br />"+
                              "DNI del Pasajero: "+ datos.dniPasajero + "<br />"+
                              "Número del Asiento: " + datos.numAsiento + "<br />" + "----------------------" + "<br />";
    }
    
    
}

function limpiar(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtApellido").value="";
    document.getElementById("txtDNI").value="";
    document.getElementById("resultado").innerHTML=""; 
}
