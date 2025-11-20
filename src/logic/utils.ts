/**
 * Evalúa una función matemática dada en string para un valor x.
 * Ejemplo de cadena válida:  "x**2 - 3*x + 1"
 */
export function evaluarFuncion(funcion: string, x: number): number {
  try {
    // Reemplazar ^ por ** para potencias
    const funcionSegura = funcion.replace(/\^/g, "**");

    // Crear función dinámica
    const f = new Function("x", `return ${funcionSegura};`);
    return f(x);
  } catch {
    throw new Error("No se pudo evaluar la función correctamente.");
  }
}
