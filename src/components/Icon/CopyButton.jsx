const CopyButton = ({ copy, setCopy, iconsName, copyId }) => {
    const handelCopy = (e) => {
        navigator.clipboard.writeText(e);
    };

    return (
        <button
            type="button"
            onClick={() => {
                handelCopy(iconsName);
                setCopy(copyId);
            }}
        >
            {copy === copyId ? (
                <i className="fa-solid fa-check"></i>
            ) : (
                <i className="fa-regular fa-copy"></i>
            )}
        </button>
    );
};

export default CopyButton;

