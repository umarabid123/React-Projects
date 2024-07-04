import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import FeatureSectionFruit from "./Components/FeatureSectionFruit";

function App() {
  return (
    <>
     <div>
      <Navbar />  
      <Hero />
      <Category />
      <FeatureSectionFruit />
     </div>
    </>
  );
}

export default App;
