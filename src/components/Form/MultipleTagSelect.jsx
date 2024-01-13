import Select from "react-select";
import CardContent from "../Card/CardContent";
import "../../assets/scss/MultipleTagSelect.scss";

const options = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Antigua", label: "Antigua" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia", label: "Bosnia" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brazil", label: "Brazil" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgariav", label: "Bulgariav" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burma", label: "Burma" },
    { value: "Burundi", label: "Burundi" },
];

const MultipleTagSelect = () => {
    return (
        <CardContent
            title="React-Select"
            CardBody={
                <div className="tag_select">
                    <h5 className="pb-2">Select Countries</h5>
                    <Select
                        className="select"
                        isMulti
                        options={options}
                        isClearable={true}
                        isSearchable={true}
                        isDisabled={false}
                        isLoading={false}
                        isRtl={false}
                    />
                </div>
            }
        />
    );
};

export default MultipleTagSelect;

