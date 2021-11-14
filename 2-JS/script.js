"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];
//función para comparr dos objetos en base de su campo puntos.

function compare(a, b) {
  if (a.puntos > b.puntos) {
    return -1;
  }
  if (a.puntos < b.puntos) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

//función que summa los puntos de cada aquipo.
const SumaPuntos = (a, b) => a + b;

function primeroyultimo(params) {

  const nuevoarray = params.map((equip) => {
    const { puntos } = equip;
    const puntostotales = puntos.reduce(SumaPuntos);
    equip.puntos = puntostotales;
    return equip;
  });

  nuevoarray.sort(compare);
  const mayor = nuevoarray.slice(0, 1);
  const menor = nuevoarray.slice(nuevoarray.length - 1);
  const array3 = mayor.concat(menor);
  return array3;
}

console.log(primeroyultimo(puntuaciones));
