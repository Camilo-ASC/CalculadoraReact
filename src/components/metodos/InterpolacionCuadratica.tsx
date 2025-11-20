import { useState } from "react";
import { TextField, Button, Typography, Paper, Stack, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { interpolacionCuadratica } from "../../logic/numericalMethods/quadraticInterpolation";

const s = {
    p: {
        p: 3, background: 'rgba(20, 24, 39, 0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)', animation: 'fadeInUp 0.5s ease-out'
    },
    t: { background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600, mb: 3 },
    i: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(10, 14, 26, 0.5)', '& fieldset': { borderColor: 'var(--calc-border)' },
            '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' }, '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' }
        },
        '& .MuiInputLabel-root': { color: 'var(--calc-text-secondary)' }, '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' }
    },
    b: {
        background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)', color: 'white', fontWeight: 600, py: 1.5, borderRadius: '12px',
        textTransform: 'none', fontSize: '1rem', boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
        '&:hover': { background: 'linear-gradient(135deg, #00b8e6 0%, #a030e6 100%)', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)' }, transition: 'all 0.3s ease'
    },
    tb: {
        '& .MuiTableCell-root': { color: 'var(--calc-text-primary)', borderColor: 'rgba(255, 255, 255, 0.1)' },
        '& .MuiTableHead-root .MuiTableCell-root': { backgroundColor: 'rgba(0, 212, 255, 0.1)', fontWeight: 600, color: 'var(--calc-accent-primary)' },
        '& .MuiTableBody-root .MuiTableRow-root': {
            '&:nth-of-type(odd)': { backgroundColor: 'rgba(255, 255, 255, 0.02)' },
            '&:hover': { backgroundColor: 'rgba(0, 212, 255, 0.05)' }, transition: 'background-color 0.2s ease'
        }
    }
};

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
        <Paper sx={s.p}>
            <Typography variant="h5" gutterBottom sx={s.t}>Interpolación Cuadrática</Typography>
            <Stack spacing={2.5}>
                <TextField label="Valores de X (3 valores, separados por coma)" value={xValues} onChange={(e) => setXValues(e.target.value)} placeholder="Ej: 1, 2, 3" sx={s.i} />
                <TextField label="Valores de Y (3 valores, separados por coma)" value={yValues} onChange={(e) => setYValues(e.target.value)} placeholder="Ej: 1, 4, 9" sx={s.i} />
                <TextField label="Valor a interpolar" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Ej: 2.5" sx={s.i} />
                <Button variant="contained" onClick={calcular} sx={s.b}>🧮 Calcular</Button>
            </Stack>
            {resultado && (
                <Stack sx={{ mt: 4, animation: 'fadeInUp 0.5s ease-out' }}>
                    <Typography variant="h6" sx={{ color: 'var(--calc-accent-primary)', fontWeight: 600, mb: 1 }}>Valor interpolado: {resultado.resultado.toFixed(6)}</Typography>
                    <Typography sx={{ mt: 2, mb: 1, color: 'var(--calc-text-secondary)' }}>Coeficientes del polinomio cuadrático:</Typography>
                    <Table size="small" sx={s.tb}>
                        <TableHead><TableRow><TableCell>Coeficiente</TableCell><TableCell>Valor</TableCell></TableRow></TableHead>
                        <TableBody>
                            <TableRow><TableCell>a₀</TableCell><TableCell>{resultado.a0.toFixed(6)}</TableCell></TableRow>
                            <TableRow><TableCell>a₁</TableCell><TableCell>{resultado.a1.toFixed(6)}</TableCell></TableRow>
                            <TableRow><TableCell>a₂</TableCell><TableCell>{resultado.a2.toFixed(6)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </Stack>
            )}
        </Paper>
    );
}
