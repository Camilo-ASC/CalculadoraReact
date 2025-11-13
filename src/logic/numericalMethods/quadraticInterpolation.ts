export function interpolacionCuadratica(
    x: number[],
    y: number[],
    valor: number
) {
    if (x.length !== 3 || y.length !== 3) {
    throw new Error("Debes ingresar exactamente 3 puntos para la interpolación cuadrática.");
    }

    const [x0, x1, x2] = x;
    const [y0, y1, y2] = y;

  // Determinante del sistema
    const det =
        x0 ** 2 * (x1 - x2) +
        x1 ** 2 * (x2 - x0) +
        x2 ** 2 * (x0 - x1);

    if (det === 0) {
    throw new Error("Los puntos no permiten una interpolación válida (determinante 0).");
    }

  // Cálculo de coeficientes
    const a0 =
       (y0 * (x1 * x2 * (x1 - x2)) +
       y1 * (x2 * x0 * (x2 - x0)) +
       y2 * (x0 * x1 * (x0 - x1))) /
    det;

    const a1 =
       (y0 * (x2 ** 2 - x1 ** 2) +
       y1 * (x0 ** 2 - x2 ** 2) +
       y2 * (x1 ** 2 - x0 ** 2)) /
    det;

    const a2 =
       (y0 * (x1 - x2) + y1 * (x2 - x0) + y2 * (x0 - x1)) /
    det;

  // Evaluación del polinomio en el valor dado
  const resultado = a0 + a1 * valor + a2 * valor ** 2;

    return {
        a0,
        a1,
        a2,
        resultado,
    };
}
