import React from "react";
import { useAuth } from "../context/AuthContext";

export const AsideNotesDashboard = ({ notes, setIsNewNote, setNote }) => {
  const { user } = useAuth();
  return (
    <aside
      className="bg-dark py-4"
      style={{
        overflowY: "scroll",
        maxHeight: "calc(100vh - 50px)",
        width: "330px",
      }}
    >
      {notes && (
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
      )}
      {notes.length === 0 && (
        <div className="text-center text-white font-style-italic">
          <span>Você não pussuí notas</span>
        </div>
      )}
    </aside>
  );
};
