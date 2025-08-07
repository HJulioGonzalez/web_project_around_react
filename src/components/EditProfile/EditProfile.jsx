import React, { useState, useContext, useRef } from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function EditProfile() {
  const {currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
    const [nameValidationState, setNameValidationState] = useState(false);
    const [jobValidationState, setJobValidationState] = useState(false);
    const [nameValidationMessage, setNameValidationMessage] = useState("(*) mandatory field");
    const [jobValidationMessage, setJobValidationMessage] = useState("(*) mandatory field");
    const nameRef = useRef();
    const jobRef = useRef();
    const disableButtonSubmitClass = !(nameValidationState && jobValidationState) ? "form__submit_inactive" : "form__submit_active"
    const handleNameChange = (e) => {
    setName(e.target.value)
  };
  const handleDescriptionChange = (e)=>{
    setDescription(e.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 

    handleUpdateUser({ name, about: description });
  };
  function handleValidationField(field){
      if (field.name === "name") {
          setNameValidationState(field.validity.valid);
          setNameValidationMessage(`❌ ${field.validationMessage}`)
      } else {
          setJobValidationState(field.validity.valid);
          setJobValidationMessage(`❌ ${field.validationMessage}`)
      }
    }
  return (
    <form className="edit-info form" noValidate onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-info__name form__input"
        placeholder="Name"
        minLength="5"
        maxLength="40"
        required
        name="name"
        ref={nameRef}
        autoComplete="on" onChange={(e)=>{
          handleNameChange(e);
          handleValidationField(nameRef.current)
        }}
      />
      <span className={`name-input-error form__input-error ${nameValidationState?'form__input-valid':'form__input-error'}`}>
        {nameValidationState?"✅ Valid name text":nameValidationMessage}
      </span>
      <input
        type="text"
        className="edit-info__job form__input"
        placeholder="About me"
        minLength="5"
        maxLength="100"
        required
        name="job"
        ref={jobRef}
        autoComplete="on" onChange={(e)=>{
          handleDescriptionChange(e);
          handleValidationField(jobRef.current);
        }}
      />
      <span className={`job-input-error form__input-error ${jobValidationState?'form__input-valid':'form__input-error'}`}>
        {jobValidationState?"✅ Valid job text":jobValidationMessage}
      </span>
      <button className={`edit-info__button edit-info__submit ${disableButtonSubmitClass}`}>
        Save
      </button>
    </form>
  );
}
