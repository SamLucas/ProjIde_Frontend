import React from "react";
import { useHistory } from "react-router-dom";

import BacKIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title?: string;
  description?: string;
  defineHeightHeader?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
  defineHeightHeader
}) => {

  const history = useHistory();

  return (
    <div className={`page-header ${!title && "page-header-heigth-min"} ${defineHeightHeader && "page-header-heigth-max"}`}>
      <div className="top-bar-container">
        <img 
          src={BacKIcon}
          alt="Voltar"
          className="goBack"
          onClick={() => {
            history.goBack()
          }} />

        <p onClick={() => { history.push("/login")}}>Login</p>
      </div>

      <div className="header-content">
        {title && <strong>{title}</strong>}
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
