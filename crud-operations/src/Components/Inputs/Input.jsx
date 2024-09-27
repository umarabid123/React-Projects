import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentInput = ({
  id,
  name,
  age,
  email,
  address,
  city,
  zipcode,
  phone,
  course,
  indexNumber,
  setId,
  setName,
  setAge,
  setEmail,
  setAddress,
  setCity,
  setZipCode,
  setPhone,
  setCourse,
  dataItem,
  setDataItem,
  handleEditValue,
}) => {
  const notify = () => {
    if (indexNumber !== null) {
      toast.success("Record successfully Updated!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Zoom,
        theme: "light",
      });
    } else {
      toast.success("Record successfully Added!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Zoom,
        theme: "light",
      });
    }
  };

  function handleAdd(e) {
    e.preventDefault();
    setDataItem([
      ...dataItem,
      {
        id,
        name,
        age,
        email,
        address,
        city,
        zipcode,
        phone,
        course,
      },
    ]);
    notify();
    resetFields();
  }

  function resetFields() {
    setId("");
    setName("");
    setAge("");
    setEmail("");
    setAddress("");
    setCity("");
    setZipCode("");
    setPhone("");
    setCourse("");
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <form
          className="flex gap-4 items-center justify-between flex-wrap m-4"
          onSubmit={
            indexNumber !== null
              ? (e) => {
                  e.preventDefault();
                  handleEditValue(e);
                  notify();
                }
              : (e) => handleAdd(e)
          }
        >
          <label className="w-full md:w-[48%]">
            Student ID <span className="text-sky-500">*</span>
            <input
              type="text"
              value={id}
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Student ID"
              onChange={(e) => setId(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            Name <span className="text-sky-500">*</span>
            <input
              type="text"
              value={name}
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Student Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            Age <span className="text-sky-500">*</span>
            <input
              type="number"
              value={age}
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Student Age"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            Email <span className="text-sky-500">*</span>
            <input
              type="email"
              value={email}
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Student Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            Address <span className="text-sky-500">*</span>
            <input
              type="text"
              value={address}
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            City <span className="text-sky-500">*</span>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter City"
            />
          </label>

          <label className="w-full md:w-[48%]">
            Zip Code <span className="text-sky-500">*</span>
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Zip Code"
            />
          </label>

          <label className="w-full md:w-[48%]">
            Phone Number <span className="text-sky-500">*</span>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Phone Number"
            />
          </label>

          <label className="w-full md:w-[48%]">
            Course <span className="text-sky-500">*</span>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter Course"
            />
          </label>

          <div className="btn flex gap-4">
            <button
              className="bg-sky-700 w-40 text-white font-semibold text-xl py-2 px-4 rounded-lg mx-2 hover:bg-white hover:text-sky-700 border hover:border-sky-700 hover:underline transition-all duration-500 ease-linear"
              type="submit"
            >
              {indexNumber !== null ? "Update" : "Add Student"}
            </button>
            <ToastContainer />
            {indexNumber === null && (
              <Link to="/table">
                <button className="w-40 mx-auto bg-sky-400 p-4 text-center text-white font-bold rounded-lg hover:underline hover:bg-white hover:text-sky-500 border hover:border-sky-500 duration-500">
                  Show Students
                </button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentInput;

