import type { Task } from "../interfaces/Task"
import { ListTask } from "./ListTask"

interface Props {
    tasks: Task[],
    removetask: (id: string) => void,
    finishtask: (id: string) => void,
    filterTask: string,
    search: string
}

export const CustomList = ({ tasks, removetask, finishtask, filterTask, search }: Props) => {
    var taskFiltradas: Task[] = filterTask === 'Todos' ? tasks :
        filterTask === 'Completadas' ? tasks.filter((t) => t.finish) : tasks.filter((t) => !t.finish);
    if (search.trim()) {
        taskFiltradas = taskFiltradas.filter((f) =>
            f.name.toLowerCase().includes(search.toLowerCase().trim())
        );
    }


    return (
        <div className="list-task">
            <ul className="list-group">
                {
                    taskFiltradas.length === 0 ? <p className="task-name text-center">No se encontraron tareas</p> :
                        taskFiltradas.map((t) => (<ListTask task={t} removetask={removetask} finishTask={finishtask} key={t.id} />))}
            </ul>
        </div>
    );
};
