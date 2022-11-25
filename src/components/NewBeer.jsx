import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";

const NewBeer = ({ setBeers }) => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log(response);
        setFormData({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      });

    setBeers((currentState) => {
      const copy = [...currentState];
      copy.push(formData);
      return copy;
    });
  }

  const {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  } = formData;

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          value={name}
          type="text"
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, name: value });
          }}
        />

        <label>Tagline</label>
        <input
          value={tagline}
          type="text"
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, tagline: value });
          }}
        />

        <label>Description</label>
        <input
          value={description}
          type="text"
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, description: value });
          }}
        />

        <label>First Brewed</label>
        <input
          value={first_brewed}
          type="text"
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, first_brewed: value });
          }}
        />

        <label>Brewers Tips</label>
        <input
          value={brewers_tips}
          type="text"
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, brewers_tips: value });
          }}
        />
        <label>Attenuation Level</label>
        <input
          value={attenuation_level}
          type="number"
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, attenuation_level: value });
          }}
        />
        <label>Contributed By</label>
        <input
          value={contributed_by}
          type="text"
          onChange={({ target: { value } }) => {
            setFormData({ ...formData, contributed_by: value });
          }}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBeer;
