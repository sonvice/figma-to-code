import { statsNumbers } from "../constant";
import { useEffect, useRef } from "react";
export default function Numbers() {
  // Usa referencias para almacenar instancias de cada animación de CountUp.
  const countupRefs = statsNumbers.map(() => useRef(null));

  // useEffect Ejecuta una vez con un array de dependencias vacío cuando el componente se monta.
  useEffect(() => {
    initCountUp();
  }, []);

  // Importa y inicializa CountUp dinámicamente para cada elemento.
  async function initCountUp() {
    const countUpModule = await import("countup.js");
    statsNumbers.forEach((number, index) => {
      let options = {};

      if (index === 1) {
        options = {
          decimalPlaces: 3, // Añadir 2 decimales solo al segundo número
          useEasing: false, // Desactivar animación de transición
        };
      } else if (index === 0) {
        options = {
          suffix: " m", // Agregar ' m' al primer número
        };
      }

      const countUpAnim = new countUpModule.CountUp(
        countupRefs[index].current,
        number.number,
        options
      );

      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
    });
  }

  return (
    <>
      <ul role="list" className="numbers d-grid">
        {statsNumbers.map((number, index) => (
          <li key={number.number}>
            <span className="text-tertiary size-6" ref={countupRefs[index]}>
              {
                index === 0
                  ? "0"
                  : "" /* Inicializar el primer número como '0' */
              }
            </span>
            <p className="size-1 text-primary">{number.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
