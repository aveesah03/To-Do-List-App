import Item from "./Item";

export default function ItemList({taskList}) {
    return(
        <div>
            <ul>
                {taskList.map((task) => (
                    <Item task={task} />
                ))}
            </ul>
        </div>
    );
}