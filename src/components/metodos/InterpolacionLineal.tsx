// src/components/metodos/InterpolationLinear.tsx
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

import { interpolacionLineal } from "../../logic/numericalMethods/interpolationLinear";

export default function InterpolationLinear() {
  const [x0, setX0] = useState<string>("");
  const [y0, setY0] = useState<string>("");
  const [x1, setX1] = useState<string>("");
  const [y1, setY1] = useState<string>("");
  const [x, setX] = useState<string>("");

  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const data = interpolacionLineal(
        parseFloat(x0),
        parseFloat(y0),
        parseFloat(x1),
        parseFloat(y1),
        parseFloat(x)
      );

      setResultado(data);
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Interpolación Lineal
      </Typography>

      <Stack spacing={2}>
        <TextField label="x0" value={x0} onChange={(e) => setX0(e.target.value)} />
        <TextField label="y0" value={y0} onChange={(e) => setY0(e.target.value)} />
        <TextField label="x1" value={x1} onChange={(e) => setX1(e.target.value)} />
        <TextField label="y1" value={y1} onChange={(e) => setY1(e.target.value)} />
        <TextField label="x a interpolar" value={x} onChange={(e) => setX(e.target.value)} />

        <Button variant="contained" onClick={calcular}>
          Calcular
        </Button>
      </Stack>

      {resultado && (
        <Stack sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Resultado
          </Typography>

          <Table size="small" sx={{ mt: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell>x0</TableCell>
                <TableCell>y0</TableCell>
                <TableCell>x1</TableCell>
                <TableCell>y1</TableCell>
                <TableCell>x</TableCell>
                <TableCell>y(x)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>{resultado.x0}</TableCell>
                <TableCell>{resultado.y0}</TableCell>
                <TableCell>{resultado.x1}</TableCell>
                <TableCell>{resultado.y1}</TableCell>
                <TableCell>{resultado.x}</TableCell>
                <TableCell>{resultado.y.toFixed(6)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
