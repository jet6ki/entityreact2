import { useState } from "react";
import ItemList from "./components/ItemList";
import { useEffect } from "react";
import axios from "axios"


// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items,setItems] = useState([])

  useEffect(()=>{
    fetchItems()
  },[])

  const fetchItems = async ()=>{
    try{
      const response =await axios.get(API_URI)
      setItems(response.data)
    }catch(error){
      console.error("Error fetching items",error)
    }
  }
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URI}/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return <ItemList items={items} onDelete={deleteItem} />;
}

  // Get the existing item from the server
  // const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop


export default App;
