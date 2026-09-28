import type { Task } from "../interfaces/Task"

interface Props {
  task: Task,
  removetask: (id: string) => void,
  finishTask: (id: string) => void
}
export const ListTask = ({ task, removetask, finishTask }: Props) => {
  return (
    <li className="task-item">
      <div className="task-status"><i className={task.finish ? "bi bi-check-square-fill" : "bi bi-square"} /></div>
      <span className={task.finish ? "task-name task-completed " : "task-name"}>{task.name}</span>
      <span className={task.finish ? "task-text-status task-text-status-finish" : "task-text-status "}>{ task.finish ? "Completada" : "Pendiente" }</span>
      <div className="task-actions">
        <i className="bi bi-check-circle-fill task-btn task-btn-success" onClick={() => finishTask(task.id)} />
        <i className="bi bi-trash-fill task-btn task-btn-danger" onClick={() => removetask(task.id)} />
      </div>
    </li>
  );
};

