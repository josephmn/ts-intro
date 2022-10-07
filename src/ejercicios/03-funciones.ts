/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number) => {
  return (a = b);
};

// ? se marca con valor opcional, y siempre establecer los tipos de datos para hacer
// mas entendible el proyecto para ti y para otros programadores
function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

// void indica que no retorna nada
function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;

//   console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Strider",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida: ", this.pv);
  }
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();

// const resultado = sumar(10,20);
// const resultado = multiplicar(5,10);
// const resultado = multiplicar(5);
// console.log(resultado);
