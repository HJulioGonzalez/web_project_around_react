import React, { useState, useContext } from 'react'; 
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function EditAvatar() {
  const {currentUser, handleUpdateUser, handleUpdateAvatar } = useContext(CurrentUserContext);
  const handleSubmit = (event) => {
    event.preventDefault(); 

    handleUpdateAvatar();
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
