import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";

import api from "../../services/api";

export default function NewPost() {

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  async function handleNewPost() {
    await api.post("posts", {
      title,
      text,
      user_id: 1
    }).then(() => {
      history.goBack();
    })
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Novo post.">
        <form id="new-post" onSubmit={handleNewPost}>
          <Input
            type="text"
            label="Titulo:"
            name="titulo"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input
            type="text"
            label="Texto:"
            name="texto"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="submit">Enviar</button>          
        </form>
      </PageHeader>
    </div>
  );
}
