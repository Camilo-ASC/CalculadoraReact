import { useState } from "react";
import { TextField, Button, Typography, Paper, Stack, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { trapecioCompuesto } from "../../logic/numericalMethods/compositeTrapezoid";

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

export default function TrapecioCompuesto() {
    const [func, setFunc] = useState<string>("");
    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [n, setN] = useState<string>("");
    const [resultado, setResultado] = useState<any>(null);

    const calcular = () => {
        try {
            const data = trapecioCompuesto(func, parseFloat(a), parseFloat(b), parseInt(n));
            setResultado(data);
        } catch (error: any) {
            alert("Error: " + error.message);
        }
    };

    return (
        <Paper sx={s.p}>
            <Typography variant="h5" gutterBottom sx={s.t}>Trapecio Compuesto</Typography>
            <Stack spacing={2.5}>
                <TextField label="Función f(x)" placeholder="Ej: x^2 + 3*x" value={func} onChange={(e) => setFunc(e.target.value)} sx={s.i} />
                <TextField label="Límite inferior (a)" value={a} onChange={(e) => setA(e.target.value)} placeholder="Ej: 0" sx={s.i} />
                <TextField label="Límite superior (b)" value={b} onChange={(e) => setB(e.target.value)} placeholder="Ej: 4" sx={s.i} />
                <TextField label="Número de subintervalos (n)" value={n} onChange={(e) => setN(e.target.value)} placeholder="Ej: 6" sx={s.i} />
                <Button variant="contained" onClick={calcular} sx={s.b}>🧮 Calcular</Button>
            </Stack>
            {resultado && (
                <Stack sx={{ mt: 4, animation: 'fadeInUp 0.5s ease-out' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'var(--calc-accent-primary)', fontWeight: 600, mb: 1 }}>
                        Resultado de la integral aproximada: {resultado.resultado.toFixed(6)}
                    </Typography>
                    <Typography sx={{ mb: 2, color: 'var(--calc-text-secondary)' }}>h = {resultado.h.toFixed(6)}</Typography>
                    <Table size="small" sx={s.tb}>
                        <TableHead><TableRow><TableCell>i</TableCell><TableCell>xᵢ</TableCell><TableCell>f(xᵢ)</TableCell></TableRow></TableHead>
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
