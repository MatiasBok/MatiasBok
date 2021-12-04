
class Jugador{ /*por convención las clases van siempre en mayúscula*/
    constructor (nombre, apellido, nombreDeUsuario, sexo, fechaDeNacimiento, ciudad, provincia, DNI, codigoPostal, manoHabil){
        this.nombre=nombre;
        this.apellido=apellido;
        this.nombreDeUsuario=nombreDeUsuario;
        this.sexo=sexo;
        this.fechaDeNacimiento=fechaDeNacimiento;
        this.ciudad=ciudad;
        this.provincia=provincia;
        this.DNI=DNI;
        this.codigoPostal=codigoPostal;
        this.manoHabil=manoHabil;
    } 

    devolverDatos() {
        return (`${this.nombre} - ${this.apellido} - ${this.nombreDeUsuario} - ${this.sexo} - ${this.fechaDeNacimiento} - ${this.ciudad} - ${this.provincia} - ${this.DNI} - ${this.codigoPostal} - ${this.manoHabil}`)
    }
} 

let jugadores = []

let formulario = document.getElementById('crearUsuario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let datForm = new FormData(e.target)
    /*console.log (datForm.get ("nombre")) /*Forma prolija de acceder a un formulario*/
    /*let nombre = document.getElementById ('nombre').value Otra forma de acceder a los datos*/ 
    let usuario = new Jugador (datForm.get ("nombre"), datForm.get ("apellido"), datForm.get ("nombreDeUsuario"), datForm.get ("sexo"), datForm.get ("fechaDeNacimiento"), datForm.get ("ciudad"), datForm.get ("provincia"), datForm.get ("DNI"), datForm.get ("codigoPostal"), datForm.get ("manoHabil"))
    jugadores.push(usuario)

    localStorage.setItem ('jugadores', JSON.stringify(jugadores))

    formulario.reset ()

})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("crearUsuario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Por favor indique su nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('Por favor indique su apellido');
      return;
    }    
    var nombreDeUsuario = document.getElementById('nombreDeUsuario').value;
    if(nombreDeUsuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var fechaDeNacimiento = document.getElementById('fechaDeNacimiento').value;
    if(fechaDeNacimiento.length == 0) {
      alert('Por favor indique su fecha de nacimiento');
      return;
    }
    var ciudad = document.getElementById('ciudad').value;
    if(ciudad.length == 0) {
      alert('Por favor indique su ciudad');
      return;
    }
    var numeroDeDocumento = document.getElementById('numeroDeDocumento').value;
    if(numeroDeDocumento.length == 0) {
      alert('Por favor indique su ciudad');
      return;
    }
    var codigoPostal = document.getElementById('codigoPostal').value;
    if(codigoPostal.length == 0) {
      alert('Por favor indique su ciudad');
      return;
    }
    $.validator.addMethod("pwcheck", function (value) {
        return /[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[A-Z]/.test(value)
        alert('La clave no es válida');
    }); 
    this.submit();
  }

  




/*Para que un usuario agregue un jugador*/
/*
function agregarJugador() {
    let nombreNuevo = prompt("Ingrese el nombre del / de la jugador/a");
    let apellidoNuevo = prompt ("Ingrese el apellido del / de la jugador/a");
    let sexoNuevo = prompt ("Ingrese el sexo del / de la jugador/a");
    let fechaDeNacimientoNuevo = prompt("Ingrese la fecha de nacimiento del / de la jugador/a (dd-mm-aaaa)");
    let edadNuevo = parseInt (prompt("Ingrese la edad del / de la jugador/a"));
    let DNINuevo = parseInt (prompt("Ingrese el DNI del / de la jugador/a"));
    let manoHabilNuevo = prompt("Ingrese la mano hábil del / de la jugador/a")

    const jugador = new Jugador (nombreNuevo, apellidoNuevo, sexoNuevo, fechaDeNacimientoNuevo, edadNuevo, DNINuevo, manoHabilNuevo)
    console.log(jugador)
    jugadores.push
}
   */
  
/*
agregarJugador() /*Necesario para que aparezca el "popup" y el usuario pueda completar*/
/*
function Pregunta() {
    let consulta = prompt ("Quiere agregar un/a jugador/a más?")
    if (consulta.toLowerCase() == "si"){
        agregarJugador() 
        Pregunta()
    }
    else{
        alert ("Muchas Gracias")
    } 
}

Pregunta()
console.log (jugadores)

/*Para ordenar a los jugadores según un parámetro*/
/*
jugadores.sort (function (a,b) {
    return a.edad - b.edad
});

console.log(jugadores)*/

