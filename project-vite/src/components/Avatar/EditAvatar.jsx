import React, { useState, useContext, useRef } from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const avatarRef = useRef();
    const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateAvatar({avatar: avatarRef.current.value});
  };
  return (
    <form className="edit-pic form" noValidate onSubmit={handleSubmit}>
      <input
        type="url"
        className="edit-pic__img-URL form__input"
        placeholder="New img URL"
        required
        name="newImgUrl"
        autoComplete="on"
        ref={avatarRef}
      />
      <span className="name-input-error form__input-error">
        Please, fill this field
      </span>
      <button className="edit-pic__button edit-pic__submit form__submit">
        Save
      </button>
    </form>
  );
}
