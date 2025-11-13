export function interpolacionLagrange(x: number[], y: number[], valor: number) {
    const n = x.length;
        let resultado = 0;
    const pasos: any[] = [];

    for (let i = 0; i < n; i++) {
    let Li = 1;
    for (let j = 0; j < n; j++) {
        if (i !== j) {
        Li *= (valor - x[j]) / (x[i] - x[j]);
    }
    }
    const termino = Li * y[i];
    resultado += termino;

    pasos.push({
        i: i + 1,
        xi: x[i],
        yi: y[i],
        Li: Li,
        termino,
    });
    }

    return { resultado, pasos };
}
