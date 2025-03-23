import { useEffect, useState } from 'react';
import AuthLayout from "../Layouts/AuthLayout";
import NotepadPopup from '../Components/NotepadPopup'; // Assuming it's the same popup component
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you have bootstrap imported

export default function Notepad({ routes, notes, user }) {
    const [noteList, setNoteList] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (notes !== undefined && notes !== null && notes.length > 0) {
            setNoteList(notes);
        }
    }, []);

    // Open the popup
    const openPopup = () => {
        setShowPopup(true);
    };

    // Close the popup
    const closePopup = () => {
        setShowPopup(false);
    };

    // Handle adding a new note
    const handleAddNote = (newNote) => {
        setNoteList([...noteList, newNote]);
    };

    return (
        <AuthLayout routes={routes}>
            <h1 className='fs-4 fw-bold'>Your Notepad</h1>
            <div className="mt-4">
            <button className="btn btn-primary position-fixed bottom-0 end-0 m-3" onClick={openPopup}>Add Note</button>

                {/* Notepad Popup Modal */}
                <NotepadPopup
                    show={showPopup}
                    handleClose={closePopup}
                    handleAddNote={handleAddNote}
                />

                <div className="notes-container">
                    {noteList.map(note => (
                        <div key={note.id} className="note-item">
                            <h5>{note.title}</h5>
                            <p>{note.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AuthLayout>
    );
}
