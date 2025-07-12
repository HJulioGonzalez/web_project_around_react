export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
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
