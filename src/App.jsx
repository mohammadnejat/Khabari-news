import React from "react";
import TopBar from "./components/TopBar/TopBar";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import FirstSection from "./components/FirstSection/FirstSection";
import NewsLastNewsSection from "./components/NewsLastNewsSection/NewsLastNewsSection";
import TopButton from "./components/TopButton/TopButton";
function App() {
  return (
    <>
          <div className="max-w-[1620px] mx-auto font-vazirLight">
            <TopBar />
            <Navbar />
            <FirstSection />
            <NewsLastNewsSection />
            <TopButton />
          </div>
    </>
  );
};

export default App
