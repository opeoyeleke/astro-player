import React from "react";
import NavBar from "./NavBar/NavBar";
import MainSection from "./MainSection";
import Footer from "./Footer";

export default function MainApp() {
  return (
    <div className="main-app-container">
      <NavBar />
      <MainSection />
      <Footer />
    </div>
  );
}
