import React from "react";
import { Link } from 'react-router-dom'

import "./styles.css";

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

interface TearchProps {
  data: Post;
}

const TeacherItem: React.FC<TearchProps> = ({ data }) => {

  const { id, title, text, dataUser } = data;

  return (
    <article className="teacher-item">
      <header>
        <div>
          <strong>{title}</strong>          
        </div>
      </header>

      <p>{text.substr(0,200) + '...'}</p>

      <footer>
        <p> Autor: <strong>{dataUser.name}</strong></p>
        <Link to={`/view/${id}`} >Ler</Link>
      </footer>
    </article>
  );
};

export default TeacherItem;
