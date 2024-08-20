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
  const [zipCode, setZipCode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyCatch, setCompanyCatch] = useState("");
  const [companyBs, setCompanyBs] = useState("");
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
       address:{ street: street,
        suite: suite,
        city: city,
        zipCode: zipCode
        ,geo:{lat: lat,
          lng: lng,}},
        phoneNumber: phoneNumber,
        website: website,
        company:{companyName: companyName,
        companyCatch: companyCatch,
        companyBs: companyBs}
      },
    ]);
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
    setPhoneNumber("");
    setWebsite("");
    setCompanyName("");
    setCompanyCatch("");
    setCompanyBs("");

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
    companyName,
    companyCatch,
    Bs
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
    setPhoneNumber(phone);
    setWebsite(website);
    setCompanyName(companyName);
    setCompanyCatch(companyCatch);
    setCompanyBs(Bs);
    setIndexNumber(i);
  }
  function handleEditValue() {
    const temp = [...dataItem];
    temp[indexNumber] =  {
      id: id,
      name: name,
      username: username,
      email: email,
     address:{ street: street,
      suite: suite,
      city: city,
      zipCode: zipCode
      ,geo:{lat: lat,
        lng: lng,}},
      phoneNumber: phoneNumber,
      website: website,
      company:{companyName: companyName,
      companyCatch: companyCatch,
      companyBs: companyBs,}
    },
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
    setPhoneNumber("");
    setWebsite("");
    setCompanyName("");
    setCompanyCatch("");
    setCompanyBs("");
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
          zipCode={zipCode}
          lat={lat}
          lng={lng}
          phoneNumber={phoneNumber}
          website={website}
          companyName={companyName}
          companyCatch={companyCatch}
          companyBs={companyBs}
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
          setPhoneNumber={setPhoneNumber}
          setWebsite={setWebsite}
          setCompanyName={setCompanyName}
          setCompanyCatch={setCompanyCatch}
          setCompanyBs={setCompanyBs}
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
