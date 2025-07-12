export default function EditAvatar() {
  return (
    <form className="edit-pic form" noValidate>
      <input
        type="url"
        className="edit-pic__img-URL form__input"
        placeholder="New img URL"
        required
        name="newImgUrl"
        autoComplete="on"
      />
      <span className="name-input-error form__input-error">
        Please, fill this field
      </span>
      <button className="edit-pic__button edit-pic__submit form__submit">
        Save
      </button>
    </form>
  );
}
