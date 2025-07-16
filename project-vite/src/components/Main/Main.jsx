import profilePhoto from "../../../images/FOTO_ID.jpg";
import { useState } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../Avatar/EditAvatar";
import Card from "../Card/Card";
const cards = [
  {
    isLiked: false,
    _id: "684f7556a533c2001afccded",
    name: "Gold Coast",
    link: "https://viajes.nationalgeographic.com.es/medio/2015/03/23/mg_2819a_1000x871.jpg",
    owner: "e37befd9bf84a5aa6543d941",
    createdAt: "2025-06-16T01:37:26.883Z",
  },
  {
    isLiked: false,
    _id: "684d2eefa533c2001afcab18",
    name: "Opera Sydney",
    link: "https://cdn.britannica.com/85/95085-050-C749819D/Sydney-Opera-House-Bennelong-Point-Port-Jackson.jpg",
    owner: "e37befd9bf84a5aa6543d941",
    createdAt: "2025-06-14T08:12:31.787Z",
  },
  {
    isLiked: false,
    _id: "684d20c0a533c2001afca777",
    name: "South Australia",
    link: "https://ausweek.mymedia.delivery/wp-content/uploads/2020/08/155664.jpg",
    owner: "e37befd9bf84a5aa6543d941",
    createdAt: "2025-06-14T07:12:00.089Z",
  },
  {
    isLiked: false,
    _id: "6848c02ea533c2001afc53af",
    name: "Ayers Rock",
    link: "https://live-production.wcms.abc-cdn.net.au/225a1130c1aa2739bf969f0e17948513?impolicy=wcms_crop_resize&cropH=1688&cropW=3000&xPos=0&yPos=0&width=862&height=485",
    owner: "e37befd9bf84a5aa6543d941",
    createdAt: "2025-06-10T23:30:54.089Z",
  },
  {
    isLiked: false,
    _id: "6848c01fa533c2001afc53ab",
    name: "Melbourne",
    link: "https://image-tc.galaxy.tf/wijpeg-cvuab0pgtuyszmx6ytsrb8cpx/melbourne-train-station-1_standard.jpg?crop=106%2C0%2C1708%2C1281",
    owner: "e37befd9bf84a5aa6543d941",
    createdAt: "2025-06-10T23:30:39.095Z",
  },
  {
    isLiked: false,
    _id: "6848bbe1a533c2001afc5231",
    name: "Kangaroo Island",
    link: "https://expatstraveltogether.com/wp-content/uploads/2023/09/stokes-bay-kangaroo-island-credit-south-australian-tourism-commission-1290x540.jpg",
    owner: "e37befd9bf84a5aa6543d941",
    createdAt: "2025-06-10T23:12:33.387Z",
  },
];
export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New Place", children: <NewCard /> };
  const editProfileInfo = { title: "Edit Profile", children: <EditProfile /> };
  const editProfileImg = {
    title: "Change Profile Photo",
    children: <EditAvatar />,
  };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <main className="content">
      <div className="author">
        <img
          src={profilePhoto}
          alt="AuthorPicture"
          className="author__picture"
          onClick={() => handleOpenPopup(editProfileImg)}
        />
        <div className="author__info">
          <div className="author__info-title">
            <p className="author__info-name">Habib Julio</p>
            <div
              className="author__editbutton"
              onClick={() => handleOpenPopup(editProfileInfo)}
            ></div>
          </div>
          <p className="author__info-job">Mechanical Engineer</p>
          <div
            className="author__add-button author__add-button_resolution_725"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></div>
        </div>
        <div
          className="author__add-button author__add-button_resolution_1180"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></div>
      </div>
      <ul className="venues">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
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
