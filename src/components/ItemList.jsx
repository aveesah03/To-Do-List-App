import Item from "./Item";

export default function ItemList({taskList, onDelete, onEdit}) {
    return(
        <div>
            <ul>
                {taskList.map((task, index) => (
                    <Item key={index} index={index} task={task} onDelete={onDelete} onEdit={onEdit}/>
                ))}
            </ul>
        </div>
    );
}