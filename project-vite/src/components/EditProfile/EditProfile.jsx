import React, { useState, useContext } from 'react'; 
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function EditProfile() {
  const {currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const handleNameChange = (e) => {
    setName(e.target.value);
    
  };
  const handleDescriptionChange = (e)=>{
    setDescription(e.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 

    handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  };
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
        autoComplete="on" onChange={handleNameChange}
      />
      <span className="name-input-error form__input-error">
        Please, fill this field
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
        autoComplete="on" onChange={handleDescriptionChange}
      />
      <span className="job-input-error form__input-error">
        Please, fill this field
      </span>
      <button className="edit-info__button edit-info__submit form__submit">
        Save
      </button>
    </form>
  );
}
