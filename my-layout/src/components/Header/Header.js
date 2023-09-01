// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./header.scss";
import MenuMobile from "./mobile/MenuMobile";
import MenuDesktop from "./desktop/MenuDesktop";

const SizePage = window.innerWidth;


function Header() {

  useEffect(() =>{

  },[SizePage])

  console.log(SizePage)


  return (
    <div className="header">
      <div className="firstBanner">
        <p className="tittle">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </p>
      </div>
      {  SizePage <= 620 ? <MenuMobile /> : <MenuDesktop />}
      
    </div>
  );
}

export default Header;
