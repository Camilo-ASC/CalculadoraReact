import { useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
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
          <Typography variant="body1">
            Selecciona un método para comenzar.
          </Typography>
        );
    }
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Calculadora de Métodos Numéricos
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MenuMetodos seleccionar={setMetodo} />
        </Grid>

        <Grid item xs={12} md={8}>
          {renderMetodo()}
        </Grid>
      </Grid>
    </Container>
  );
}
