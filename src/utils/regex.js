const esBisiesto = (a) => {
  return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
};
const rules = {
  nombre(value) {
    if (!value) return "Campo obligatorio";
    const regex = /^(?!\s*$)[a-zA-Z0-9 ]{1,100}$/;
    return (
      regex.test(value) ||
      "El nombre debe ser alfanumérico y tener entre 1 y 100 caracteres"
    );
  },
  precio(value) {
    const regex = /^\d+(\.\d{1,2})?$/;
    return (
      regex.test(value) ||
      "El precio debe ser un número válido con hasta dos decimales"
    );
  },

  existencias(value) {
    const regex = /^\d+$/;
    return (
      regex.test(value) || "Las existencias deben ser un número entero positivo"
    );
  },
  costo(value) {
    if (!value) {
      return true;
    }
    const regex = /^\d+(\.\d{1,2})?$/;
    return (
      regex.test(value) ||
      "El precio debe ser un número válido con hasta dos decimales"
    );
  },

  fechaValida(fecha) {
    if (!!!fecha) {
      return "La  fecha es obligatoria";
    }

    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (!regex.test(fecha)) return "La fecha debe tener el formato YYYY-MM-DD";

    const a = parseInt(fecha.slice(0, 4)); // Año
    const m = parseInt(fecha.slice(5, 7)); // Mes
    const d = parseInt(fecha.slice(8, 10)); // Día

    if ((m === 4 || m === 6 || m === 9 || m === 11) && d > 30) {
      return "El mes seleccionado solo tiene 30 días";
    } else if (m === 2) {
      if (esBisiesto(a) && d > 29) {
        return "Febrero tiene solo 29 días en año bisiesto";
      } else if (!esBisiesto(a) && d > 28) {
        return "Febrero tiene solo 28 días en año no bisiesto";
      } else {
        return true;
      }
    } else {
      return true;
    }
  },
};
export default rules;
