import type { Task } from "../interfaces/Task";

export const getData = (): Task[] => {
    const datos = localStorage.getItem('datos');
    if (!datos) {
        return [];
    }
    return JSON.parse(datos) as Task[];
}

export const setItem = (task: Task) => {
    const datos: Task[] = getData();
    const newDatos: Task[] = [...datos, task];
    localStorage.setItem("datos", JSON.stringify(newDatos));
}

export const finishTask = (id: string) => {

    const datos = getData();

    if (datos.length === 0) return;

    for (const t of datos) {
        if (t.id === id) {
            t.finish = !t.finish;
        }
    }

    localStorage.setItem("datos", JSON.stringify(datos));
}


export const removeTask = (id: string) => {

    const datos = getData();
    const newDatos: Task[] = [];

    if (datos.length === 0) return;

    for (const t of datos) {

        if (t.id === id) {
            continue;
        }

        newDatos.push(t);
    }

    localStorage.setItem("datos", JSON.stringify(newDatos));
}

