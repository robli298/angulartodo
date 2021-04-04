import { TaskModel } from "./task.model";

export interface TaskListModel {
    key: number;
    name: string;
    tasks: TaskModel[];
}