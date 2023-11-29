import { useState, useEffect } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const {location, setLocation} = useState("");
  const{ animal, setAnimal} = useState("");
  const {breed, setBreed} = useState("")
  const breeds = ["husky"]
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location" onChange = {(e) => setLocation(e.target.value)} value={location} placeholder="location" />
        </label>
        <label>
            Animal
            <select id="animal" value={animal} onChange={(e) =>{
                setAnimal(e.target.value); setBreed("")
            }}><option/>
            {ANIMALS.map(animal => (
                <option key={animal} value={animal} >{animal}</option>
            ))}
            </select>
        </label>
        <label htmlFor="breed">
        Breed
        <select disabled={!breeds.length} id="breed" value={breed} onChange={(e) => 
            setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)} >
            <option/>
            {breeds.map((breed) => (
                <option key ={breed} value={breed}> {breed}</option>
            ))}
            
            </select>
        

        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
