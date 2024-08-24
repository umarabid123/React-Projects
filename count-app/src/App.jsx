import { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

const INPUT_CLASS = "w-full p-2 border rounded-lg outline-sky-500";
const LABEL_CLASS = "w-full md:w-[50%] lg:w-[32%] text-lg";
function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    const temp = { firstName, lastName, contact, email };
    setData([...data, temp]);
    localStorage.setItem("obj ", JSON.stringify({ ...data, temp }));
    setFirstName("");
    setLastName("");
    setContact("");
    setEmail("");
  }
  // useEffect(()=>{
  //   const obj = {firstName:firstName,lastName:lastName,contact:contact,email:email};
  //   localStorage.setItem('object',JSON.stringify({...obj,obj}));
  //   // localStorage.getItem(obj)
  //   // const temp = { firstName, lastName, contact, email };
  //   // setData([...data, temp]);
  // },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <h1 className="text-6xl text-sky-500 text-center">Add Reacord</h1>
        <form
          className="flex justify-between flex-wrap p-6"
          onSubmit={(e) => handleAdd(e)}
        >
          <label className={LABEL_CLASS}>
            First Name <span className="text-sky-500 font-medium">*</span>
            <input
              type="text"
              className={INPUT_CLASS}
              name="First Name"
              placeholder="Enter your First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>
          <label className={LABEL_CLASS}>
            Last Name <span className="text-sky-500 font-medium">*</span>
            <input
              type="text"
              className={INPUT_CLASS}
              name="Last Name"
              placeholder="Enter your Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          <label className={LABEL_CLASS}>
            Contact <span className="text-sky-500 font-medium">*</span>
            <input
              type="number"
              className={INPUT_CLASS}
              name="Contact"
              placeholder="Enter your Contact"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
            />
          </label>
          <label className={LABEL_CLASS}>
            Email <span className="text-sky-500 font-medium">*</span>
            <input
              type="email"
              className={INPUT_CLASS}
              name="Email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <button className="px-2 h-14 my-2 hover:underline bg-cyan-500 font-semibold text-white rounded-lg">
            Add Record
          </button>
        </form>

        {data.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
              <p>{item.contact}</p>
              <p>{item.email}</p>
            </div>
          );
        })}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <Product /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
