import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ firstName, lastName, closeModal }) {
  return (
    <div className="modal">
      <div onClick={closeModal} className="modal-close">
        <FontAwesomeIcon icon={faCircleXmark} size="xl" color="white" />
      </div>
      <div className="modal-content">
        <p className="modal-identity">
          {firstName} {lastName} is saved in the database
        </p>
        <FontAwesomeIcon icon={faCircleCheck} size="xl" color="white" />
      </div>
    </div>
  );
}
