import React, { use, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { AsideNotesDashboard } from "../components/AsideNotesDashboard";
import { MainCardDashboard } from "../components/MainCardDashboard";
import { NavbarDashboard } from "../components/NavbarDashboard";
import { ContainerFlexDashboard } from "../components/ContainerFlexDashboard";
import { MainDashboard } from "../components/MainDashboard";

const Dashboard = () => {
  const { user } = useAuth();
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

  const handleNewNote = () => {
    setIsNewNote(true);
    setNote({
      title: "",
      content: "",
      user_id: user.id,
      id: null,
    });
  };

  useEffect(() => {
    console.log("notasss: ", notes);
    
  }, [notes]);

  return (
    <>
      <NavbarDashboard />
      <ContainerFlexDashboard>
        <AsideNotesDashboard
          notes={notes}
          setIsNewNote={setIsNewNote}
          setNote={setNote}
        />
        <MainDashboard>
          <div className="p-3 d-flex w-100 justify-content-start align-items-start">
            <nav className="w-100">
              <button className="btn btn-dark" onClick={handleNewNote}>
                Nova Nota <i class="fa-solid fa-circle-plus"></i>
              </button>
              <hr />
            </nav>
          </div>
          <MainCardDashboard
            setNotes={setNotes}
            handleNewNote={handleNewNote}
            note={note}
            setNote={setNote}
            isNewNote={isNewNote}
            user={user}
          />
        </MainDashboard>
      </ContainerFlexDashboard>
    </>
  );
};

export default Dashboard;
