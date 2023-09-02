// import logo from './logo.svg';
import React from "react";
import "./style.scss";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Logo from "../../../assets/logo-maeztra-desktop.svg";
import PerfilLogo from "../../../assets/perfil-logo.svg";
import HeartlLogo from "../../../assets/icon-heart.svg";
import BagLogo from "../../../assets/bag-icon.svg";
import DressIcon from "../../../assets/icon-dress.svg";


function MenuDesktop() {
  return (
    <>
      <div className="div">
        <img src={Logo} width="147px" height="88px" />

        <div className="searchInput">
          <TextField
            className="BtnField"
            id="filled-basic"
            label="O que Você Busca?"
            variant="filled"
          />
          <Button className="BtnSearch" variant="contained">
            Buscar
          </Button>
        </div>

        <li className="Btngroup">
          {" "}
          <img src={PerfilLogo} width="14px" height="16px"></img>{" "}
          <Button className="menuTittle" variant="text">
            Minha Conta
          </Button>
        </li>

        <li className="Btngroup">
          {" "}
          <img src={HeartlLogo} width="14px" height="16px"></img>{" "}
          <Button className="menuTittle" variant="text">
            Minha Lista
          </Button>
        </li>

        <li className="Btngroup-Cart">
          {" "}
          <img src={BagLogo} width="14px" height="16px"></img>{" "}
          <Button className="menuTittle" variant="text">
            Minha Lista
          </Button>
        </li>
      </div>

      <div className="SecondLine">
        <li className="Btngroup">
          {" "}
          <img src={DressIcon} width="16px" height="16px"></img>{" "}
          <Button className="menuTittleNew" variant="text">
            Novidade
          </Button>
        </li>
      </div>
    </>
  );
}

export default MenuDesktop;
