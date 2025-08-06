import React, { useState, useContext, useRef } from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const [linkInputState, setLinkInputState] = useState(true)
  const avatarRef = useRef();
    const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateAvatar({avatar: avatarRef.current.value});
  };
  function handleValidationLink(e){
    setLinkInputState(e.target.validity.valid);
    return
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
        onChange={(e)=>{handleValidationLink(e)}}
      />
      <span className="name-input-error form__input-error">
        {!linkInputState && "Please, enter a valid URL"}
      </span>
      <button disabled={linkInputState? false: true} className={`edit-pic__button edit-pic__submit form__submit_inactive ${linkInputState && "form__submit"}`}>
        Save
      </button>
    </form>
  );
}
