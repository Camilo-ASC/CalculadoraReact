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
import { interpolacionSpline } from "../../logic/numericalMethods/interpolationSpline";

export default function InterpolacionSpline() {
  const [xValues, setXValues] = useState<string>("");
  const [yValues, setYValues] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const x = xValues.split(",").map((n) => parseFloat(n.trim()));
      const y = yValues.split(",").map((n) => parseFloat(n.trim()));
      const val = parseFloat(valor);

      if (x.length !== y.length)
        throw new Error("Los vectores X e Y deben tener la misma longitud.");

      const data = interpolacionSpline(x, y, val);
      setResultado(data);
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Interpolación Spline Cúbica
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Valores de X (separados por coma)"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
          placeholder="Ej: 1, 2, 3, 4"
        />

        <TextField
          label="Valores de Y (separados por coma)"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
          placeholder="Ej: 1, 4, 9, 16"
        />

        <TextField
          label="Valor a interpolar"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Ej: 2.5"
        />

        <Button variant="contained" onClick={calcular}>
          Calcular
        </Button>
      </Stack>

      {resultado && (
        <Stack sx={{ mt: 3 }}>
          <Typography variant="h6">
            Valor interpolado: {resultado.resultado.toFixed(6)}
          </Typography>

          <Typography sx={{ mt: 2, mb: 1 }}>Coeficientes de cada tramo:</Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Intervalo</TableCell>
                <TableCell>a</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
                <TableCell>d</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultado.coeficientes.map((row: any, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>{row.intervalo}</TableCell>
                  <TableCell>{row.a.toFixed(6)}</TableCell>
                  <TableCell>{row.b.toFixed(6)}</TableCell>
                  <TableCell>{row.c.toFixed(6)}</TableCell>
                  <TableCell>{row.d.toFixed(6)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
