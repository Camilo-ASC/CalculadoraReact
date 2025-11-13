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
import { interpolacionLagrange } from "../../logic/numericalMethods/interpolationLagrange";

export default function InterpolacionLagrange() {
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

      const data = interpolacionLagrange(x, y, val);
      setResultado(data);
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Interpolación de Lagrange
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Valores de X (separados por coma)"
          value={xValues}
          onChange={(e) => setXValues(e.target.value)}
          placeholder="Ej: 1, 2, 3"
        />

        <TextField
          label="Valores de Y (separados por coma)"
          value={yValues}
          onChange={(e) => setYValues(e.target.value)}
          placeholder="Ej: 2, 3, 5"
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

          <Typography sx={{ mt: 2, mb: 1 }}>Pasos del cálculo:</Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>i</TableCell>
                <TableCell>xᵢ</TableCell>
                <TableCell>yᵢ</TableCell>
                <TableCell>Lᵢ(x)</TableCell>
                <TableCell>Término</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultado.pasos.map((row: any) => (
                <TableRow key={row.i}>
                  <TableCell>{row.i}</TableCell>
                  <TableCell>{row.xi}</TableCell>
                  <TableCell>{row.yi}</TableCell>
                  <TableCell>{row.Li.toFixed(6)}</TableCell>
                  <TableCell>{row.termino.toFixed(6)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
