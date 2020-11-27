import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/landing";
import TeacherList from "./pages/list";
import TeacherForm from "./pages/forms";
import ViewPost from "./pages/viewPost";
import Login from "./pages/login";
import Register from "./pages/cadastre";
import MyPost from "./pages/myPost";
import NewPost from "./pages/newPost";

import LoginMaster from "./pages/loginMaster";
import ListMaster from "./pages/listMaster";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/view/:id" component={ViewPost} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/panel" component={MyPost} />
      <Route path="/new-post" component={NewPost} />
      <Route path="/list-master" component={ListMaster} />
      <Route path="/login-master" component={LoginMaster} />
    </BrowserRouter>
  );
}
