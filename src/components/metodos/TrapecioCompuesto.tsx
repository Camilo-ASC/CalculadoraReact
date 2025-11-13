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
import { trapecioCompuesto } from "../../logic/numericalMethods/compositeTrapezoid";

export default function TrapecioCompuesto() {
    const [func, setFunc] = useState<string>("");
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [n, setN] = useState<string>("");
    const [resultado, setResultado] = useState<any>(null);

    const calcular = () => {
        try {
    const data = trapecioCompuesto(
        func,
        parseFloat(a),
        parseFloat(b),
        parseInt(n)
        );
        setResultado(data);
    } catch (error: any) {
        alert("Error: " + error.message);
    }
    };

    return (
    <Paper sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
        Trapecio Compuesto
        </Typography>

        <Stack spacing={2}>
        <TextField
            label="Función f(x)"
            placeholder="Ej: x^2 + 3*x"
            value={func}
            onChange={(e) => setFunc(e.target.value)}
        />

        <TextField
            label="Límite inferior (a)"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Ej: 0"
        />

        <TextField
            label="Límite superior (b)"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Ej: 4"
        />

        <TextField
            label="Número de subintervalos (n)"
            value={n}
            onChange={(e) => setN(e.target.value)}
            placeholder="Ej: 6"
        />

        <Button variant="contained" onClick={calcular}>
            Calcular
        </Button>
        </Stack>

        {resultado && (
        <Stack sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
            Resultado de la integral aproximada: {resultado.resultado.toFixed(6)}
            </Typography>

            <Typography sx={{ mb: 2 }}>
            h = {resultado.h.toFixed(6)}
            </Typography>

            <Table size="small">
            <TableHead>
                <TableRow>
                <TableCell>i</TableCell>
                <TableCell>xᵢ</TableCell>
                <TableCell>f(xᵢ)</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {resultado.iteraciones.map((row: any) => (
                <TableRow key={row.i}>
                    <TableCell>{row.i}</TableCell>
                    <TableCell>{row.xi.toFixed(6)}</TableCell>
                    <TableCell>{row.fxi.toFixed(6)}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </Stack>
        )}
    </Paper>
    );
}
