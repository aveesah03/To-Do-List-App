import { useState, useEffect } from "react";
import './App.css'
import AddItem from './components/AddItem'
import ItemList from "./components/ItemList";

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    console.log(itemList);
  }, [itemList]);

  const addItem = (item) => {
    if(!item.trim()) return;
    setItemList(prev => [...prev, item]);
  }

  const deleteItem = (item) => {
    // const list = [...itemList],
    // index = list.indexOf(item);
    // list.splice(index, 1)
    // setItemList([...list]);

    // splice mutates the array in place whereas filter creates a new array
    setItemList(prev => prev.filter(i => i !== item));
  }

  const editItem = (index, item) => {
    const list = [...itemList];
    list.splice(index, 1, item);
    setItemList([...list]);
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <hr />
      <AddItem onAdd={addItem}/>
      <ItemList taskList={itemList} onDelete={deleteItem} onEdit={editItem}/>
    </>
  )
}

export default App
