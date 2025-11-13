export function interpolacionLineal(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  x: number
) {
  if (x1 === x0) {
    throw new Error("x0 y x1 no pueden ser iguales (división por cero).");
  }

  const y =
    y0 + ((y1 - y0) / (x1 - x0)) * (x - x0);

  return {
    x0,
    y0,
    x1,
    y1,
    x,
    y,
  };
}
