import React, { useState, useContext, useRef } from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function NewCard() {
  const { handleNewCard } = useContext(CurrentUserContext);
  const townName=useRef();
  const townLink=useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleNewCard({newTown: townName.current.value, newTownLink: townLink.current.value})
  }
  return (
    <form
      className="new-picture form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="new-picture__town-name form__input"
        name="name"
        minLength={2}
        maxLength={30}
        placeholder="Title"
        required
        autoComplete="on"
        ref={townName}
      />
      <span className="town-name-input-error form__input-error">
        Please, fill this field
      </span>
      <input
        type="url"
        className="new-picture__img-URL form__input"
        name="link"
        placeholder="Image URL"
        required
        autoComplete="on"
        ref={townLink}
      />
      <span className="url-input-error form__input-error">
        Please, fill this field
      </span>
      <button className="new-picture__button form__submit">
        Save
      </button>
    </form>
  );
}
