import { evaluarFuncion } from "../utils";

export function puntoFijo(
  gx: string,
  x0: number,
  tol: number,
  maxIter: number
) {
  let iteraciones: any[] = [];
  let x = x0;
  let error = tol + 1;

  for (let i = 1; i <= maxIter && error > tol; i++) {
    const gxVal = evaluarFuncion(gx, x);
    error = Math.abs(gxVal - x);

    iteraciones.push({
      i,
      x: x,
      fx: gxVal,
      error,
    });

    x = gxVal;
  }

  return {
    raiz: x,
    iteraciones,
  };
}
