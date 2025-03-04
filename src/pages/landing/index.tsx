import React, { useEffect, useState, useContext } from "react";

import Logo from "../../assets/images/logo.svg";
import LogoLanding from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClasssesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcons from "../../assets/images/icons/purple-heart.svg";

import { Context } from "../../context_api"

import "./styles.css";

import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Landing() {

  const { authenticated } = useContext(Context)

  const [totalconnections, setTotalConnctions] = useState(0);


  useEffect(() => {
    async function loadData() {
      await api.get("/connections").then(({ data }) => {
        const { count } = data;
        setTotalConnctions(count);
      });
    }
    loadData();
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Proffy" />
          <h2>Sua plataforma de reflexões preferida!</h2>
        </div>

        <img src={LogoLanding} alt="" className="hero-image" />

        <div className="button-container">
          <Link to={authenticated ? "/panel" : "/study"} className="study">
            <img src={studyIcon} alt="Ler" />
            Ler
          </Link>
          {/* <Link to="/give-classes" className="give-classes">
            <img src={giveClasssesIcon} alt="Dar aulas" />
            Dar aulas
          </Link> */}
        </div>

        <span className="total-connections">
          Total de {totalconnections} reflexões cadastradas
          <img src={purpleHeartIcons} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}
