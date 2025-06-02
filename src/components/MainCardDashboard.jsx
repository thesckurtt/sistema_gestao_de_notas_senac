import React from "react";
import { BTNDashboard } from "./BTNDashboard";

export const MainCardDashboard = ({
  isNewNote,
  note,
  setNote,
  setNotes,
  handleNewNote,
  user,
  notes,
}) => {
  const createNote = () => {
    if (isNewNote) {
      window.electronNotesAPI
        .createNote({
          user_id: user.id,
          title: note.title,
          content: note.content,
        })
        .then((response) => {
          if (!response.error) {
            setNotes((prev) => [response.note, ...prev]);
            handleNewNote();
          } else {
            console.error("Error creating note:", response.error);
          }
        });
    }
  };
  const updateNote = () => {
    if (!isNewNote && note.id) {
      window.electronNotesAPI
        .updateNote({ user_id: user.id, data: note })
        .then((response) => {
          if (!response.error) {
            setNotes((prevNotes) =>
              prevNotes.map((n) => (n.id === note.id ? response.note : n))
            );
          } else {
            console.error("Error updating note:", response.error);
          }
        });
    }
    // alert("Função de atualização de nota ainda não implementada.");
  };
  return (
    <div className="w-100 flex-grow-1 v-100 d-flex justify-content-center align-items-center">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h5 className="card-title">
          {isNewNote ? (
            "Nova Nota"
          ) : (
            <>
              Nota: <span className="fw-light">{note.title}</span>
            </>
          )}
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
          <BTNDashboard
            customClass={"btn-success"}
            label={"Salvar"}
            onClick={isNewNote ? createNote : updateNote}
          />
          <BTNDashboard customClass={"btn-danger"} label={"Excluir Nota"} />
        </div>
      </div>
    </div>
  );
};
