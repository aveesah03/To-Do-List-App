import './Item.css'

export default function Item({task, onDelete}) {
    return(
        <li>
            <div className='item-row'>
                <input type="checkbox" name="taskcompletedcheckbox" id="" />
                <p name="taskdelete" id="" >{task}</p>
                <button onClick={() => onDelete(task)} name="taskdelete" >Delete</button>
            </div>
        </li>
    );
}