// import logo from './logo.svg';
import React from "react";
import "./home.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import ListMotivations from "./components/ListMotivations/ListMotivations";
function Home() {
  return (
    <div >
      <Header/>
        <Slider/>
        <p className="whyMaestra"> Por que comprar na Maeztra?</p>
        <ListMotivations/>
    </div>
  );
}

export default Home;
