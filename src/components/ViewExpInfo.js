import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// this is to view an experience in detail
const ViewExpInfo = () => {
  const [expInfo, setExpInfo] = useState(null);
  const { eid } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3000/experiences/" + eid);
      const expInfo = await data.json();
      setExpInfo(expInfo);
    }
    fetchData();
  }, []); // the empty array makes it run only once (otherwise it will continue to GET on backend)
  console.log(expInfo);
  return (
    <div>
      <h1>Details of Experience Name</h1>
      <Experience {...expInfo} />
    </div>
  );
};

const Experience = ({ title, pictureUrl, country, duration, price }) => (
  <div>
    <h2>{title}</h2>
    <img src={pictureUrl} alt="adsdasdsad" />
    <h3>{country}</h3>
    <h4>Starting from ${price} USD</h4>
    <h4>{duration} minutes</h4>
  </div>
);

export default ViewExpInfo;
