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
import { puntoFijo } from "../../logic/numericalMethods/fixedPoint";

export default function PuntoFijo() {
  const [funcionG, setFuncionG] = useState<string>("");
  const [x0, setX0] = useState<string>("");
  const [tol, setTol] = useState<string>("0.0001");
  const [maxIter, setMaxIter] = useState<string>("50");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const data = puntoFijo(
        funcionG,
        parseFloat(x0),
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
        Método de Punto Fijo
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="g(x)"
          value={funcionG}
          onChange={(e) => setFuncionG(e.target.value)}
          placeholder="Ej: (x^3 - 2)^(1/3)"
        />

        <TextField
          label="Valor inicial (x0)"
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
                <TableCell>x</TableCell>
                <TableCell>g(x)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {resultado.iteraciones.map((row: any) => (
                <TableRow key={row.i}>
                  <TableCell>{row.i}</TableCell>
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
