import { evaluate } from "mathjs";

export function trapecioCompuesto(
    func: string,
    a: number,
    b: number,
    n: number ){

    if (n <= 0) {
    throw new Error("El número de subintervalos n debe ser mayor que 0.");
    }

    const h = (b - a) / n;
        let suma = 0;

    const iteraciones: any[] = [];

    for (let i = 0; i <= n; i++) {
       const xi = a + i * h;
        const fxi = evaluate(func, { x: xi });

    iteraciones.push({
        i,
        xi,
        fxi
    });

    if (i !== 0 && i !== n) {
        suma += fxi;
    }
    }

    const fa = iteraciones[0].fxi;
    const fb = iteraciones[n].fxi;

  const resultado = (h / 2) * (fa + 2 * suma + fb);

    return {
        h, resultado, iteraciones
    };
}
