import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
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
        <aside>
          <div className="card card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            {/* <div className="card-body">Card 1</div> */}
          </div>
        </aside>

        <main className="main-dashboard">
          <div
            className="card p-4 shadow"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <h5 className="card-title mb-3">Título do Card</h5>
            <div className="mb-3">
              <label htmlFor="nomeCard" className="form-label">
                Nome do Card
              </label>
              <input
                type="text"
                className="form-control"
                id="nomeCard"
                placeholder="Digite o nome"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="conteudoCard" className="form-label">
                Conteúdo do Card
              </label>
              <textarea
                className="form-control"
                id="conteudoCard"
                rows="4"
                placeholder="Digite o conteúdo"
              ></textarea>
            </div>
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
