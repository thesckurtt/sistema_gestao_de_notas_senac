import React from "react";

export const MainCardDashboard = ({ isNewNote, note, setNote }) => {
  return (
    <div className="w-100 flex-grow-1 v-100 d-flex justify-content-center align-items-center">
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h5 className="card-title">
          {isNewNote ? "Nova Nota" : <>Nota: <span className="fw-light">{note.title}</span></>}
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
    </div>
  );
};
