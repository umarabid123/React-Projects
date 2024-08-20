import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setDataItem(data));
    console.log("dataItem", dataItem);
  }, []);

  function handleDelete(id) {
    if(id>0){
      const temp = dataItem.filter((item, i) => item.id !== id);
    setDataItem(temp)
    }
  }

  return (
    <>
      <div className="app flex justify-between flex-wrap p-4">
        {dataItem.map((item, i) => (
          <Card item={item} key={i} handleDelete ={handleDelete}/>
        ))}
      </div>
    </>
  );
}

export default App;
