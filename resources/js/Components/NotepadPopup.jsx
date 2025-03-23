import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is available

export default function NotepadPopup({ show, handleClose, handleAddNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            'title': title,
            'content': content
        };

        let response = await axios.post('/notepad', newNote);

        handleAddNote(response.data.note);
        setTitle('');
        setContent('');
        handleClose();
    };

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add a New Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="noteTitle" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="noteTitle"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="noteContent" className="form-label">Content</label>
                                <textarea
                                    className="form-control"
                                    id="noteContent"
                                    rows="3"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save Note</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
