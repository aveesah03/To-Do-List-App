import Item from "./Item";

export default function ItemList({taskList, onDelete}) {
    return(
        <div>
            <ul>
                {taskList.map((task, index) => (
                    <Item key={index} task={task} onDelete={onDelete}/>
                ))}
            </ul>
        </div>
    );
}