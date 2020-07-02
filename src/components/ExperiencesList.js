import React, { useState, useEffect } from "react";

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // here we will get data from backend
      const data = await fetch("http://localhost:3000/experiences"); // fetching from our own API
      const experiences = await data.json();
      setExperiences(experiences.data);
    }
    fetchData();
  }, []); // the empty array makes it run only once (otherwise it will continue to GET on backend)

  return (
    <div>
      <h1>Experiences List</h1>
      {experiences.map((e) => (
        <Experience {...e} /> // the "...e" is same as saying <Experience title={e.title} pictureUrl={e.pictureUrl}>
      ))}
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

export default ExperiencesList;
