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

const { paperStyles, titleStyles, textFieldStyles, buttonStyles, tableStyles } = {
  paperStyles: {
    p: 3,
    background: 'rgba(20, 24, 39, 0.6)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
    animation: 'fadeInUp 0.5s ease-out'
  },
  titleStyles: {
    background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 600,
    mb: 3
  },
  textFieldStyles: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(10, 14, 26, 0.5)',
      '& fieldset': { borderColor: 'var(--calc-border)' },
      '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' },
      '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' },
    },
    '& . MuiInputLabel-root': { color: 'var(--calc-text-secondary)' },
    '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' },
  },
  buttonStyles: {
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
  },
  tableStyles: {
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
  }
};

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
    <Paper sx={paperStyles}>
      <Typography variant="h5" gutterBottom sx={titleStyles}>
        Eliminación Gaussiana
      </Typography>

      <Stack spacing={2.5}>
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
          sx={textFieldStyles}
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
          sx={textFieldStyles}
        />

        <Button variant="contained" onClick={calcular} sx={buttonStyles}>
          🧮 Calcular
        </Button>
      </Stack>

      {resultado && (
        <Stack sx={{ mt: 4, animation: 'fadeInUp 0.5s ease-out' }}>
          <Typography
            variant="h6"
            sx={{ color: 'var(--calc-accent-primary)', fontWeight: 600, mb: 2 }}
          >
            Solución encontrada
          </Typography>

          <Table size="small" sx={tableStyles}>
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
