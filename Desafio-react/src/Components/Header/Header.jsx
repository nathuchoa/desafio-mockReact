import React from "react";
import PreTitle from "../PreTitle/PreTitle";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import NavBar from "../NavBar/NavBar";
import S from "./Header.module.css";

const Header = () => {
  return (
    <header className={S.headerContainer}>
      <div className={S.headerContent}>
        <PreTitle texto="uma seleção de produtos" />
        <Title texto="especial para você" />
        <Subtitle texto="Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!" />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
