/**
 * Evalúa una función matemática dada en string para un valor x.
 * Ejemplo de cadena válida:  "x**2 - 3*x + 1"
 */
export function evaluarFuncion(funcion: string, x: number): number {
  try {
    // Creamos una función dinámica: f(x) => return funcion;
    const f = new Function("x", `return ${funcion};`);
    return f(x);
  } catch {
    throw new Error("No se pudo evaluar la función correctamente.");
  }
}
