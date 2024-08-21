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
  handleAdd
}) => {
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap m-4">
        <input
          type="text"
          value={id}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={name}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}   
          
        />
        <input
          type="text"
          value={username}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your UserName"
          onChange={(e) => setUserName(e.target.value)}
          
        />
        <input
          type="text"
          value={email}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <input
          type="text"
          value={street}
          onChange ={(e) => setStreet(e.target.value)}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Street"
          
        />
        <input
          type="text"
          value={suite}
          onChange ={(e) => setsuite(e.target.value)}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Suite"
          
        />
        <input
          type="text"
          value={city}
          onChange ={(e) => setCity(e.target.value) }
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your City"
          
        />
        <input
          type="text"
          value={zipcode}
          onChange ={(e) => setZipCode(e.target.value)}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Zip Code"
          
          on
        />
        <input
          type="text"
          value={lat}
          onChange ={(e) =>setLat(e.target.value) }
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Lat"
          
        />
        <input
          type="text"
          value={lng}
          onChange ={(e) => setLng(e.target.value)}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Lng"
          
        />
        <input
          type="text"
          value={phone}
          onChange ={(e) => setPhone(e.target.value) }
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Phone"
          
        />
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Website"
          
        />
        <input
          type="text"
          value={companyName}
          onChange ={(e) => setCompanyName(e.target.value)}
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Company Name"
          
        />
        <input
          type="text"
          value={catchPhrase}
          onChange ={(e) => setCatchPhrase(e.target.value) }
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Comapny catch Phrase"
          
        />
        <input
          type="text"
          value={bs}
          onChange ={(e) => setBs(e.target.value) }
          className="w-[19%] p-2 border my-2"
          placeholder="Enter your Bs"
          
        />
        <button
          className="bg-sky-700 text-white font-semibold text-xl py-2 px-4 rounded-lg mx-2"
          onClick={indexNumber !== null ? handleEditValue:handleAdd}
        >
          {indexNumber !== null ? "Update" : "Add Card"}
        </button>
      </div>
    </div>
  );
};

export default Input;
