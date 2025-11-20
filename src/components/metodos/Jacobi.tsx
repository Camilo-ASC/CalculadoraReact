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
import { jacobi } from "../../logic/numericalMethods/jacobi";

const styles = {
  paper: {
    p: 3, background: 'rgba(20, 24, 39, 0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)', animation: 'fadeInUp 0.5s ease-out'
  },
  title: { background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 600, mb: 3 },
  textField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(10, 14, 26, 0.5)', '& fieldset': { borderColor: 'var(--calc-border)' },
      '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' }, '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' }
    },
    '& .MuiInputLabel-root': { color: 'var(--calc-text-secondary)' }, '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' }
  },
  button: {
    background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)', color: 'white', fontWeight: 600, py: 1.5, borderRadius: '12px',
    textTransform: 'none', fontSize: '1rem', boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
    '&:hover': { background: 'linear-gradient(135deg, #00b8e6 0%, #a030e6 100%)', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)' },
    transition: 'all 0.3s ease'
  },
  table: {
    '& .MuiTableCell-root': { color: 'var(--calc-text-primary)', borderColor: 'rgba(255, 255, 255, 0.1)' },
    '& .MuiTableHead-root .MuiTableCell-root': { backgroundColor: 'rgba(0, 212, 255, 0.1)', fontWeight: 600, color: 'var(--calc-accent-primary)' },
    '& .MuiTableBody-root .MuiTableRow-root': {
      '&:nth-of-type(odd)': { backgroundColor: 'rgba(255, 255, 255, 0.02)' },
      '&:hover': { backgroundColor: 'rgba(0, 212, 255, 0.05)' }, transition: 'background-color 0.2s ease'
    }
  }
};

export default function Jacobi() {
  const [matrizA, setMatrizA] = useState<string>("");
  const [vectorB, setVectorB] = useState<string>("");
  const [x0, setX0] = useState<string>("");
  const [tol, setTol] = useState<string>("0.0001");
  const [maxIter, setMaxIter] = useState<string>("50");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const A = matrizA.trim().split("\n").map((row) => row.trim().split(/\s+/).map(Number));
      const B = vectorB.trim().split("\n").map(Number);
      const X0 = x0.trim().split("\n").map(Number);
      const data = jacobi(A, B, X0, parseFloat(tol), parseInt(maxIter));
      setResultado(data);
    } catch (error: any) {
      alert("Hubo un error: " + error.message);
    }
  };

  return (
    <Paper sx={styles.paper}>
      <Typography variant="h5" gutterBottom sx={styles.title}>Método de Jacobi</Typography>
      <Stack spacing={2.5}>
        <TextField multiline minRows={4} label="Matriz A"
          placeholder={`Ej:\n10 -1 2 0\n-1 11 -1 3\n2 -1 10 -1\n0 3 -1 8`}
          value={matrizA} onChange={(e) => setMatrizA(e.target.value)} sx={styles.textField} />
        <TextField multiline minRows={4} label="Vector B"
          placeholder={`Ej:\n6\n25\n-11\n15`}
          value={vectorB} onChange={(e) => setVectorB(e.target.value)} sx={styles.textField} />
        <TextField multiline minRows={4} label="Vector x0 (inicial)"
          placeholder={`Ej:\n0\n0\n0\n0`}
          value={x0} onChange={(e) => setX0(e.target.value)} sx={styles.textField} />
        <TextField label="Tolerancia" value={tol} onChange={(e) => setTol(e.target.value)} sx={styles.textField} />
        <TextField label="Máx iteraciones" value={maxIter} onChange={(e) => setMaxIter(e.target.value)} sx={styles.textField} />
        <Button variant="contained" onClick={calcular} sx={styles.button}>🧮 Calcular</Button>
      </Stack>
      {resultado && (
        <Stack sx={{ mt: 4, animation: 'fadeInUp 0.5s ease-out' }}>
          <Typography variant="h6" sx={{ color: 'var(--calc-accent-primary)', fontWeight: 600, mb: 2 }}>Resultado aproximado</Typography>
          <Table size="small" sx={styles.table}>
            <TableHead><TableRow><TableCell>Iter</TableCell><TableCell>x1</TableCell><TableCell>x2</TableCell><TableCell>x3</TableCell><TableCell>x4</TableCell><TableCell>Error</TableCell></TableRow></TableHead>
            <TableBody>
              {resultado.iteraciones.map((row: any) => (
                <TableRow key={row.i}>
                  <TableCell>{row.i}</TableCell>
                  {row.x.map((v: number, idx: number) => (<TableCell key={idx}>{v.toFixed(6)}</TableCell>))}
                  <TableCell>{row.error.toExponential(6)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
