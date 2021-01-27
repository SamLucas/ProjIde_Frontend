import React, { createContext, useState, useEffect } from "react"

import LoadingPage from "./components/LoadingPage"

// typeUser => userMaster ? true : false(user)

type ContextType = {
  setReadyNavigation(bol: boolean): void
  awaitProcess: (func: () => {}) => void
  setLoading: (flag: boolean) => void
  setTypeUser(bol: boolean): void
  loadAplication(): void
  readyNavigation: Boolean
  authenticated: Boolean
  typeUser: Boolean
  dataUser: {
    id: Number
    email: String
    name: String
  }
}

export const Context = createContext<Partial<ContextType>>({})

export const ContentContex: React.FC = ({ children }) => {
  const [dataUser, setDataUser] = useState()
  const [typeUser, setTypeUser] = useState(false)
  const [loading, setLoading] = useState(false)
  const [readyNavigation, setReadyNavigation] = useState(false)

  useEffect(() => {
    awaitProcess(loadAplication)
  }, [])

  const loadAplication = async () => {
    const response = localStorage.getItem("dataUser")
    response && setDataUser(JSON.parse(response))
  }

  const awaitProcess = async (process: () => void) => {
    setLoading(true)
    await process()
    setLoading(false)
  }

  const valuesGlobal = {
    authenticated: typeof dataUser === "object" && !!dataUser,
    loadAplication: () => awaitProcess(loadAplication),
    setReadyNavigation,
    readyNavigation,
    awaitProcess,
    setTypeUser,
    setLoading,
    typeUser,
    dataUser,
  }

  return (
    <Context.Provider value={valuesGlobal}>
      {/* {loading && <LoadingPage />} */}
      {children}
    </Context.Provider>
  )
}
