import React from "react"
import ReactDOM from "react-dom"
import Router from "./router"

import { ContentContex } from "./context_api"

import "./assets/styles/global.css"

ReactDOM.render(
  <React.StrictMode>
    <ContentContex>
      <Router />
    </ContentContex>
  </React.StrictMode>,
  document.getElementById("root")
)
