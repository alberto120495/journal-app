import React from "react";
import NotesAppBar from "./NotesAppBar";
function NoteScreen() {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happend today"
          className="notes__textarea"
          name=""
          id=""
        ></textarea>
        <div className="notes__image">
          <img
            src="https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png"
            alt="landscape"
          />
        </div>
      </div>
    </div>
  );
}

export default NoteScreen;
