// src/components/metodos/FalsaPosicion.tsx
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
import { falsaPosicion } from "../../logic/numericalMethods/falsePosition";

export default function FalsaPosicion() {
  const [funcion, setFuncion] = useState<string>("");
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [tol, setTol] = useState<string>("0.0001");
  const [maxIter, setMaxIter] = useState<string>("50");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const data = falsaPosicion(
        funcion,
        parseFloat(a),
        parseFloat(b),
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
        Método de Falsa Posición
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Función f(x)"
          value={funcion}
          onChange={(e) => setFuncion(e.target.value)}
          placeholder="Ej: x^3 - x - 2"
        />

        <TextField
          label="Límite inferior (a)"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />

        <TextField
          label="Límite superior (b)"
          value={b}
          onChange={(e) => setB(e.target.value)}
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
          <Typography variant="h6">
            Raíz aproximada: {resultado.raiz}
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Iteraciones: {resultado.iteraciones.length}
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Iter</TableCell>
                <TableCell>a</TableCell>
                <TableCell>b</TableCell>
                <TableCell>x</TableCell>
                <TableCell>f(x)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {resultado.iteraciones.map((row: any) => (
                <TableRow key={row.i}>
                  <TableCell>{row.i}</TableCell>
                  <TableCell>{row.a.toFixed(6)}</TableCell>
                  <TableCell>{row.b.toFixed(6)}</TableCell>
                  <TableCell>{row.x.toFixed(6)}</TableCell>
                  <TableCell>{row.fx.toExponential(6)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
