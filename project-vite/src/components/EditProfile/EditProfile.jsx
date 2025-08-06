import React, { useState, useContext } from 'react'; 
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function EditProfile() {
  const {currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [nameInputState, setNameInputState] = useState(true);
  const [jobInputState, setJobInputState] = useState(true)
  const [description, setDescription] = useState(currentUser.about);
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
  function handleValidationName(e){
    setNameInputState(e.target.validity.valid);
  };
  function handleValidationJob(e){
    setJobInputState(e.target.validity.valid);
  }
  return (
    <form className="edit-info form" noValidate onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-info__name form__input"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        required
        name="name"
        value={name}
        autoComplete="on" onChange={(e)=>{
          handleNameChange(e);
          handleValidationName(e);
        }}
      />
      <span className="name-input-error form__input-error">
        {!nameInputState && "Must use more than (1) character"}
      </span>
      <input
        type="text"
        className="edit-info__job form__input"
        placeholder="About me"
        minLength="2"
        maxLength="200"
        required
        name="job"
        value={description}
        autoComplete="on" onChange={(e)=>{
          handleDescriptionChange(e);
          handleValidationJob(e);
        }}
      />
      <span className="job-input-error form__input-error">
        {!jobInputState && "Must use more than (1) character"}
      </span>
      <button className={`edit-info__button edit-info__submit ${nameInputState && jobInputState? "form__submit" : "form__submit_inactive"}`}>
        Save
      </button>
    </form>
  );
}
