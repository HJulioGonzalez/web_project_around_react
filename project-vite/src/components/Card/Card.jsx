import Popup from "../Main/components/Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useState } from "react";
export default function Card(props) {
  const [popup, setPopup] = useState(null);
  const ImgPopup = { title: "", children: <ImagePopup /> };
  const { name, link, isLiked } = props.card;
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  function testing() {
    console.log("trying to popup image");
  }
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
        <button className="venue__info-likebutton" />
      </div>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </li>
  );
}
