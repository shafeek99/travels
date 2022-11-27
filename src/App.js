import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import { Destination } from "./components/destination/Destination";
import Search from "./components/search/Search";
import Select from "./components/selects/Select";
import Selectsimg from "./components/Selectsimg/Selectsimg";
import Carousal from "./components/curosal/Carousal";
import Footer from "./components/footer/Footer";


function App() {
  return (
   <div>
<Navbar/>
<Header/>
<Destination/>
<Search/>
<Select/>
<Selectsimg/>
<Carousal/>
<Footer/>
   </div>
  );
}

export default App;
