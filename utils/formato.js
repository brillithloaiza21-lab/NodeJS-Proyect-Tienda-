// Funciones de formato y cálculo de dinero

// Convierte 8400 en "$ 8.400"
export const formatearPrecio = (valor) => `$ ${valor.toLocaleString("es-CO")}`;

// Convierte un texto en MAYÚSCULAS
export const formatearNombre = (texto) => texto.toUpperCase();

