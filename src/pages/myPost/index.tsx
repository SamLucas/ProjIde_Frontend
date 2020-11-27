import React, { useState, useEffect, FormEvent } from "react";
import { useHistory } from 'react-router-dom'

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import { AiOutlinePlus } from 'react-icons/ai'

import "./styles.css";
import "./formStyle.css";

import api from "../../services/api";

export default function MyPost() {

  const history = useHistory()

  const [classes, setClasses] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  async function loadData() {
    const { data } = await api.get("posts");
    setClasses(data);
  }

  async function postSearch(e: FormEvent) {
    e.preventDefault()

    const {data} = await api.get("posts/search", {
      params: {
        textSearch
      }
    });

    setClasses(data);
  }

  useEffect(( ) => {
    loadData()
  }, [textSearch])

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Meus posts.">
        <form id="search-post" onSubmit={postSearch}>
          <Input
            type="text"
            label="Procure por uma post"
            name="time"
            value={textSearch}
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
          <button type="button" onClick={() => history.push("new-post")}>
            <AiOutlinePlus size={24} color="black" />
          </button>
        </form>
      </PageHeader>

      <main>
        {classes.map((data) => {
          return (
            <TeacherItem data={data} />
          );
        })}
      </main>
    </div>
  );
}
