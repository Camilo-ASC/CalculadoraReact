import { useState } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import MenuMetodos from "./components/MenuMetodos";

// Métodos
import Biseccion from "./components/metodos/Biseccion";
import FalsaPosicion from "./components/metodos/FalsaPosicion";
import PuntoFijo from "./components/metodos/PuntoFijo";
import Gauss from "./components/metodos/Gauss";
import Jacobi from "./components/metodos/Jacobi";
import InterpolationLinear from "./components/metodos/InterpolacionLineal";
import InterpolacionLagrange from "./components/metodos/InterpolacionLagrange";
import InterpolacionSpline from "./components/metodos/InterpolacionSpline";
import InterpolacionCuadratica from "./components/metodos/InterpolacionCuadratica";
import TrapecioCompuesto from "./components/metodos/TrapecioCompuesto";

export default function App() {
  const [metodo, setMetodo] = useState<string>("");

  const renderMetodo = () => {
    switch (metodo) {
      case "Biseccion":
        return <Biseccion />;
      case "Falsa Posicion":
        return <FalsaPosicion />;
      case "Punto Fijo":
        return <PuntoFijo />;
      case "Eliminacion Gaussiana":
        return <Gauss />;
      case "Jacobi":
        return <Jacobi />;
      case "Interpolacion Lineal":
        return <InterpolationLinear />;
      case "Interpolacion Lagrange":
        return <InterpolacionLagrange />;
      case "Interpolacion Spline":
        return <InterpolacionSpline />;
      case "Cuadratica":
        return <InterpolacionCuadratica />;
      case "Trapecio Compuesto":
        return <TrapecioCompuesto />;
      default:
        return (
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'var(--calc-text-secondary)',
              fontSize: '1.1rem',
              mt: 8
            }}
          >
            ✨ Selecciona un método numérico para comenzar
          </Typography>
        );
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingY: { xs: 3, md: 5 },
        minHeight: '100vh'
      }}
    >
      {/* Header with gradient */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 700,
          textAlign: 'center',
          mb: 1,
          letterSpacing: '-0.02em',
          animation: 'fadeInUp 0.6s ease-out'
        }}
      >
        Calculadora de Métodos Numéricos
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          textAlign: 'center',
          color: 'var(--calc-text-secondary)',
          mb: 4,
          opacity: 0.9
        }}
      >
        Matemáticas computacionales de precisión premium
      </Typography>

      <Grid container spacing={3}>
        {/* Menu lateral */}
        <Grid item xs={12} md={4} lg={3}>
          <MenuMetodos seleccionar={setMetodo} />
        </Grid>

        {/* Área principal de contenido */}
        <Grid item xs={12} md={8} lg={9}>
          <Box
            sx={{
              minHeight: '400px',
              p: 3,
              background: 'rgba(20, 24, 39, 0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              boxShadow:
                '0 8px 32px rgba(0, 212, 255, 0.1), 0 4px 16px rgba(181, 55, 255, 0.08)',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(0, 212, 255, 0.2)',
                boxShadow: '0 12px 40px rgba(0, 212, 255, 0.15), 0 6px 20px rgba(181, 55, 255, 0.12)'
              }
            }}
          >
            {renderMetodo()}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
