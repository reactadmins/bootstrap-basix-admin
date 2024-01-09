import { GoogleMap, LoadScript } from "@react-google-maps/api";
import CardContent from "../components/Card/CardContent";

const GoogleMaps = () => {
    const mapStyles = {
        height: "100vh",
        width: "100%",
    };

    const defaultCenter = {
        lat: 43.653225,
        lng: -79.383186,
    };
    return (
        <CardContent
            title="Google Maps"
            CardBody={
                <>
                    <LoadScript>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={13}
                            center={defaultCenter}
                        ></GoogleMap>
                    </LoadScript>
                </>
            }
        />
    );
};

export default GoogleMaps;

