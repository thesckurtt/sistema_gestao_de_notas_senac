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
        <aside className="bg-dark py-4" style={{ overflowY: "scroll", maxHeight: "calc(100vh - 50px)", width: "330px" }}>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="card d-flex justify-content-center card-body aside-card mb-2">
            <h5 className="card-title">Nota: <span className="fw-light">Lorem</span></h5>
            <p style={{fontSize: '0.8em', margin: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </aside>

        <main className="main-dashboard">
          <div
            className="card p-4 shadow"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <h5 className="card-title">Título do Card</h5>
            <hr />
            <div className="mb-3">
              <label htmlFor="nomeCard" className="form-label">
                Nome da Nota
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
                Conteúdo da Nota
              </label>
              <textarea
                className="form-control"
                id="conteudoCard"
                rows="6"
                style={{ resize: "none" }}
                placeholder="Digite o conteúdo"
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
