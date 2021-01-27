import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"

// import JoditEditor from "jodit-react"

import PageHeader from "../../components/PageHeader"
import Input from "../../components/Input"

import "./styles.css"
import "./formStyle.css"

import api from "../../services/api"

import { Editor, EditorState } from "draft-js"
import "draft-js/dist/Draft.css"

export default function NewPost() {
  const history = useHistory()

  const editor = useRef(null)

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  )

  async function handleNewPost() {
    await api
      .post("posts", {
        title,
        text,
        user_id: 1,
      })
      .then(() => {
        history.goBack()
      })
  }

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
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
              setTitle(e.target.value)
            }}
          />

          <div className="containerEditor">
            <Editor editorState={editorState} onChange={setEditorState} />
          </div>

          {/* <JoditEditor
            ref={editor}
            value={setText}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={setText} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          /> */}

          {/* <Input
            type="text"
            label="Texto:"
            name="texto"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          /> */}
          <button type="submit">Enviar</button>
        </form>
      </PageHeader>
    </div>
  )
}
