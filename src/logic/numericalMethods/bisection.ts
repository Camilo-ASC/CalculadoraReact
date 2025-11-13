import { evaluarFuncion } from "../utils";

export function biseccion(
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
  let m = 0;

  for (let i = 1; i <= maxIter; i++) {
    m = (a + b) / 2;
    const fm = evaluarFuncion(fx, m);

    iteraciones.push({ i, a, b, m, fm });

    if (Math.abs(fm) < tol) break;

    if (fa * fm < 0) {
      b = m;
      fb = fm;
    } else {
      a = m;
      fa = fm;
    }
  }

  return {
    raiz: m,
    iteraciones,
  };
}
