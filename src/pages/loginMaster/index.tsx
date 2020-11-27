import React, { useState, FormEvent } from "react";
import { Link } from 'react-router-dom'

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";

export default function LoginMaster() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    const emailMaster = process.env.REACT_APP_EMAIL_MASTER
    const emailPassword = process.env.REACT_APP_EMAIL_PASSWORD

    if(email === emailMaster && emailPassword === password)
      console.log(true);  
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader 
        title="Login Master" 
        description="Entre com suas credenciais de acesso."
        defineHeightHeader={true}
      >
        <form id="login-master" onSubmit={handleLogin}>
          <Input
            type="email"
            label="Digite o seu email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Digite sua senha"
            name="senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          
          <button type="submit">Login</button>
        </form>
      </PageHeader>
    </div>
  );
}
