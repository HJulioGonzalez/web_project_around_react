import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
function InfoLoading(){
    return (
        <div className={"loading-state"}>
            <FontAwesomeIcon icon={faSpinner} spin size="5x" />
        </div>
    )
}

export default InfoLoading