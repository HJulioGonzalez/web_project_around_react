import Card from "../Card/Card";
export default function ImagePopup() {
  return (
    <div className="prompted-image__container">
      <img
        className="prompted-image__container-picture"
        alt="Prompted Image"
        src="#"
      />
      <p className="prompted-image__container-label"></p>
      <button className="prompted-image__container-closebuttton"></button>
    </div>
  );
}
