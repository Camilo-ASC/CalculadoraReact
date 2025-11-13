export function jacobi(
  A: number[][],
  B: number[],
  x0: number[],
  tol: number,
  maxIter: number
) {
  const n = A.length;
  let xPrev = [...x0];
  let xNew = new Array(n).fill(0);
  let iteraciones: any[] = [];

  for (let k = 1; k <= maxIter; k++) {
    for (let i = 0; i < n; i++) {
      let sum = B[i];
      for (let j = 0; j < n; j++) {
        if (j !== i) sum -= A[i][j] * xPrev[j];
      }
      xNew[i] = sum / A[i][i];
    }

    // error
    const error = Math.max(
      ...xNew.map((val, i) => Math.abs(val - xPrev[i]))
    );

    iteraciones.push({
      i: k,
      x: [...xNew],
      error,
    });

    if (error < tol) break;

    xPrev = [...xNew];
  }

  return {
    raiz: xNew,
    iteraciones,
  };
}
