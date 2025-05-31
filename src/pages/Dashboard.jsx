import React, { use, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [note, setNote] = useState({
    title: "",
    content: "",
    user_id: user.id,
    id: null,
  });
  const [isNewNote, setIsNewNote] = useState(true);
  const [notes, setNotes] = useState(() => {
    window.electronNotesAPI
      .getAllNotes({ user_id: user.id })
      .then((response) => {
        if (!response.error && response.notes.length > 0) {
          setNotes(response.notes);
        } else {
          setNotes([]);
        }
      });
  });

  useEffect(() => {
    console.log("notasss: ", notes);
  }, [notes]);

  // useEffect(() => {
  //   async function fetchNotes() {
  //     if(!user?.id){
  //       console.error("User is not available");
  //       return;
  //     }

  //     try {
  //       const response  = await window.electronNotesAPI.getAllNotes({ user_id: user.id });
  //       if (!response.error) {
  //         setNotes(response.notes);
  //         console.log(notes)
  //       }
  //     } catch (error) {
  //       console.log("Error fetching notes:", error.message);
  //     }
  //   }

  //   fetchNotes();
  // }, [user]);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark w-100">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Gestão de notas</span>
          <span className="navbar-brand mb-0 h1" style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-right-from-bracket" onClick={logout}></i>
          </span>
        </div>
      </nav>
      <div className="d-flex flex-row w-100 h-100 flex-grow-1">
        <aside
          className="bg-dark py-4"
          style={{
            overflowY: "scroll",
            maxHeight: "calc(100vh - 50px)",
            width: "330px",
          }}
        >
          {notes ? (
            notes.map((note) => {
              return (
                <div
                  onClick={() => {
                    setIsNewNote(false);
                    setNote({
                      title: note.title,
                      content: note.content,
                      user_id: user.id,
                      id: note.id,
                    });
                  }}
                  key={note.id}
                  className="card c-pointer d-flex justify-content-center card-body aside-card mb-2"
                >
                  <h5 className="card-title">
                    Nota: <span className="fw-light">{note.title}</span>
                  </h5>
                  <p style={{ fontSize: "0.8em", margin: "0" }}>
                    {note.content.length > 60
                      ? note.content.substring(0, 60) + "..."
                      : note.content}
                  </p>
                </div>
              );
            })
          ) : (
            <p>nenhuma nota</p>
          )}
        </aside>

        <main className="main-dashboard">
          <div
            className="card p-4 shadow"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <h5 className="card-title">
              {isNewNote ? "Nova Nota" : `Nota: ${note.title}`}
            </h5>
            <hr />
            <div className="mb-3">
              <label htmlFor="nomeCard" className="form-label">
                Nome da Nota
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeCard"
                value={note.title}
                onChange={(e) => {
                  setNote({ ...note, title: e.target.value });
                }}
                placeholder="Digite o nome"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="conteudoCard" className="form-label">
                Conteúdo da Nota
              </label>
              <textarea
                className="form-control"
                id="conteudoCard"
                rows="6"
                style={{ resize: "none" }}
                placeholder="Digite o conteúdo"
                value={note.content}
                onChange={(e) => {
                  setNote({ ...note, content: e.target.value });
                }}
              ></textarea>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <button className="btn btn-success">Salvar</button>
              <button className="btn btn-danger">Excluir Nota</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
