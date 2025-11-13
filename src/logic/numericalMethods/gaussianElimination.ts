export function eliminacionGaussiana(A: number[][], B: number[]) {
  const n = A.length;
  const M = A.map((row, i) => [...row, B[i]]); // Matriz aumentada

  // Eliminación
  for (let k = 0; k < n - 1; k++) {
    for (let i = k + 1; i < n; i++) {
      const factor = M[i][k] / M[k][k];
      for (let j = k; j <= n; j++) {
        M[i][j] -= factor * M[k][j];
      }
    }
  }

  // Sustitución regresiva
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum = M[i][n];
    for (let j = i + 1; j < n; j++) {
      sum -= M[i][j] * x[j];
    }
    x[i] = sum / M[i][i];
  }

  return { x };
}
