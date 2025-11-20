
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
import { biseccion } from "../../logic/numericalMethods/bisection";

export default function Biseccion() {
  const [funcion, setFuncion] = useState<string>("");
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [tol, setTol] = useState<string>("0.0001");
  const [maxIter, setMaxIter] = useState<string>("50");
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    try {
      const data = biseccion(
        funcion,
        parseFloat(a),
        parseFloat(b),
        parseFloat(tol),
        parseInt(maxIter)
      );
      setResultado(data);
    } catch (error: any) {
      alert("Hubo un error: " + error.message);
    }
  };

  return (
    <Paper
      sx={{
        p: 3,
        background: 'rgba(20, 24, 39, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
        animation: 'fadeInUp 0.5s ease-out'
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 600,
          mb: 3
        }}
      >
        Método de Bisección
      </Typography>

      <Stack spacing={2.5}>
        <TextField
          label="Función f(x)"
          value={funcion}
          onChange={(e) => setFuncion(e.target.value)}
          placeholder="Ej: x^3 - x - 2"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(10, 14, 26, 0.5)',
              '& fieldset': {
                borderColor: 'var(--calc-border)',
              },
              '&:hover fieldset': {
                borderColor: 'var(--calc-border-hover)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'var(--calc-accent-primary)',
              },
            },
            '& .MuiInputBase-input': {
              color: 'rgba(255, 255, 255, 0.95)',
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgba(255, 255, 255, 0.5)',
              opacity: 1,
            },
            '& .MuiInputLabel-root': {
              color: 'var(--calc-text-secondary)',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'var(--calc-accent-primary)',
            },
          }}
        />

        <TextField
          label="Límite inferior (a)"
          value={a}
          onChange={(e) => setA(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(10, 14, 26, 0.5)',
              '& fieldset': { borderColor: 'var(--calc-border)' },
              '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' },
            },
            '& .MuiInputLabel-root': { color: 'var(--calc-text-secondary)' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' },
          }}
        />

        <TextField
          label="Límite superior (b)"
          value={b}
          onChange={(e) => setB(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(10, 14, 26, 0.5)',
              '& fieldset': { borderColor: 'var(--calc-border)' },
              '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' },
            },
            '& .MuiInputLabel-root': { color: 'var(--calc-text-secondary)' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' },
          }}
        />

        <TextField
          label="Tolerancia"
          value={tol}
          onChange={(e) => setTol(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(10, 14, 26, 0.5)',
              '& fieldset': { borderColor: 'var(--calc-border)' },
              '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' },
            },
            '& .MuiInputLabel-root': { color: 'var(--calc-text-secondary)' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' },
          }}
        />

        <TextField
          label="Máx iteraciones"
          value={maxIter}
          onChange={(e) => setMaxIter(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(10, 14, 26, 0.5)',
              '& fieldset': { borderColor: 'var(--calc-border)' },
              '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' },
            },
            '& .MuiInputLabel-root': { color: 'var(--calc-text-secondary)' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' },
          }}
        />

        <Button
          variant="contained"
          onClick={calcular}
          sx={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)',
            color: 'white',
            fontWeight: 600,
            py: 1.5,
            borderRadius: '12px',
            textTransform: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #00b8e6 0%, #a030e6 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          🧮 Calcular
        </Button>
      </Stack>

      {resultado && (
        <Stack sx={{ mt: 4, animation: 'fadeInUp 0.5s ease-out' }}>
          <Typography
            variant="h6"
            sx={{
              color: 'var(--calc-accent-primary)',
              fontWeight: 600,
              mb: 1
            }}
          >
            Raíz aproximada: {resultado.raiz}
          </Typography>

          <Typography sx={{ mb: 2, color: 'var(--calc-text-secondary)' }}>
            Iteraciones: {resultado.iteraciones.length}
          </Typography>

          <Table
            size="small"
            sx={{
              '& .MuiTableCell-root': {
                color: 'var(--calc-text-primary)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
              },
              '& .MuiTableHead-root .MuiTableCell-root': {
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                fontWeight: 600,
                color: 'var(--calc-accent-primary)',
              },
              '& .MuiTableBody-root .MuiTableRow-root': {
                '&:nth-of-type(odd)': {
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 212, 255, 0.05)',
                },
                transition: 'background-color 0.2s ease'
              }
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Iter</TableCell>
                <TableCell>a</TableCell>
                <TableCell>b</TableCell>
                <TableCell>m</TableCell>
                <TableCell>f(m)</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {resultado.iteraciones.map((row: any) => (
                <TableRow key={row.i}>
                  <TableCell>{row.i}</TableCell>
                  <TableCell>{row.a.toFixed(6)}</TableCell>
                  <TableCell>{row.b.toFixed(6)}</TableCell>
                  <TableCell>{row.m.toFixed(6)}</TableCell>
                  <TableCell>{row.fm.toExponential(6)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Paper>
  );
}
