import React, { useState, useEffect } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../Avatar/EditAvatar";
import Card from "../Card/Card";
import {api} from "../../utils/api.js";
import InfoLoading from "../infoLoading/infoLoading";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";

export default function Main(props) {
  const {onClosePopup, onOpenPopup, popup, cards, onLikeCard, onDeleteCard, loadingState2} = props
  const [editPicIconState, setEditPicIcon] = useState(null);
  const newCardPopup = { title: "New Place", children: <NewCard /> };
  const editProfileInfo = { title: "Edit Profile", children: <EditProfile /> };
  const editProfileImg = {
    title: "Change Profile Photo",
    children: <EditAvatar />,
  };
  const { currentUser } = React.useContext(CurrentUserContext);
  const {name, about, avatar} = currentUser;

  function handleEditIcon(){
    setEditPicIcon(true)
  }

  function handleEditIconClose(){
    setEditPicIcon(null)
  }

  return (
    <main className="content">
      <div className="author">
        {loadingState2 && (<InfoLoading/>)}
        {!loadingState2 && (<>
          <img
              src={avatar}
              alt="AuthorPicture"
              className="author__picture"
              
              onMouseEnter={handleEditIcon}
          />
          {editPicIconState && (<div className="author__picture-edit-icon" onMouseLeave={handleEditIconClose} onClick={() => onOpenPopup(editProfileImg)
              }></div>)}
          <div className="author__info">
            <div className="author__info-title">
              <p className="author__info-name">{name}</p>
              <div
                  className="author__editbutton"
                  onClick={() => onOpenPopup(editProfileInfo)
                  }
              ></div>
            </div>
            <p className="author__info-job">{about}</p>
            <div
                className="author__add-button author__add-button_resolution_725"
                onClick={() => onOpenPopup(newCardPopup)}
            ></div>
          </div>
          <div
              className="author__add-button author__add-button_resolution_1180"
              onClick={() => onOpenPopup(newCardPopup)}
          ></div>
        </>)}

      </div>
      <ul className="venues">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardLike={()=>{onLikeCard(card)}} onCardDelete={()=>{onDeleteCard(card)}} />
        ))}
      </ul>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
