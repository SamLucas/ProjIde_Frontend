import React, { useState, FormEvent } from "react";
import { Link } from 'react-router-dom'

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";

import api from "../../services/api";

export default function Login() {

  const [email, setEmail] = useState("samuellucas0603@gmail.com");
  const [password, setPassword] = useState("eunaoseiminhasenha");

  async function handleLogin(e: FormEvent) {
    e.preventDefault()
    const { data } = await api.post("login", {
      email,
      password
    });

    console.log(data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader 
        title="Login" 
        description="Entre com suas credenciais de acesso."
        defineHeightHeader={true}
      >
        <form id="search-login" onSubmit={handleLogin}>
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

          <Link to="/register">
            Cadastre-se
          </Link>
          
          <button type="submit">Login</button>
        </form>
      </PageHeader>
    </div>
  );
}
