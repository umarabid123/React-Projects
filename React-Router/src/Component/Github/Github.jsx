import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/umarabid123")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.followers);
  //         setData(data);
  //       });
  //   }, []);
  return <div className="bg-gray-700 text-4xl text-white text-center p-4">Github Followers: {data.followers}</div>;
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/umarabid123")
  return response.json();
};
