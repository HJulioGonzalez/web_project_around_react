export default function EditProfile() {
  return (
    <form className="edit-info form" noValidate>
      <input
        type="text"
        className="edit-info__name form__input"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        required
        name="name"
        autoComplete="on"
      />
      <span className="name-input-error form__input-error">
        Please, fill this field
      </span>
      <input
        type="text"
        className="edit-info__job form__input"
        placeholder="About me"
        minLength="2"
        maxLength="200"
        required
        name="job"
        autoComplete="on"
      />
      <span className="job-input-error form__input-error">
        Please, fill this field
      </span>
      <button className="edit-info__button edit-info__submit form__submit">
        Save
      </button>
    </form>
  );
}
