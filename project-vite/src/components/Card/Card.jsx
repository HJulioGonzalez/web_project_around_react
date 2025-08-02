import Popup from "../Main/components/Popup/Popup";
import ImagePopup from "../ImagePopup/ImagePopup";
import { useState } from "react";
import {api} from "../../utils/api.js";
export default function Card(props) {
  const [popup, setPopup] = useState(null);
  const { card, onClickLike } = props;
  const { name, link, isLiked, _id } = card;

  const cardLikeButtonClassName = `venue__info-likebutton ${
        isLiked ? "venue__info-likebutton_liked" : ''
    }`
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  // async function handleLike() {
  //   console.log(isLiked)
  //   await api.changeLikeStatus(_id, isLiked).then(data=>console.log("testing await methods, it is supposed to work sync, not async")).catch((err) => {
  //     console.log(`Error: ${err} - ${err.status}`);
  //     return [];
  //   })
  // }

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
            cardLikeButtonClassName
          }
          onClick={null}
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
