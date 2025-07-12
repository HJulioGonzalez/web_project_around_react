export default function NewCard() {
  return (
    <form
      className="new-picture form"
      name="card-form"
      id="new-card-form"
      noValidate
    >
      <input
        type="text"
        className="new-picture__town-name form__input"
        name="name"
        minLength={2}
        maxLength={30}
        placeholder="Title"
        required
        autoComplete="on"
      />
      <span className="town-name-input-error form__input-error">
        Please, fill this field
      </span>
      <input
        type="url"
        className="new-picture__img-URL form__input"
        name="link"
        placeholder="Image URL"
        required
        autoComplete="on"
      />
      <span className="url-input-error form__input-error">
        Please, fill this field
      </span>
      <button className="new-picture__button form__submit">Save</button>
    </form>
  );
}
