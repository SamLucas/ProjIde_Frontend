import React, { useState, FormEvent, useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

import PageHeader from "../../components/PageHeader"
import Input from "../../components/Input"

import { Context } from "../../context_api"

import "./styles.css"
import "./formStyle.css"

import api from "../../services/api"

export default function Login() {
  const {
    loadAplication,
    setTypeUser,
    authenticated,
    readyNavigation,
  } = useContext(Context)

  const history = useHistory()

  const [email, setEmail] = useState("samuellucas0603@gmail.com")
  const [password, setPassword] = useState("eunaoseiminhasenha")

  useEffect(() => {
    // authenticated && readyNavigation && history.push("panel")
  }, [authenticated, readyNavigation])

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    const emailMaster = process.env.REACT_APP_EMAIL_MASTER
    const passWordMaster = process.env.REACT_APP_EMAIL_PASSWORD

    let dataUser = null

    if (email === emailMaster && password === passWordMaster) {
      setTypeUser && setTypeUser(true)
      dataUser = { email: "emailMaster@gmail.com", name: "Usuario Master" }
    } else {
      const { data } = await api.post("login", {
        email,
        password,
      })

      dataUser = data
    }

    localStorage.setItem("dataUser", JSON.stringify(dataUser))
    loadAplication && (await loadAplication())

    history.push("/panel")
    window.location.reload()
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Login"
        description="Entre com suas credenciais de acesso."
        defineHeightHeader={true}
      >
        <form id="content_login" onSubmit={handleLogin}>
          <Input
            type="email"
            label="Digite o seu email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <Input
            type="password"
            label="Digite sua senha"
            name="senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <Link to="/register">Cadastre-se</Link>

          <button type="submit">Login</button>
        </form>
      </PageHeader>
    </div>
  )
}
