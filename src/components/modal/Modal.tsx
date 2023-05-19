interface ILoginModalProps {
    modalIsOpen: boolean
    closeModal: () => void
    openPasswordForgettingModal: () => void
}

const Modal = ({closeModal}: ILoginModalProps): JSX.Element => (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Modal Title</h2>
        <p>Modal content goes here...</p>
      </div>
    </div>
  );
