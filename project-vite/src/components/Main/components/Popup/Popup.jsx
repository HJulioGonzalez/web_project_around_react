import { useEffect } from "react";
export default function Popup(props) {
  const { onClose, title, children } = props;
  function outsideClosing(e) {
    e.currentTarget === e.target && onClose();
  }
  useEffect(() => {
    const escClosing = (event) => {
      event.key === "Escape" && onClose();
    };
    window.addEventListener("keydown", escClosing);
    return () => {
      window.removeEventListener("keydown", escClosing);
    };
  }, []);
  return (
    <div className="popup" onClick={outsideClosing}>
      <div className={`${title ? "popup__container" : "prompted-image"}`}>
        {title && (
          <button
            aria-label="Close modal"
            className="popup__closebutton"
            type="button"
            onClick={onClose}
          />
        )}
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
