import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Input from "./Components/Inputs/Input";

function App() {
  const [dataItem, setDataItem] = useState([]);
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
  function handleAdd() {
    // const temp = [...dataItem, obj];
    setDataItem([
      ...dataItem,
      {
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
      },
    ]);
    // console.log('CompanyName: ', companyName);
    
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
  }

  function handleEdit(
    i,
    id,
    name,
    username,
    email,
    street,
    suite,
    city,
    zipcode,
    lat,
    lng,
    phone,
    website,
    Name,
    catchPhrase,
    bs
  ) {
    setId(id);
    setName(name);
    setUserName(username);
    setEmail(email);
    setStreet(street);
    setsuite(suite);
    setCity(city);
    setZipCode(zipcode);
    setLat(lat);
    setLng(lng);
    setPhone(phone);
    setWebsite(website);
    setCompanyName(Name);
    setCatchPhrase(catchPhrase);
    setBs(bs);
    
    setIndexNumber(i);
    console.log("bs: ", Name, companyName);
    
  }
  function handleEditValue() {
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

  return (
    <>
      <div className="app">
        <h1 className="text-sky-600 text-6xl text-center m-2">
          CRUD Operations
        </h1>
        <Input
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
          handleEditValue={handleEditValue}
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
          handleAdd={handleAdd}
        />
        <div className="flex justify-between flex-wrap p-4">
          {dataItem.map((item, i) => (
            <Card
              item={item}
              key={i}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              i={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
