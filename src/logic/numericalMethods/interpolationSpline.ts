export function interpolacionSpline(x: number[], y: number[], valor: number) {
    const n = x.length;
        if (n < 3) throw new Error("Se requieren al menos 3 puntos.");

    const h: number[] = [];
    const alpha: number[] = [];
    const l: number[] = new Array(n).fill(0);
    const mu: number[] = new Array(n).fill(0);
    const z: number[] = new Array(n).fill(0);
    const c: number[] = new Array(n).fill(0);
    const b: number[] = new Array(n - 1).fill(0);
    const d: number[] = new Array(n - 1).fill(0);
    const a = [...y];

  // Paso 1: Calcular h y alpha
    for (let i = 0; i < n - 1; i++) {
    h[i] = x[i + 1] - x[i];
    }

    for (let i = 1; i < n - 1; i++) {
    alpha[i] =
      (3 / h[i]) * (a[i + 1] - a[i]) - (3 / h[i - 1]) * (a[i] - a[i - 1]);
    }

  // Paso 2: Sistema tridiagonal
    l[0] = 1;
    mu[0] = 0;
    z[0] = 0;

    for (let i = 1; i < n - 1; i++) {
    l[i] = 2 * (x[i + 1] - x[i - 1]) - h[i - 1] * mu[i - 1];
    mu[i] = h[i] / l[i];
    z[i] = (alpha[i] - h[i - 1] * z[i - 1]) / l[i];
    }

    l[n - 1] = 1;
    z[n - 1] = 0;
    c[n - 1] = 0;

  // Paso 3: Sustitución regresiva
    for (let j = n - 2; j >= 0; j--) {
    c[j] = z[j] - mu[j] * c[j + 1];
    b[j] = (a[j + 1] - a[j]) / h[j] - (h[j] * (c[j + 1] + 2 * c[j])) / 3;
    d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
    }

  // Paso 4: Evaluar en el valor dado
    let i = n - 2;
        for (let j = 0; j < n - 1; j++) {
    if (valor >= x[j] && valor <= x[j + 1]) {
        i = j;
        break;
        }
    }

    const dx = valor - x[i];
  const resultado = a[i] + b[i] * dx + c[i] * dx ** 2 + d[i] * dx ** 3;

  // Guardar los coeficientes
    const coeficientes = x.slice(0, n - 1).map((xi, idx) => ({
    intervalo: `[${xi}, ${x[idx + 1]}]`,
    a: a[idx],
    b: b[idx],
    c: c[idx],
    d: d[idx],
        }));

    return { resultado, coeficientes };
}
