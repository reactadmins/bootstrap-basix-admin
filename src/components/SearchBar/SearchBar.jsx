import searchBarStyle from "../../assets/scss/SearchBar.module.scss";

const SearchBar = ({ isOpenSearch, setIsOpenSearch }) => {
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            setIsOpenSearch(!isOpenSearch);
        }
    };
    return (
        <div className={searchBarStyle.search_wrapper}>
            <div
                className={`${searchBarStyle.search_container} d-flex justify-content-between align-item-center py-2`}
            >
                <input placeholder="Search ..." className="border-0" />
                <button
                    onClick={() => setIsOpenSearch(!isOpenSearch)}
                    className="border-0"
                    id="#SearchClose"
                >
                    <i className="fa fa-close"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;

