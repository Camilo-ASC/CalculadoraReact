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
import { interpolacionCuadratica } from "../../logic/numericalMethods/quadraticInterpolation";

export default function InterpolacionCuadratica() {
    const [xValues, setXValues] = useState<string>("");
    const [yValues, setYValues] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [resultado, setResultado] = useState<any>(null);

    const calcular = () => {
        try {
    const x = xValues.split(",").map((n) => parseFloat(n.trim()));
    const y = yValues.split(",").map((n) => parseFloat(n.trim()));
    const val = parseFloat(valor);

    const data = interpolacionCuadratica(x, y, val);
        setResultado(data);
    } catch (error: any) {
        alert("Error: " + error.message);
        }
    };

    return (
        <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
        Interpolación Cuadrática
        </Typography>

        <Stack spacing={2}>
        <TextField
            label="Valores de X (3 valores, separados por coma)"
            value={xValues}
            onChange={(e) => setXValues(e.target.value)}
            placeholder="Ej: 1, 2, 3"
        />

        <TextField
            label="Valores de Y (3 valores, separados por coma)"
            value={yValues}
            onChange={(e) => setYValues(e.target.value)}
            placeholder="Ej: 1, 4, 9"
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

            <Typography sx={{ mt: 2, mb: 1 }}>
            Coeficientes del polinomio cuadrático:
            </Typography>

            <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Coeficiente</TableCell>
                <TableCell>Valor</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>a₀</TableCell>
                <TableCell>{resultado.a0.toFixed(6)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>a₁</TableCell>
                <TableCell>{resultado.a1.toFixed(6)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>a₂</TableCell>
                <TableCell>{resultado.a2.toFixed(6)}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </Stack>
        )}
    </Paper>
    );
}
