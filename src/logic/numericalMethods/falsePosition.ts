import { evaluarFuncion } from "../utils";

export function falsaPosicion(
  fx: string,
  a: number,
  b: number,
  tol: number,
  maxIter: number
) {
  let fa = evaluarFuncion(fx, a);
  let fb = evaluarFuncion(fx, b);

  if (fa * fb > 0) {
    throw new Error(
      "El intervalo no es válido: f(a) y f(b) deben tener distinto signo."
    );
  }

  let iteraciones: any[] = [];
  let c = 0;

  for (let i = 1; i <= maxIter; i++) {

    c = (a * fb - b * fa) / (fb - fa);
    const fc = evaluarFuncion(fx, c);

    
    iteraciones.push({
      i,
      a,
      b,
      x: c,    
      fx: fc   
    });

    if (Math.abs(fc) < tol) break;

    if (fa * fc < 0) {
      b = c;
      fb = fc;
    } else {
      a = c;
      fa = fc;
    }
  }

  return {
    raiz: c,
    iteraciones,
  };
}
