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
    '&:hover': { background: 'linear-gradient(135deg, #00b8e6 0%, #a030e6 100%)', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)' },
    transition: 'all 0.3s ease'
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

export default function InterpolationLinear() {
  const [x0, setX0] = useState<string>("");
  const [y0, setY0] = useState<string>("");
  const [x1, setX1] = useState<string>("");
  const [y1, setY1] = useState<string>("");
  const [x, setX] = useState<string>("");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const data = interpolacionLineal(parseFloat(x0), parseFloat(y0), parseFloat(x1), parseFloat(y1), parseFloat(x));
      setResultado(data);
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <Paper sx={s.p}>
      <Typography variant="h5" gutterBottom sx={s.t}>Interpolación Lineal</Typography>
      <Stack spacing={2.5}>
        <TextField label="x0" value={x0} onChange={(e) => setX0(e.target.value)} sx={s.i} />
        <TextField label="y0" value={y0} onChange={(e) => setY0(e.target.value)} sx={s.i} />
        <TextField label="x1" value={x1} onChange={(e) => setX1(e.target.value)} sx={s.i} />
        <TextField label="y1" value={y1} onChange={(e) => setY1(e.target.value)} sx={s.i} />
        <TextField label="x a interpolar" value={x} onChange={(e) => setX(e.target.value)} sx={s.i} />
        <Button variant="contained" onClick={calcular} sx={s.b}>🧮 Calcular</Button>
      </Stack>
      {resultado && (
        <Stack sx={{ mt: 4, animation: 'fadeInUp 0.5s ease-out' }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'var(--calc-accent-primary)', fontWeight: 600, mb: 2 }}>Resultado</Typography>
          <Table size="small" sx={s.tb}>
            <TableHead><TableRow><TableCell>x0</TableCell><TableCell>y0</TableCell><TableCell>x1</TableCell><TableCell>y1</TableCell><TableCell>x</TableCell><TableCell>y(x)</TableCell></TableRow></TableHead>
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
