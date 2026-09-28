import { v4 as uuidv4 } from 'uuid';

export interface Task {
    id: string,
    name: string,
    finish: boolean,
}

export function createTask(n: string): Task {
    return { name: n, finish: false, id: uuidv4() }

}