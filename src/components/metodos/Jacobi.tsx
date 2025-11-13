import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { jacobi } from "../../logic/numericalMethods/jacobi";

export default function Jacobi() {
  const [matrizA, setMatrizA] = useState<string>("");
  const [vectorB, setVectorB] = useState<string>("");
  const [x0, setX0] = useState<string>("");
  const [tol, setTol] = useState<string>("0.0001");
  const [maxIter, setMaxIter] = useState<string>("50");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const A = matrizA
        .trim()
        .split("\n")
        .map((row) => row.trim().split(/\s+/).map(Number));

      const B = vectorB.trim().split("\n").map(Number);

      const X0 = x0.trim().split("\n").map(Number);

      const data = jacobi(
        A,
        B,
        X0,
        parseFloat(tol),
        parseInt(maxIter)
      );

      setResultado(data);
    } catch (error: any) {
      alert("Hubo un error: " + error.message);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Método de Jacobi
      </Typography>

      <Stack spacing={2}>
        <TextField
          multiline
          minRows={4}
          label="Matriz A"
          placeholder={`Ej:
                          10 -1 2 0
                          -1 11 -1 3
                          2 -1 10 -1
                          0 3 -1 8`}
          value={matrizA}
          onChange={(e) => setMatrizA(e.target.value)}
        />

        <TextField
          multiline
          minRows={4}
          label="Vector B"
          placeholder={`Ej:
                            6
                            25
                            -11
                            15`}
          value={vectorB}
          onChange={(e) => setVectorB(e.target.value)}
        />

        <TextField
          multiline
          minRows={4}
          label="Vector x0 (inicial)"
          placeholder={`Ej:
                            0
                            0
                            0
                            0`}
          value={x0}
          onChange={(e) => setX0(e.target.value)}
        />

        <TextField
          label="Tolerancia"
          value={tol}
          onChange={(e) => setTol(e.target.value)}
        />

        <TextField
          label="Máx iteraciones"
          value={maxIter}
          onChange={(e) => setMaxIter(e.target.value)}
        />

        <Button variant="contained" onClick={calcular}>
          Calcular
        </Button>
      </Stack>

      {resultado && (
        <Stack sx={{ mt: 3 }}>
          <Typography variant="h6">Resultado aproximado</Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Iter</TableCell>
                <TableCell>x1</TableCell>
                <TableCell>x2</TableCell>
                <TableCell>x3</TableCell>
                <TableCell>x4</TableCell>
                <TableCell>Error</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {resultado.iteraciones.map((row: any) => (
                <TableRow key={row.i}>
                  <TableCell>{row.i}</TableCell>
                  {row.x.map((v: number, idx: number) => (
                    <TableCell key={idx}>{v.toFixed(6)}</TableCell>
                  ))}
                  <TableCell>{row.error.toExponential(6)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
