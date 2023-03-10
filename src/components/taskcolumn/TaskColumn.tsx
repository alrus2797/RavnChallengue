import './TaskColumn.scss'
import { TaskColumnProps } from '../../interfaces/Tasks'
import TaskCard from '../taskcard/TaskCard'


export default function TaskColumn ({title, tasks} : TaskColumnProps) : JSX.Element {
    return (
        <div className="task-column">
            <div className="column-title">
                {title}
            </div>
            {
                tasks.map((task, index) => {
                    return <TaskCard key={index} {...task}/>
                })
            }
        </div>
    )
}