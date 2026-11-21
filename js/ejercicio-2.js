//2- Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
//Para realizar este método tener en cuenta la siguiente tabla de generaciones:

//esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
//mostrarDatos: devuelve toda la información del objeto.
//Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo; // "H" hombre, "M" mujer
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    const anio = this.anioNacimiento;
    let generacion = "";
    let rasgo;

    if (anio>= 1994 && anio <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (anio >= 1981 && anio <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (anio >= 1969 && anio <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (anio >= 1949 && anio <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (anio >= 1930 && anio <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      return `${this.nombre} nació en ${anio}, un año fuera de la tabla de generaciones.`;
    }

    return `${this.nombre} pertenece a la ${generacion}. Rasgo característico: ${rasgo}.`;
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return `${this.nombre} es mayor de edad.`;
    }
      return `${this.nombre} es menor de edad.`;
    }

  mostrarDatos() {
    const sexoTexto = this.sexo === "H" ? "Hombre" : "Mujer";
    return (
      `Nombre: ${this.nombre}\n` +
      `Edad: ${this.edad}\n` +
      `DNI: ${this.dni}\n` +
      `Sexo: ${sexoTexto}\n` +
      `Peso: ${this.peso} kg\n` +
      `Altura: ${this.altura} m\n` +
      `Año de Nacimiento: ${this.anioNacimiento}`
    );
  }
}

const btnGeneracion = document.getElementById("btnGeneracion");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnMostrarDatos = document.getElementById("btnMostrarDatos");

function crearPersona() {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = Number(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value.trim();
  const sexo = document.getElementById("sexo").value;
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const anioNacimiento = Number(document.getElementById("anioNacimiento").value);

  if (nombre === "" || dni === "" || !edad || !peso || !altura || !anioNacimiento) {
    alert("Por favor, completa todos los campos correctamente.");
    return null;
  }

  return new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
}

btnGeneracion.addEventListener("click", () => {
  const persona = crearPersona();
  if (persona) alert(persona.mostrarGeneracion());
});

btnMayorEdad.addEventListener("click", () => {
  const persona = crearPersona();
  if (persona) alert(persona.esMayorDeEdad());
});

btnMostrarDatos.addEventListener("click", () => {
  const persona = crearPersona();
  if (persona) alert(persona.mostrarDatos());
});