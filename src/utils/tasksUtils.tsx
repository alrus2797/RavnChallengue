import { TagColors } from "../interfaces/Tags";
import { Status, Task, pointEstimate } from "../interfaces/Tasks";


export function mapTasks(tasks: Task[]) : Task[] {
    return tasks.map((task) => {
        return {
            ...task,
            pointEstimate: parseInt(pointEstimate[task.pointEstimate]),
        };
    });
}

export function groupByStatus(tasks: Task[]) {
    const groupedTasks: Record<Status, Task[]> = {
        "BACKLOG": [],
        "TODO": [],
        "IN_PROGRESS": [],
        "DONE": [],
        "CANCELLED": [],
    };

    tasks.forEach((task) => {
        groupedTasks[task.status as Status].push(task);
    });

    return groupedTasks;   
}

export function getDateMsg(date: string): {msg: string, color: string} {
    const today = new Date();
    const dueDate = new Date(date);
    const diff = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 0) {
        return {msg: "OVERDUE", color: "red"};
    } else if (diffDays === 0) {
        return {msg: "TODAY", color: "yellow"};
    } else {
        if (diffDays <= 2) {
            return {msg: `${diffDays} DAYS LEFT`, color: "yellow"};
        }
        else{
            return {msg: `${diffDays} DAYS LEFT`, color: "white"};
        }
    }
}

export function getTagColor(tag: string): string {
    return TagColors[tag as keyof typeof TagColors]
}