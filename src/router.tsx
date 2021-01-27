import React, { useContext, useEffect, useRef } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Landing from "./pages/landing"
import TeacherList from "./pages/list"
import TeacherForm from "./pages/forms"
import ViewPost from "./pages/viewPost"
import Login from "./pages/login"
import Register from "./pages/cadastre"
import MyPost from "./pages/myPost"
import NewPost from "./pages/newPost"

import LoadingPage from "./components/LoadingPage"

import LoginMaster from "./pages/loginMaster"
import ListMaster from "./pages/listMaster"

import { Context } from "./context_api"

export default function Routes() {
  const { authenticated, typeUser, setReadyNavigation } = useContext(Context)
  const teste = useRef(null)

  useEffect(() => {
    setReadyNavigation && setReadyNavigation(teste.current ? true : false)
  }, [teste])

  const RouterView = () => (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/view/:id" component={ViewPost} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <Route path="*" component={LoadingPage} /> */}
    </Switch>
  )

  const MasterView = () => (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/view/:id" component={ViewPost} />
      <Route path="/panel" component={MyPost} />
      <Route path="/list-master" component={ListMaster} />
      <Route path="/login-master" component={LoginMaster} />
      {/* <Route path="*" component={LoadingPage} /> */}
    </Switch>
  )

  const UserView = () => (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/panel" component={MyPost} />
      <Route path="/view/:id" component={ViewPost} />
      <Route path="/new-post" component={NewPost} />
      {/* <Route path="*" component={LoadingPage} /> */}
    </Switch>
  )

  console.log(authenticated, typeUser)

  return (
    <BrowserRouter ref={teste}>
      {!authenticated ? (
        <RouterView />
      ) : typeUser ? (
        <MasterView />
      ) : (
        <UserView />
      )}
    </BrowserRouter>
  )
}
