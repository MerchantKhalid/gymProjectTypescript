import NavBar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/type";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage(SelectedPage.Home);
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home />
    </div>
  );
}

export default App;
