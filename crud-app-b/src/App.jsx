import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header_Input";

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(null);
  const [id, setId] = useState(1);
  const [editIndex, setEditIndex] = useState(null);

  function hendleAdd() {
    setId(id);
    if (firstName.length > 0 && lastName.length > 0 && age.length > 0) {
      setData([
        ...data,
        { firstName: firstName, lastName: lastName, age: age, id: id },
      ]);
      setFirstName("");
      setLastName("");
      setAge("");
    }
  }

  // function hendleEdit(id) {
  //   const dt = data.filter((item) => item.id == id);
  //   if (dt !== undefined) {
  //     setId(id);
  //     setFirstName(dt[0].firstName);
  //     setLastName(dt[0].lastName);
  //     setAge(dt[0].age);
  //   }
  // }
  function hendleDelete(id) {
    const temp = data.filter((item) => item.id !== id);
    if (id>0 ) {
      setData(temp);
      console.log(id);
      
    }
  }
  function hendleClear(id) {
    if (firstName.length > 0 && lastName.length > 0 && age.length > 0) {
      setFirstName("");
      setLastName("");
      setAge("");
    }
    console.log('Clear');
  }
  function handleEdit(edit_item, edit_ind){
    setFirstName(edit_item.firstName)
    setLastName(edit_item.lastName)
    setAge(edit_item.age)
    setEditIndex(edit_ind)
  }
  function handleEditValue(){
    const temp = [...data];
    temp[editIndex] = {firstName:firstName, lastName:lastName, age:age};
    setData(temp);
    setEditIndex(null)
    setFirstName("")
    setLastName("")
    setAge("")
    console.log(id);
  }

  return (
    <>
      <div className="app bg-[#f7f7f7] h-[100vh]">
        <h1 className="text-7xl text-sky-500 text-center pt-6 mb-10">
          CRUD APP
        </h1>
        <Header
          setFirstName={setFirstName}
          setLastName={setLastName}
          setAge={setAge}
          hendleAdd={hendleAdd}
          firstName={firstName}
          lastName={lastName}
          age={age}
          hendleClear={hendleClear}
          id={id}
          editIndex = {editIndex}
          handleEditValue ={handleEditValue}
        />
        <div className="border-b px-6 bg-white">
          <table className="max-w-[100%] w-full mx-auto">
            <thead className="flex justify-between">
              <tr className="flex justify-between items-center w-full text-center max-w-[100%] hover:bg-gray-100">
                <td className="text-xl h-12  w-[20%] text-center font-bold text-sky-500">
                  Sr.no{" "}
                </td>
                <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                  First Name
                </td>
                <td className="text-xl h-12 w-[20%] text-center font-bold text-sky-500">
                  Last Name
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
            <tbody className="">
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
