import './TaskCard.scss'
import {ReactComponent as MoreIcon} from '../../assets/icons/options.svg';

import { Task } from "../../interfaces/Tasks";
import Tag from '../tag/Tag';
import { getDateMsg, getTagColor } from '../../utils/tasksUtils';

export default function TaskCard({
    id,
    name,
    tags,
    dueDate,
    pointEstimate: estimatedTime,
    assignee, status,
} : Task) : JSX.Element {

    let {msg, color} = getDateMsg(dueDate);

    return (
        <div className="task-card">
            <div className="task-card-header">
                <div className="task-card-title">
                    {name}
                </div>
                <div className="task-card-options">
                    <MoreIcon className="task-card-options-icon"/>
                </div>
            </div>
            <div className="task-card-timer">
                <div className="task-card-points">
                    {estimatedTime} points
                </div>
                <div className="task-card-duedate">
                    <Tag name={msg} color={color} icon={true} />
                </div>
            </div>
            <div className="tag-list">
                {
                    tags.map((tag, index) => {
                        return <Tag key={index} name={tag} color={getTagColor(tag)} icon={false}/>
                    })
                }
            </div>
            
            <div className="task-card-footer">
                <img src={assignee.avatar} alt={assignee.fullName} className='user-avatar' />
            </div>

        </div>
    )
}