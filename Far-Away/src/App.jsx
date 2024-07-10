import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  function handleItem(item) {
    setItems((items)=> [...items, item]);
  }

  function handleDelete(id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id){
    setItems(items => items.map(item => item.id === id? {...item, packed: !item.packed} : item))
  }

  return (

    <div className="app">
      <Logo />
      <Form onAddItems ={handleItem} />
      <PackingList items ={items} onDeleteItem = {handleDelete} onToggleItem = {handleToggle} />
      <Stats />
    </div>
  );
}


export default App;

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: true,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false,
  },
  {
    id: 2,
    description: "Charger",
    quantity: 1,
    packed: false,
  },
];

// Componets

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

 

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form " onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({items, onDeleteItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

function Items({ item, onDeleteItem , onToggleItem}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
