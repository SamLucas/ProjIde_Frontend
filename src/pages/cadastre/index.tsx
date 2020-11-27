import React, { useState, FormEvent } from "react";
import { useHistory } from 'react-router-dom'

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";

import api from "../../services/api";

export default function Cadastre() {

  const history = useHistory();

  const [name, setName] = useState("Samuel");
  const [email, setEmail] = useState("samuellucas0603@gmail.com");
  const [password, setPassword] = useState("eunaoseiminhasenha");

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    if(!email && !password && !name) return;

    await api.post("users", {
      email,
      password,
      name
    }).then(() => {
      history.push("login");
    })  
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader 
        title="Cadastre-se" 
        description="Digite suas informações para efetuar o cadastro."
        defineHeightHeader={true}
      >
        <form id="search-login" onSubmit={handleLogin}>
          <Input
            type="text"
            label="Digite o seu nome:"
            name="nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
          <button type="submit">Finalizar cadastro</button>
        </form>
      </PageHeader>
    </div>
  );
}
