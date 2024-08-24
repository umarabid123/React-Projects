import React from 'react'
import Input from '../Components/Inputs/Input'
import { Link } from 'react-router-dom'



const Home = ({
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
    dataItem,
    setDataItem
}) => {
  return (
    <div>
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
          dataItem={dataItem}
          setDataItem={setDataItem}
        />
        
    </div>
  )
}

export default Home
