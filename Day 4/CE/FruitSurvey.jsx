import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Fruits } from '../../../SharedData.js';

const FruitSurvey = () => {
  const [Name, setName] = useState(""); // Initialize as an empty string
  const [selectedValue, setSelectedValue] = useState(""); // Initialize as an empty string

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Name, selectedValue);
  };

  return (
    <>
      <h1>Enter your name favourite fruit :</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          data-testid="name"
          variant="standard"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <Autocomplete
          data-testid="autocomplete"
          options={Fruits}
          value={selectedValue}
          onChange={(_, newValue) => setSelectedValue(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Choose a fruit" variant="outlined" />
          )}
        />
        <Button type="submit" data-testid="button">
          Submit
        </Button>
      </form>
    </>
  );
};

export default FruitSurvey;
