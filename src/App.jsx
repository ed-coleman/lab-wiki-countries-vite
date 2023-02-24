import { useState } from "react";
import "./App.css";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom";


function App() {
  const [countriesList, setCountriesList] = useState(countries)

  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
        </div>
      </div>
    <Routes> 
        <Route path='/' element={<CountriesList countries={countriesList}/>}/> 
    
    </Routes>
    </div>
  );
}

export default App;
