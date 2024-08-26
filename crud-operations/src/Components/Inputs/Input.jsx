import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = ({
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
  catchPhrase,
  bs,
  // handleEditValue,
  indexNumber,
  setId,
  setName,
  setUserName,
  setEmail,
  setStreet,
  setsuite,
  setCity,
  setZipCode,
  setLat,
  setLng,
  setPhone,
  setWebsite,
  setCompanyName,
  setCatchPhrase,
  setBs,
  // handleAdd,
  dataItem,
  setDataItem,
  handleEditValue,
  // indexNumber
}) => {
  console.log(indexNumber);

  const notify = () => {
    if(indexNumber !== null){
      toast.success("Record successfully Update!", {
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
    }
    else{
      toast.success("Record successfully Added!", {
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
    }
  };
  const notify2 = () => {
   
  };
  function handleAdd(e) {
    // const temp = [...dataItem, obj];

    e.preventDefault();
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
          name: companyName,
          catchPhrase: catchPhrase,
          bs: bs,
        },
      },
    ]);

    // console.log
    {
      notify();
    }

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
  function handleToast(callback) {
    notify(indexNumber)
    callback();
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <form
          className="flex gap-4 items-center justify-between flex-wrap m-4"
          onSubmit={
            indexNumber !== null
              ? (e) => handleToast(handleEditValue(e))
              : (e) => handleAdd(e)
          }
        >
          <label className="w-full md:w-[48%]">
            Id <span className="text-sky-500">*</span>
            <input
              type="text"
              value={id}
              className=" p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter your Id"
              onChange={(e) => setId(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            Name <span className="text-sky-500">*</span>
            <input
              type="text"
              value={name}
              className=" p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            UserName <span className="text-sky-500">*</span>
            <input
              type="text"
              value={username}
              className=" p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter your UserName"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>

          <label className="w-full md:w-[48%]">
            Email <span className="text-sky-500">*</span>
            <input
              type="text"
              value={email}
              className=" p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {/*           
          <label className="w-full md:w-[50%] xl:w-[30%]">Street<input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
            className=" p-2 border outline-sky-500 rounded-md w-full my-2"
            placeholder="Enter your Street"
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">Suite<input
            type="text"
            value={suite}
            onChange={(e) => setsuite(e.target.value)}
            required
            className=" p-2 border outline-sky-500 rounded-md w-full my-2"
            placeholder="Enter your Suite"
          /></label> */}

          <label className="w-full md:w-[48%]">
            City <span className="text-sky-500">*</span>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className=" p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter your City"
            />
          </label>

          <label className="w-full md:w-[48%]">
            {" "}
            Zip Code <span className="text-sky-500">*</span>
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className=" p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter your Zip Code"
              on
            />
          </label>

          {/* <label className="w-full md:w-[50%] xl:w-[30%]">
            LAT:
            <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
            className=" p-2 border outline-sky-500 rounded-md w-full my-2"
            placeholder="Enter your Lat"
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]"> 
            LNG:
            <input
            type="text"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
            className=" p-2 border outline-sky-500 rounded-md w-full my-2"
            placeholder="Enter your Lng"
          /></label> */}

          <label className="w-full md:w-[48%]">
            Phone Number <span className="text-sky-500">*</span>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className=" p-2 border outline-sky-500 rounded-md w-full my-2"
              placeholder="Enter your Phone"
            />
          </label>

          {/* <label className="w-full md:w-[50%] xl:w-[30%]">
            Website:
            <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
            className=" p-2 border outline-sky-500 rounded-md w-full my-2"
            placeholder="Enter your Website"
          /></label> */}

          <label className="w-full md:w-[48%]">
            Company Name <span className="text-sky-500">*</span>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className=" p-2 border outline-sky-500 rounded-md w-full  my-2"
              placeholder="Enter your Company Name"
            />
          </label>

          {/* <input
            type="text"
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
            required
            className="w-[19%] p-2 border outline-sky-500 my-2"
          r Comapny catch Phrase"
          />
          <input
            type="text"
            value={bs}
            onChange={(e) => setBs(e.target.value)}
            required
            className="w-[19%] p-2 border outline-sky-500 my-2"
            placeholder="Enter your Bs"
          /> */
          <div className="btn flex gap-4">
            <button
              className="bg-sky-700 w-36 text-white font-semibold text-xl py-2 px-4 rounded-lg mx-2 hover:bg-white hover:text-sky-700 border hover:border-sky-700 hover:underline transition-all duration-500 ease-linear"
              type="submit"
            >
              {/* onClick={indexNumber !== null ? handleEditValue : handleAdd} */}
              {indexNumber !== null ? "Update" : "Add Card"}
            </button>
            <ToastContainer />

            {indexNumber !== null ? (
              ""
            ) : (
              <Link to="/table">
                <button className="w-40 mx-auto bg-sky-400 p-4 text-center text-white font-bold rounded-lg hover:underline hover:bg-white hover:text-sky-500 border hover:border-sky-500 duration-500">
                  Show Table
                </button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
