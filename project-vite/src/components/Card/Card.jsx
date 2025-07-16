import Popup from "../Main/components/Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useState } from "react";
export default function Card(props) {
  const [popup, setPopup] = useState(null);
  const { name, link, isLiked } = props.card;
  const [likeStatus, setLike] = useState(false);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  function handleLike() {
    setLike(!likeStatus);
  }

  const ImgPopup = {
    title: "",
    children: (
      <ImagePopup onClose={handleClosePopup} ImgLink={link} ImgName={name} />
    ),
  };
  return (
    <li className="venue">
      <button className="venue__del-button"></button>
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
            likeStatus
              ? "venue__info-likebutton_liked"
              : "venue__info-likebutton_unliked"
          }
          onClick={handleLike}
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
