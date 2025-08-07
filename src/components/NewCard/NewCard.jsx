import React, { useState, useContext, useRef } from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function NewCard() {
  const { handleNewCard } = useContext(CurrentUserContext);
  const [townNameValidationState, setTownNameValidationState] = useState(false);
  const [townLinkValidationState, setTownLinkValidationState] = useState(false);
  const [townNameValidationMessage, setTownNameValidationMessage] = useState("(*) mandatory field");
  const [townLinkValidationMessage, setTownLinkValidationMessage] = useState("(*) mandatory field");
  const townNameRef=useRef();
  const townLinkRef=useRef();
  const disableButtonSubmitClass = !(townNameValidationState && townLinkValidationState) ? "form__submit_inactive" : "form__submit_active"
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleNewCard({newTown: townNameRef.current.value, newTownLink: townLinkRef.current.value})
  }
  function handleValidationField(field){
    if (field.name === "townName") {
      setTownNameValidationState(field.validity.valid);
      setTownNameValidationMessage(`❌ ${field.validationMessage}`)
    } else {
      setTownLinkValidationState(field.validity.valid);
      setTownLinkValidationMessage(`❌ ${field.validationMessage}`)
    }
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
        name="townName"
        minLength={5}
        maxLength={80}
        placeholder="Title"
        required
        autoComplete="on"
        ref={townNameRef}
        onChange={()=>{handleValidationField(townNameRef.current)}}
      />
      <span className={`town-name-input-error ${townNameValidationState?'form__input-valid':'form__input-error'}`}>
        {townNameValidationState?"✅ Valid name text":townNameValidationMessage}
      </span>
      <input
        type="url"
        className="new-picture__img-URL form__input"
        name="townLink"
        placeholder="Image URL"
        required
        autoComplete="on"
        ref={townLinkRef}
        onChange={()=>{handleValidationField(townLinkRef.current)}}
      />
      <span className={`url-input-error ${townLinkValidationState?'form__input-valid':'form__input-error'}`}>
        {townLinkValidationState?"✅ Valid name text":townLinkValidationMessage}
      </span>
      <button className={`new-picture__button ${disableButtonSubmitClass}`}>
        Save
      </button>
    </form>
  );
}
