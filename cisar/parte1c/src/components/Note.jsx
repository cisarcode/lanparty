// En Note.jsx o Note.js
import React from 'react';

const Note = ({ note }) => {
    return <li>{note.content}</li>;
};

export default Note;
