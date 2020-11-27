import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import PageHeader from "../../components/PageHeader";

import "./styles.css";

import api from "../../services/api";

import { FiSun } from 'react-icons/fi'
import { BiMoon } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface Post {
  id: number;
  title: string;
  text: string;
  visible:number;
  deleted:number;
  aproved:number;
  dataUser: {
    name: string;
  }
}

export default function ViewPost() {

  const params:{ id: string }  = useParams()
  const { id } = params
  
  const [dataText, setDataText] = useState<Post | null>(null);
  const [themeMode, setThemeMode] = useState(false)
  const [like, setLike] = useState(false)

  async function loadData() {
    const { data } = await api.get(`posts/unique/${id}`);
    setDataText(data);
  }

  useEffect(() => {
    loadData()
  }, [id])

  if(dataText === null) return <></>;

  const { title, text, dataUser } = dataText

  console.log(dataText)

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader />      

     

      <main>  
        <div className="contentActions">        
          <span onClick={() => setThemeMode(!themeMode)} className="cTheme">
            {themeMode ? <BiMoon /> : <FiSun />}
          </span>
          <span onClick={() => setLike(!like)} className="cLike">
            {like ? <AiFillHeart /> : <AiOutlineHeart />}  
            <p>22</p>      
          </span>
        </div>
        <div className="contentText">
          <header>
            <h1>{title}</h1>  
            <p>Autor {dataUser.name}</p>
          </header>

          {text}  
        </div>
      </main>
    </div>
  );
}
