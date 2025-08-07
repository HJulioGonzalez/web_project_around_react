import Popup from "../Main/components/Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useState } from "react";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";


export default function Card(props) {
  const [popup, setPopup] = useState(null);
  const { card, onCardLike, onCardDelete } = props;
  const { name, link, isLiked } = card;

  const cardLikeButtonClassName = `venue__info-likebutton ${
        isLiked ? "venue__info-likebutton_liked" : ''
    }`
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  function handleLikeClick(){
    onCardLike();
  }

  const DeleteConfirmationPopup = {
    title:"are you sure?",
    children:<DeleteConfirmation onConfirmationDelete={onCardDelete}/>,
  }
  const ImgPopup = {
    title: "",
    children: (
      <ImagePopup onClose={handleClosePopup} ImgLink={link} ImgName={name} />
    ),
  };
  return (
    <li className="venue">
      <button className="venue__del-button" onClick={() => handleOpenPopup(DeleteConfirmationPopup)}></button>
      <img
        className="venue__picture"
        src={link}
        alt=""
        onClick={() => handleOpenPopup(ImgPopup)}
      />
      <div className="venue__info">
        <p className="venue__info-name">{name}</p>
        <button
          className={
            cardLikeButtonClassName
          }
          onClick={handleLikeClick}
        />
      </div>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </li>
  );
}
