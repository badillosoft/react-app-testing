import React, { useState } from "react";

export default function Counter({ start }) {
    const [count, setCount] = useState(start || 0);

    // ANTI-PATRONES
    // 1. Evitar colocar lógica de negocio, no colocar funcionalidad/reglas de negocio
    // 2. Evitar colocar múlples componentes por archivo
    // 3. Evitar mezclar hooks, fetches, components, functions -> separar cada uno en un archivo
    // 4. Si agrupar en carpetas contextos, reductores
    // 5. Evitar mezclar llaves (key={...}) con índices de las listas (.map((_, index)))
    // 6. Evitar llaves aleatorias
    // 7. Evitar no colocar llaves en componentes dinámicos
    // 8. Evitar pasar estados entre componentes -> usar contextos o reductores ~[value, setValue]~
    // 9. No crear hooks que no hagan una tarea específica

    return (
        <div className="d-flex flex-column align-items-center border p-4">
            <span>{count}</span>
            <div className="pt-2">
                <button className="btn btn-primary mx-2" onClick={() => {
                    setCount(count + 1);
                }}>inc</button>
                <button className="btn btn-danger mx-2" onClick={() => {
                    if (count > (start || 0)) {
                        setCount(count - 1);
                    }
                }}>dec</button>
                <button className="btn btn-info mx-2" onClick={() => {
                    setCount(start || 0);
                }}>reset</button>
            </div>
        </div>
    )
}