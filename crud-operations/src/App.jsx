import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import StudentTable from "./Pages/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // State for managing student data
  const [dataItem, setDataItem] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      age: 20,
      email: "Sincere@april.biz",
      address: {
        city: "Gwenborough",
      },
      class: "10th Grade",
      phone: "1-770-736-8031",
    },
    {
      id: 2,
      name: "Ervin Howell",
      age: 22,
      email: "Shanna@melissa.tv",
      address: {
        city: "Wisokyburgh",
      },
      class: "12th Grade",
      phone: "010-692-6593",
    },
  ]);

  // Edit form states
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [classInfo, setClassInfo] = useState("");
  const [phone, setPhone] = useState("");
  const [indexNumber, setIndexNumber] = useState(null);

  // Handle Edit Functionality
  function handleEdit(i, item) {
    setId(item.id);
    setName(item.name);
    setAge(item.age);
    setEmail(item.email);
    setCity(item.address.city);
    setClassInfo(item.class);
    setPhone(item.phone);
    setIndexNumber(i);
  }

  // Handle form submit (Edit/Update record)
  function handleEditValue(e) {
    e.preventDefault();
    const updatedItem = {
      id: id,
      name: name,
      age: age,
      email: email,
      address: { city: city },
      class: classInfo,
      phone: phone,
    };
    const temp = [...dataItem];
    temp[indexNumber] = updatedItem;
    setDataItem(temp);

    // Reset form fields
    setId("");
    setName("");
    setAge("");
    setEmail("");
    setCity("");
    setClassInfo("");
    setPhone("");
    setIndexNumber(null);
  }

  // Delete a student record
  function handleDelete(id) {
    const updatedData = dataItem.filter((student) => student.id !== id);
    setDataItem(updatedData);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          id={id}
          name={name}
          age={age}
          email={email}
          city={city}
          classInfo={classInfo}
          phone={phone}
          setName={setName}
          setAge={setAge}
          setEmail={setEmail}
          setCity={setCity}
          setClassInfo={setClassInfo}
          setPhone={setPhone}
          handleEditValue={handleEditValue}
          dataItem ={dataItem}
          setDataItem ={setDataItem}
        />
      ),
    },
    {
      path: "/table",
      element: (
        <StudentTable
          dataItem={dataItem}
          setDataItem={setDataItem}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

