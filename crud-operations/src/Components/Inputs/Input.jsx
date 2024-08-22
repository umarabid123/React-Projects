import React from "react";

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
  handleEditValue,
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
  handleAdd,
}) => {
  console.log(indexNumber);
  
  return (
    <div>
      <div className="flex flex-col items-center">
        <form  className="flex gap-4 items-center justify-between flex-wrap m-4" onSubmit={indexNumber !== null? (e) => handleEditValue(e) :(e) => handleAdd(e)}>
        <label  className="w-full md:w-[50%] xl:w-[30%]">
          Id:
        <input
            type="text"
            value={id}
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Id"
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">
            Name:
            <input
            type="text"
            value={name}
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
            required
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">
            UserName:
            <input
            type="text"
            value={username}
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your UserName"
            onChange={(e) => setUserName(e.target.value)}
            required
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">
            Email:
            <input
            type="text"
            value={email}
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">Street<input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Street"
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">Suite<input
            type="text"
            value={suite}
            onChange={(e) => setsuite(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Suite"
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">City<input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your City"
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]"> Zip Code:<input
            type="text"
            value={zipcode}
            onChange={(e) => setZipCode(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Zip Code"
            on
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">
            LAT:
            <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Lat"
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]"> 
            LNG:
            <input
            type="text"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Lng"
          /></label>
         
          <label className="w-full md:w-[50%] xl:w-[30%]"> 
            Phone Number
            <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Phone"
          /></label>
         
          <label className="w-full md:w-[50%] xl:w-[30%]">
            Website:
            <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
            className=" p-2 border rounded-md w-full my-2"
            placeholder="Enter your Website"
          /></label>
          
          <label className="w-full md:w-[50%] xl:w-[30%]">
            Company Name:
            <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className=" p-2 border rounded-md w-full  my-2"
            placeholder="Enter your Company Name"
          /></label>
          
          {/* <input
            type="text"
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
            required
            className="w-[19%] p-2 border my-2"
          r Comapny catch Phrase"
          />
          <input
            type="text"
            value={bs}
            onChange={(e) => setBs(e.target.value)}
            required
            className="w-[19%] p-2 border my-2"
            placeholder="Enter your Bs"
          /> */}
          <button
            className="bg-sky-700 text-white font-semibold text-xl py-2 px-4 rounded-lg mx-2"
            type="submit"
            >
            {/* onClick={indexNumber !== null ? handleEditValue : handleAdd} */}
            {indexNumber !== null ? "Update" : "Add Card"}
          </button>
        </form>
        <a href="#table" >

        <button  className="w-[98%] mx-auto bg-sky-400 p-4 text-center text-white font-bold rounded-lg hover:underline hover:bg-sky-500 transition-all duration-500 ease-linear">Show Table</button>
        </a>
      </div>
    </div>
  );
};

export default Input;
