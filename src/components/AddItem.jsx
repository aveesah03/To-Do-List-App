import { useState} from "react";

export default function AddItem(props) {
    const [item, setItem] = useState("");

    const handleAddItem = () => {
        props.onAdd(item);
        setItem("");
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') handleAddItem();
    }

    return (
        <>
            <input 
                type="text" 
                value={item}
                id="additem"
                name="additem"
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={e => setItem(e.target.value)}
            />
            <button onClick={handleAddItem} >Add</button>
        </>
    );
}