const Modal = ({ label, modalId, title, modalBody, modalSize }) => {
    return (
        <>
            <button
                type="button"
                className="btn btn-secondary m-1"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
                data-bs-whatever="@mdo"
            >
                {label}
            </button>

            <div
                className="modal fade"
                id={`${modalId}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className={`modal-dialog ${modalSize}`}>
                    <div
                        className="modal-content"
                        style={{
                            backgroundColor: "var(--bg-content)",
                            border: "1px solid var(--border-color)",
                        }}
                    >
                        <div
                            className="modal-header"
                            style={{ borderColor: "var(--border-color)" }}
                        >
                            <h5
                                className="modal-title"
                                id="exampleModalLabel"
                                style={{ color: "var(--hedging-text-color)" }}
                            >
                                {title}
                            </h5>
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i
                                    className="fa-solid fa-xmark"
                                    style={{
                                        fontSize: "20px",
                                        color: "var(--hedging-text-color)",
                                    }}
                                ></i>
                            </button>
                        </div>
                        <div
                            className="modal-body"
                            style={{
                                color: "var(--hedging-text-color)",
                            }}
                        >
                            {modalBody}
                        </div>
                        <div
                            className="modal-footer"
                            style={{ borderColor: "var(--border-color)" }}
                        >
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                CONFIRM
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

