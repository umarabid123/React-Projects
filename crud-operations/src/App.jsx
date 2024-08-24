import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Inputs/Input";
import Home from "./Pages/Home";
import Table from "./Pages/Table";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";


function App() {
  const [dataItem, setDataItem] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
  ]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setsuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");
  const [indexNumber, setIndexNumber] = useState(null);

  // useEffect(()=>{
  //  const num=  localStorage.getItem("name")
  //  console.log('num: ', num);

  // },[])

  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   // .then((res) => res.json())
  //   // .then((data) => setDataItem(data));
  // }, []);
  // console.log("dataItem", dataItem.slice(0, 3));

  function handleDelete(id) {
    console.log(id);
    
    if (id > 0) {
      const temp = dataItem.filter((item, i) => item.id !== id);
      setDataItem(temp);
      console.log('delete');
      
    }
  }
  
  function handleEdit(i, item) {
    console.log("item", item.company);

    setId(item.id);
    setName(item.name);
    setUserName(item.username);
    setEmail(item.email);
    setStreet(item.address.street);
    setsuite(item.address.suite);
    setCity(item.address.city);
    setZipCode(item.address.zipcode);
    setLat(item.address.geo.lat);
    setLng(item.address.geo.lng);
    setPhone(item.phone);
    setWebsite(item.website);
    setCompanyName(item.company.name);
    // setCatchPhrase(item.compnay.catchPhrase);
    // setBs(item.company.bs);
    setIndexNumber(i);
    console.log(i);

    // console.log("bs: ", Name, companyName);
  }
  function handleEditValue(e) {
    e.preventDefault();
    const temp = [...dataItem];
    (temp[indexNumber] = {
      id: id,
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: { lat: lat, lng: lng },
      },
      phone: phone,
      website: website,
      company: {
        name: name,
        catchPhrase: catchPhrase,
        bs: bs,
      },
    }),
      console.log(indexNumber);

    setDataItem(temp);
    setId("");
    setName("");
    setUserName("");
    setEmail("");
    setStreet("");
    setsuite("");
    setCity("");
    setZipCode("");
    setLat("");
    setLng("");
    setPhone("");
    setWebsite("");
    setCompanyName("");
    setCatchPhrase("");
    setBs("");
    setIndexNumber(null);
    console.log(dataItem);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          id={id}
          name={name}
          username={username}
          email={email}
          street={street}
          suite={suite}
          city={city}
          zipcode={zipcode}
          lat={lat}
          lng={lng}
          phone={phone}
          website={website}
          companyName={companyName}
          catchPhrase={catchPhrase}
          bs={bs}
          // handleEditValue={handleEditValue}
          indexNumber={indexNumber}
          setId={setId}
          setName={setName}
          setUserName={setUserName}
          setEmail={setEmail}
          setStreet={setStreet}
          setsuite={setsuite}
          setCity={setCity}
          setZipCode={setZipCode}
          setLat={setLat}
          setLng={setLng}
          setPhone={setPhone}
          setWebsite={setWebsite}
          setCompanyName={setCompanyName}
          setCatchPhrase={setCatchPhrase}
          setBs={setBs}
          setDataItem ={setDataItem}
          // handleAdd={handleAdd}
          dataItem ={dataItem}
          setIndexNumber ={setIndexNumber}
          handleEditValue={handleEditValue}
        />
      ),
    },
    {
      path: "/table",
      element: <Table dataItem={dataItem} setDataItem={setDataItem} handleDelete ={handleDelete} handleEdit ={handleEdit} indexNumber ={indexNumber} />,
    },
  ]);

  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
        
      </div>
    </>
  );
}

export default App;
