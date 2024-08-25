import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({ handleDelete, handleEdit, dataItem, setDataItem }) => {
  // const [dataItem, setDataItem] = useState([
  //     {
  //       id: 1,
  //       name: "Leanne Graham",
  //       username: "Bret",
  //       email: "Sincere@april.biz",
  //       address: {
  //         street: "Kulas Light",
  //         suite: "Apt. 556",
  //         city: "Gwenborough",
  //         zipcode: "92998-3874",
  //         geo: {
  //           lat: "-37.3159",
  //           lng: "81.1496",
  //         },
  //       },
  //       phone: "1-770-736-8031 x56442",
  //       website: "hildegard.org",
  //       company: {
  //         name: "Romaguera-Crona",
  //         catchPhrase: "Multi-layered client-server neural-net",
  //         bs: "harness real-time e-markets",
  //       },
  //     },
  //     {
  //       id: 2,
  //       name: "Ervin Howell",
  //       username: "Antonette",
  //       email: "Shanna@melissa.tv",
  //       address: {
  //         street: "Victor Plains",
  //         suite: "Suite 879",
  //         city: "Wisokyburgh",
  //         zipcode: "90566-7771",
  //         geo: {
  //           lat: "-43.9509",
  //           lng: "-34.4618",
  //         },
  //       },
  //       phone: "010-692-6593 x09125",
  //       website: "anastasia.net",
  //       company: {
  //         name: "Deckow-Crist",
  //         catchPhrase: "Proactive didactic contingency",
  //         bs: "synergize scalable supply-chains",
  //       },
  //     },
  //     {
  //       id: 3,
  //       name: "Clementine Bauch",
  //       username: "Samantha",
  //       email: "Nathan@yesenia.net",
  //       address: {
  //         street: "Douglas Extension",
  //         suite: "Suite 847",
  //         city: "McKenziehaven",
  //         zipcode: "59590-4157",
  //         geo: {
  //           lat: "-68.6102",
  //           lng: "-47.0653",
  //         },
  //       },
  //       phone: "1-463-123-4447",
  //       website: "ramiro.info",
  //       company: {
  //         name: "Romaguera-Jacobson",
  //         catchPhrase: "Face to face bifurcated interface",
  //         bs: "e-enable strategic applications",
  //       },
  //     },
  //   ]);
  const notify = () => {
    toast.success("Record successfully Deleted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
      theme: "light",
      // transition: Zoom
    });
    console.log("Deletnotify");
  };

  function handleDelete(id) {
    console.log(id);

    if (confirm("Are you sure! You want to delete?")) {
      if (id > 0) {
        const temp = dataItem.filter((item, i) => item.id !== id);
        setDataItem(temp);
        console.log("delete");
      }
      // {callback()}
    }
   
  }
  
  return (
    <div id="table" className=" p-4">
      <h1 className="text-4xl font-bold text-sky-500 text-center py-4">
        Records History
      </h1>
      <table className="table-autow-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full max-w-[100%]">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border">
          <tr className="flex gap-2 items-center w-full text-center max-w-[100%] hover:bg-gray-100 pt-4 px-2">
            <td className="text-lg h-12  w-[15%] font-bold text-sky-500">
              Name
            </td>
            <td className="text-lg h-12 w-[20%] font-bold text-sky-500">
              UserName
            </td>
            <td className="text-lg h-12 w-[22%] font-bold text-sky-500">
              Email
            </td>
            <td className="text-lg h-12 w-[23%] font-bold text-sky-500">
              City
            </td>
            <td className="text-lg h-12 w-[18%] font-bold text-sky-500">
              Zip Code
            </td>
            <td className="text-lg h-12 font-bold text-sky-500 w-[25%]">
              Phone
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
                <td className="text-[1rem] h-16 py-4 w-[18%]">{item.name}</td>
                <td className="text-[1rem] h-16 py-4 w-[20%]">
                  {item.username}
                </td>
                <td className="text-[1rem] h-16 py-4 w-[22%]">{item.email}</td>
                <td className="text-[1rem] h-16 py-4 w-[23%]">
                  {item.address.city}
                </td>
                <td className="text-[1rem] h-16 py-4 w-[18%]">
                  {item.address.zipcode}
                </td>
                <td className="text-[1rem] h-16 py-4 w-[25%]">{item.phone}</td>

                <td className="text-[1rem] h-16 py-4 w-[23%]">
                  {item.company.name}
                </td>
                <ToastContainer />
                <td className="text-4xl self-center cursor-pointer h-16 w-[20%]">
                  <Link to="/">
                    <button
                      className="bg-sky-700 text-white font-semibold text-sm py-2 px-4 rounded-lg"
                      onClick={() => handleEdit(i, item)}
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    className="bg-red-500 text-white p-2 w-16 rounded-lg transition-all duration-500 text-sm m-2"
                    onClick={() => handleDelete(item.id) }
                  >
                    Delete
                  </button>
                </td>

                {/* <ToastContainer />    */}
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
      <center>
        {" "}
        {/* <Link to="/"> */}
        <ToastContainer />
        <Link to='/'><button
          className="w-[30%] my-3 mx-auto bg-sky-400 p-4 text-center text-white font-bold rounded-lg hover:underline hover:bg-white hover:text-sky-500 border hover:border-sky-500 transition-all duration-500 ease-linear"
          onClick={notify}
        >
          Add New Record
        </button></Link>
        {/* </Link> */}
      </center>
      <Outlet />
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
  );
};

export default Table;
