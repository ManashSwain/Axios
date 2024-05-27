import React, { useEffect, useState } from "react";
import axios from "axios";
import "./data.css";

const Data = () => {
  const [myData, setmyData] = useState([]);
  const [error, setError] = useState("");

  // using promises

  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((response)=>{
  //     setmyData(response.data);
  //    console.log(response.data);
  //   })
  //   .catch((error)=>{
  //     setError(error.message);
  //    console.log(error.message);
  //   })
  // },[])

  // using async and await

  const allData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setmyData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <h1>Axios in React JS </h1>
      <div className="datacontainer">
        {error !== "" && <h2>{error}</h2>}
        {myData.map((posts) => {
          return (
            <div key={posts.id} className="card">
              <h2 className="title">{posts.title.slice(1,15)}</h2>
              <h3 className="body">{posts.body.slice(1,120)}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Data;
