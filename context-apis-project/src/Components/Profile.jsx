import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
function Profile() {
const {user} = useContext(UserContext)

 if(!user) return <div className="text-5xl text-white">Please login</div>
  return (
    <div className="text-5xl text-white">
    Welcome {user}
    </div>
  );
}

export default Profile;
