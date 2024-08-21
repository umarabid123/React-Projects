import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Input from "./Components/Inputs/Input";

function App() {
  const [dataItem, setDataItem] = useState([
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    }
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
  const [bs,setBs] = useState("");
  const [indexNumber, setIndexNumber] = useState(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
      // .then((res) => res.json())
      // .then((data) => setDataItem(data));
    }, []);
    console.log("dataItem", dataItem.slice(0,3));
    
  function handleDelete(id) {
    if (id > 0) {
      const temp = dataItem.filter((item, i) => item.id !== id);
      setDataItem(temp);
    }
  }
  function handleAdd(e) {
    // const temp = [...dataItem, obj];
    e.preventdefault()
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
    item
  ) {
    setId(item.id);
    setName(item.name);
    setUserName(item.username);
    setEmail(item.email);
    setStreet(item.adress.street);
    setsuite(item.suite);
    setCity(item.adress.city);
    setZipCode(item.address.zipcode);
    setLat(item.adress.geo.lat);
    setLng(item.address.geo.lng);
    setPhone(item.phone);
    setWebsite(item.website);
    setCompanyName(item.company.name);
    setCatchPhrase(item.compnay.catchPhrase);
    setBs(item.company.bs);
    
    setIndexNumber(i);
    // console.log("bs: ", Name, companyName);
    
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
        <table className="max-w-[100%] w-full mx-auto">
            <thead className="flex justify-between">
              <tr className="flex justify-between items-center w-full text-center max-w-[100%] hover:bg-gray-100">
                <td className="text-xl h-12  w-[20%] text-center font-bold text-sky-500">
                  Id
                </td>
                <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                   Name
                </td>
                <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                  User Name
                </td>
                <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                  Email
                </td>
                <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                  Street
                </td>
                <td className="text-xl h-12  w-[20%] text-center font-bold text-sky-500">
                  Suite
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    City
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    Zip Code
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    Lat
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    Lng
                  </td>
                  <td className="text-xl h-12  w-[20%] text-center font-bold text-sky-500">
                  Phone Number
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    Website
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    Age
                  </td>
                  <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                    Action
                  </td>
                {/* <button className="bg-sky-500 m-2 text-white p-2 w-24 rounded-lg hover:bg-white hover:border hover:text-sky-500 hover:border-sky-500 transition-all duration-500 text-xl">
              Save
            </button>
            <button className="bg-red-500 m-2 text-white p-2 w-24 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-500 text-xl">
              Clear
            </button> */}
              </tr>
            </thead>
            {/* <tbody className="">
              {data.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="flex justify-between items-center hover:text-sky-500 hover:bg-slate-100 "
                  >
                    <td className="text-xl h-12 w-[20%] text-center">
                      {i + 1}
                    </td>
                    <td className="text-xl h-12 w-[20%] text-center">
                      {item.firstName}
                    </td>
                    <td className="text-xl h-12 w-[20%] text-center">
                      {item.lastName}
                    </td>
                    <td className="text-xl h-12 w-[20%] text-center">
                      {item.age}
                    </td>
                    <div className="btn w-[20%] ">
                      <button
                        className="bg-sky-500 text-white p-2  w-24 rounded-lg transition-all duration-500 text-xl m-2 "
                        onClick={() => handleEdit(item,i)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 w-24 rounded-lg transition-all duration-500 text-xl m-2"
                        onClick={() => hendleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </tr>
                );
              })}
            </tbody> */}
          </table>
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
