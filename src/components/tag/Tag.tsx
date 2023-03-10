import './Tag.scss'

import { TagProps } from "../../interfaces/Tags";
import { ReactComponent as ClockIcon} from '../../assets/icons/clock.svg'

export default function Tag({name, color, icon} : TagProps) : JSX.Element {
    return (
        <div className={`tag ${color}`}>
            {icon && <ClockIcon className={`tag-icon ${color}`}/>}
            <div className="tag-name">
                { name}
            </div>
        </div>
    )
}