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
import { eliminacionGaussiana } from "../../logic/numericalMethods/gaussianElimination";

export default function Gauss() {
  const [matrizA, setMatrizA] = useState<string>("");
  const [vectorB, setVectorB] = useState<string>("");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const A = matrizA
        .trim()
        .split("\n")
        .map((row) => row.trim().split(/\s+/).map(Number));

      const B = vectorB
        .trim()
        .split("\n")
        .map((v) => Number(v));

      const data = eliminacionGaussiana(A, B);
      setResultado(data);
    } catch (error: any) {
      alert("Hubo un error: " + error.message);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Eliminación Gaussiana
      </Typography>

      <Stack spacing={2}>
        <TextField
          multiline
          minRows={4}
          label="Matriz A"
          placeholder={`Ej:
                            2 -1 1
                            3 3 9
                            3 3 5`}
          value={matrizA}
          onChange={(e) => setMatrizA(e.target.value)}
        />

        <TextField
          multiline
          minRows={4}
          label="Vector B"
          placeholder={`Ej:
                            2
                            -1
                            4`}
          value={vectorB}
          onChange={(e) => setVectorB(e.target.value)}
        />

        <Button variant="contained" onClick={calcular}>
          Calcular
        </Button>
      </Stack>

      {resultado && (
        <Stack sx={{ mt: 3 }}>
          <Typography variant="h6">
            Solución encontrada
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Variable</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {resultado.x.map((valor: number, i: number) => (
                <TableRow key={i}>
                  <TableCell>{`x${i + 1}`}</TableCell>
                  <TableCell>{valor.toFixed(6)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
