/**
 * Copyright (c) Wooritech, Inc.
 */

import { format } from 'date-fns';

import NotePreview from './NotePreview';
import EditButton from './EditButton';
import NoteEditor from './NoteEditor';
import useNotes from 'libs/useNotes';

const Note = ({ selectedId, isEditing }) => {
  const { data } = useNotes(selectedId);
  const { note } = data || { note: null };

  if (!note) {
    if (isEditing) {
      return (
        <NoteEditor noteId={null} initialTitle="Untitled" initialBody="" />
      );
    } else {
      return (
        <div className="note--empty-state">
          <span className="note-text--empty-state">
            Click a note on the left to view something! 🥺
          </span>
        </div>
      );
    }
  }

  let { id, title, body, updated_at } = note;
  const updatedAt = new Date(updated_at);

  if (isEditing) {
    return <NoteEditor noteId={id} initialTitle={title} initialBody={body} />;
  } else {
    return (
      <div className="note">
        <div className="note-header">
          <h1 className="note-title">{title}</h1>
          <div className="note-menu" role="menubar">
            <small className="note-updated-at" role="status">
              Last updated on {format(updatedAt, "d MMM yyyy 'at' h:mm bb")}
            </small>
            <EditButton noteId={id}>Edit</EditButton>
          </div>
        </div>
        <NotePreview title={title} body={body} />
      </div>
    );
  }
};

export default Note;
