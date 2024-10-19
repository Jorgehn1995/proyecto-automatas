export const automataStock = (producto) => {
  let estado = "";

  // Definir el umbral para "Bajo Stock"
  const umbralBajoStock = 10;

  // Determinar el estado del producto según las existencias
  if (producto.existencias > umbralBajoStock) {
    estado = "Disponible";
  } else if (
    producto.existencias > 0 &&
    producto.existencias <= umbralBajoStock
  ) {
    estado = "Bajo Stock";
  } else if (producto.existencias === 0) {
    estado = "Agotado";
  }
  return estado;
};

export const automataPila = (producto) => {};
