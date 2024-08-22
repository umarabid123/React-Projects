import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Inputs/Input";

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
  
  useEffect(()=>{
   const num=  localStorage.getItem("name")
   console.log('num: ', num);

  },[])

  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   // .then((res) => res.json())
  //   // .then((data) => setDataItem(data));
  // }, []);
  console.log("dataItem", dataItem.slice(0, 3));

  function handleDelete(id) {
    if (id > 0) {
      const temp = dataItem.filter((item, i) => item.id !== id);
      setDataItem(temp);
    }
  }
  function handleAdd(e) {
    // const temp = [...dataItem, obj];
    e.preventdefault();
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

  function handleEdit(i, item) {
    console.log('item',item.company);

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

  return (
    <>
      <div className="app">
        <h1 className="text-sky-600 text-4xl font-semibold md:text-3xl lg:text-6xl text-center m-2">
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
        <div id="table" className=" p-4">
          <table className="table-autow-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full max-w-[100%]">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border">
              <tr className="flex gap-2 items-center w-full text-center max-w-[100%] hover:bg-gray-100 pt-4 px-2">
                <td className="text-lg h-12  w-[15%] font-bold text-sky-500">
                  Id:Name
                </td>
                <td className="text-lg h-12 w-[20%] font-bold text-sky-500">
                  UserName:Email
                </td>
                <td className="text-lg h-12 w-[22%] font-bold text-sky-500">
                  Street:Suite
                </td>
                <td className="text-lg h-12 w-[23%] font-bold text-sky-500">
                  City:Zip Code
                </td>
                <td className="text-lg h-12 w-[18%] font-bold text-sky-500">
                  Lat:Lng
                </td>
                <td className="text-lg h-12 font-bold text-sky-500 w-[25%]">
                  Phone:Website
                </td>
                <td className="text-lg h-12 font-bold text-sky-500 w-[25%]">
                  Company Name
                </td>
                <td className="text-lg h-12 font-bold text-sky-500 w-[20%]">
                  Actions
                </td>
                {/* <td className="text-lg h-12 font-bold text-sky-500">
                  Lat:Lng
                  </td> */}
              </tr>
            </thead>
            <tbody className="border">
              {dataItem.map((item, i) => {
                return (
                  <tr
                    key={i}
                    className="flex gap-2 justify-between items-center text-center border-b relative hover:text-sky-500 hover:bg-slate-100 p-2"
                  >
                    <td className="text-[1rem] h-16 py-2 w-[18%]">
                      {item.id}: <br /> {item.name}
                    </td>
                    <td className="text-[1rem] h-16 py-2 w-[20%]">
                      {item.username}: <br /> {item.email}
                    </td>
                    <td className="text-[1rem] h-16 py-2 w-[22%]">
                      {item.address.street}: <br /> {item.address.suite}
                    </td>
                    <td className="text-[1rem] h-16 py-2 w-[23%]">
                      {item.address.city}: <br /> {item.address.zipcode}
                    </td>
                    <td className="text-[1rem] h-16 py-2 w-[18%]">
                      {item.address.geo.lat}: <br /> {item.address.geo.lng}
                    </td>
                    <td className="text-[1rem] h-16 py-2 w-[25%]">
                      {item.phone}: <br />
                      {item.website}
                    </td>
                    <td className="text-[1rem] h-16 py-2 w-[23%]">
                      {item.company.name}: <br />
                    </td>
                    <td className="text-4xl self-center cursor-pointer h-16 w-[20%]">
                      <button
                        className="bg-sky-700 text-white font-semibold text-sm py-2 px-4 rounded-lg"
                        onClick={() => handleEdit(i,item)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 w-16 rounded-lg transition-all duration-500 text-sm m-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>

                    {/* <td className="text-lg h-16">
                    </td> */}
                    {/* <td className="text-lg px-2 h-12 w-[20%] text-center">
                      {item.zipcode}
                    </td> */}

                    {/* <div className="btn w-[20%] ">
                    <button className='bg-sky-700 text-white font-semibold text-xl py-2 px-4 rounded-lg' onClick={() => handleEdit(i,item)}>Edit</button>
                      <button
                        className="bg-red-500 text-white p-2 w-24 rounded-lg transition-all duration-500 text-xl m-2"
                        onClick={() => hendleDelete(item.id)}
                      >
                        Delete
                      </button> */}
                    {/* </div> */}
                    <hr />
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* {dataItem.map((item, i) => (
            <Card
              item={item}
              key={i}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              i={i}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}

export default App;
