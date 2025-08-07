export default function DeleteConfirmation(props){
    const {onConfirmationDelete} = props

    return (
        <form className={"popup-delete__container"} onSubmit={(e)=>{
            e.preventDefault();
            onConfirmationDelete();
        }}>
            <button className={"popup-delete__container-button"}>Yes</button>
        </form>
    )
}

