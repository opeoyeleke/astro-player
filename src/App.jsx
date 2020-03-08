import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <div className="app-container">
        <NavBar />
        <MainSection />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
