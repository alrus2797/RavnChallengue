interface Task {
    id: number
    name: string
    tags: string[]
    dueDate: string,
    pointEstimate: number,
    assignee: {
        fullName: string,
        avatar: string
    },
    status: string
}

interface TaskColumnProps {
    title: string
    tasks: Task[]
}

interface ApolloTaskResponse{
    tasks: Task[]
}

type Status = "BACKLOG" | "TODO" | "IN_PROGRESS" | "DONE" | "CANCELLED";


export type {Task, TaskColumnProps, Status, ApolloTaskResponse}

export enum pointEstimate {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FIVE = 5,
    EIGHT = 8,
}