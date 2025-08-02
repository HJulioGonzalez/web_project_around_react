import React, { useState, useEffect } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../Avatar/EditAvatar";
import Card from "../Card/Card";
import {api} from "../../utils/api.js";
import InfoLoading from "../infoLoading/infoLoading";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [loadingState, setLoadingState] = useState(null)
  const [cards, setCard] = useState([]);
  const newCardPopup = { title: "New Place", children: <NewCard /> };
  const editProfileInfo = { title: "Edit Profile", children: <EditProfile /> };
  const editProfileImg = {
    title: "Change Profile Photo",
    children: <EditAvatar />,
  };
  const userInfo = React.useContext(CurrentUserContext);
  const {name, about, avatar, _id} = userInfo;
  useEffect(() => {
    handleLoading(true);
    api.getCardInfo().then(data=>{
      setTimeout(()=>{
        handleCloseLoading();
        setCard(data);
        console.log(data)
      },3000)
    }).catch((err) => {
      console.log(`Error: ${err} - ${err.status}`);
      return [];
    })

  }, []);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  function handleLoading(loadingState){
    setLoadingState(loadingState)
  }
  function handleCloseLoading(){
    setLoadingState(null)
  }
  async function handleCardLike(card){
    const isLiked = card.isLiked;
    await api.changeLikeStatus(card._id, isLiked).catch((err) => {
      console.log(`Error: ${err} - ${err.status}`);
      return [];
    })
  }

  function testing(element){
    console.log(element)
  }

  return (
    <main className="content">
      <div className="author">
        {loadingState && (<InfoLoading/>)}
        {!loadingState && (<>
          <img
              src={avatar}
              alt="AuthorPicture"
              className="author__picture"
              onClick={() => {
                handleOpenPopup(editProfileImg);
              }
              }
          />
          <div className="author__info">
            <div className="author__info-title">
              <p className="author__info-name">{name}</p>
              <div
                  className="author__editbutton"
                  onClick={() => handleOpenPopup(editProfileInfo)}
              ></div>
            </div>
            <p className="author__info-job">{about}</p>
            <div
                className="author__add-button author__add-button_resolution_725"
                onClick={() => handleOpenPopup(newCardPopup)}
            ></div>
          </div>
          <div
              className="author__add-button author__add-button_resolution_1180"
              onClick={() => handleOpenPopup(newCardPopup)}
          ></div>
        </>)}

      </div>
      <ul className="venues">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardLike={testing(card.isLiked)}/>
        ))}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
