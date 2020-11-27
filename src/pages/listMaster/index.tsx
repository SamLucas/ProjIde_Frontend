import React, { useState, useEffect, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";

import api from "../../services/api";

export default function Teacher() {
  const [classes, setClasses] = useState([]);
  const [dataSolicitation, setDataSolicitations] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  const [indexTab, setIndexTab] = useState(0);

  async function loadData() {
    const { data } = await api.get("posts");
    setClasses(data);
  }

  async function loadDataSolicitation() {
    const { data } = await api.get("posts/solicitations");
    setDataSolicitations(data);
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
    loadDataSolicitation()
  }, [textSearch])

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Lista de todos os posts.">
        <>
          <div className="row">
            <p 
              className={indexTab === 0 ? "active" : ""} 
              onClick={() => setIndexTab(0)}
            >
              listagem geral
            </p>
            <p
             className={indexTab === 1 ? "active" : ""} 
             onClick={() => setIndexTab(1)}
            >
              Solicitações
            </p>
          </div>

          <form id="list-master" onSubmit={postSearch}>
            <Input
              type="text"
              label="Procure por uma reflexão"
              name="time"
              value={textSearch}
              onChange={(e) => {
                setTextSearch(e.target.value);
              }}
            />
            <button type="submit">Buscar</button>
          </form>
        </>
      </PageHeader>

      <main>

        {indexTab === 0 && classes.map((data) => {
          return (
            <TeacherItem data={data} />
          );
        })}

        {indexTab === 1 && dataSolicitation.map((data) => {
          return (
            <TeacherItem data={data} />
          );
        })}
      </main>
    </div>
  );
}
