import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Input from "./Components/Inputs/Input";

function App() {
  const [dataItem, setDataItem] = useState([]);
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [street, setStreet] = useState("")
  const [suite, setsuite] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [website, setWebsite] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyCatch, setCompanyCatch] = useState("")
  const [companyBs, setCompanyBs] = useState("")
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setDataItem(data));
    console.log("dataItem", dataItem);
  }, []);

  function handleDelete(id) {
    if (id > 0) {
      const temp = dataItem.filter((item, i) => item.id !== id);
      setDataItem(temp);
    }
  }

  function handleEdit(){
    set
  }
  return (
    <>
     <div className="app">
      <h1 className="text-sky-600 text-6xl text-center m-2">CRUD Operations</h1>
      <Input />
     <div className="flex justify-between flex-wrap p-4">
        {dataItem.map((item, i) => (
          <Card item={item} key={i} handleDelete={handleDelete} />
        ))}
      </div>
     </div>
    </>
  );
}

export default App;
