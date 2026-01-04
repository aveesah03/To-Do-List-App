import { useEffect, useRef, useState } from 'react';
import './Item.css'

export default function Item({index, task, onDelete, onEdit}) {
    const [taskClassName, setTaskClassName] = useState("noStrike");
    const [isEditing, setIsEditing] = useState(false);
    const [taskItem, setTaskItem] = useState(task);
    const inputRef = useRef(null);

    useEffect(() => {
        if(isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleStrikeThrough = (checked) => {
        if(checked) {
            setTaskClassName("strike-through");
        } else {
            setTaskClassName("noStrike");
        }
    }

    const handleDoubleClick = () => {
        setIsEditing(true);
    }

    const handleBlur = () => {
        setIsEditing(false);
        onEdit(index, taskItem);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') handleBlur();
    }


    return(
        <li>
            <div className='item-row'>
                <input type="checkbox" onChange={(e) => handleStrikeThrough(e.target.checked)} />
                {isEditing ? 
                    ( <input type="text" value={taskItem} ref={inputRef} onChange={e => setTaskItem(e.target.value)} onBlur={handleBlur} onKeyDown={handleKeyDown}/> ) : 
                    ( <p className={taskClassName} onDoubleClick={handleDoubleClick}>{taskItem}</p> )
                }
                <button onClick={() => onDelete(task)} name="taskdelete" >Delete</button>
            </div>
        </li>
    );
}