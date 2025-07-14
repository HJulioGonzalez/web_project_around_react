import Card from "../Card/Card";
export default function ImagePopup(props) {
  const { ImgLink, ImgName, onClose } = props;
  function outsideClosing(e) {
    console.log(e.currentTarget);
  }
  return (
    <div className="promted-image">
      <div className="prompted-image__container">
        <img
          className="prompted-image__container-picture"
          alt="Prompted Image"
          src={ImgLink}
        />
        <p className="prompted-image__container-label">{ImgName}</p>
        <button
          className="prompted-image__container-closebuttton"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
