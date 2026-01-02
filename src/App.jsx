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

  return (
    <>
      <h1>TODO LIST</h1>
      <hr />
      <AddItem onAdd={addItem}/>
      <ItemList taskList={itemList} />
    </>
  )
}

export default App
