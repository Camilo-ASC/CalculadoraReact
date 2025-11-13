import { List, ListItemButton, ListItemText } from "@mui/material";

interface MenuMetodosProps {
  seleccionar: (metodo: string) => void;
}

const METODOS = [
  "Biseccion",
  "Falsa Posicion",
  "Punto Fijo",
  "Eliminacion Gaussiana",
  "Jacobi",
  "Interpolacion Lineal",
  "Interpolacion Lagrange",
  "Interpolacion Spline",
  "Cuadratica",
  "Trapecio Compuesto",
];

export default function MenuMetodos({ seleccionar }: MenuMetodosProps) {
  return (
    <List>
      {METODOS.map((nombre) => (
        <ListItemButton key={nombre} onClick={() => seleccionar(nombre)}>
          <ListItemText primary={nombre} />
        </ListItemButton>
      ))}
    </List>
  );
}
