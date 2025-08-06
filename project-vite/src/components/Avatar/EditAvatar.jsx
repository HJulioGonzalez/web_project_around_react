import React, { useState, useContext, useRef } from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function EditAvatar() {
  const { handleUpdateAvatar, formValidation } = useContext(CurrentUserContext);
  const [fieldValidationState, setFieldValidationState] = useState(false);
  const [validationMessage, setValidationMessage] = useState("(*) mandatory field");
  const avatarRef = useRef();
  const disableButtonSubmitClass = !fieldValidationState ? "form__submit_inactive" : "form__submit_active"
    const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateAvatar({avatar: avatarRef.current.value});
  };
  function handleValidationField(e){
    setFieldValidationState(e.target.validity.valid);
    setValidationMessage(`❌ ${e.target.validationMessage}`)
  }
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
        onChange={(e)=>{handleValidationField(e)}}
      />
      <span className={`name-input-error ${fieldValidationState?'form__input-valid':'form__input-error'}`}>
        {fieldValidationState?"✅ Valid URL":validationMessage}
      </span>
      <button className={`edit-pic__button edit-pic__submit ${disableButtonSubmitClass}`} disabled={!fieldValidationState}>
        Save
      </button>
    </form>
  );
}
