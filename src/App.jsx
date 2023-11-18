import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar/TopBar";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import FirstSection from "./components/FirstSection/FirstSection";
import NewsLastNewsSection from "./components/NewsLastNewsSection/NewsLastNewsSection";
import TopButton from "./components/TopButton/TopButton";

import { CirclesWithBar } from 'react-loader-spinner'
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating website loading failure after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className={`${isLoading ? "bg-rose-400" : ""} h-screen w-full z-50`}>
        {isLoading ? (
          <div className="flex flex-col">
            <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen">
              <div className="flex flex-col items-center justify-center gap-6">
                <CirclesWithBar
                  height="140"
                  width="140"
                  color="#f1f1f1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  outerCircleColor=""
                  innerCircleColor=""
                  barColor=""
                  ariaLabel='circles-with-bar-loading'
                />
                <h2 className="text-2xl font-extrabold text-white">لطفا صبر کنید ...</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[1620px] mx-auto font-vazirLight">
            <TopBar />
            <Navbar />
            <FirstSection />
            <NewsLastNewsSection />
            <TopButton />
          </div>
        )}
      </div>
    </>
  );
};

export default App
