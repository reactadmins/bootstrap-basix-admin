import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

const libraries = ["places"];

const mapContainerStyle = {
    height: "100vh",
    width: "100%",
};

const center = {
    lat: 7.2905715, // default latitude
    lng: 80.6337262, // default longitude
};

const API_KEY = "AIzaSyCf6HxXciaOnzKGDmqT8VXtXvu_Coh-NTU";

const GoogleMaps = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <Card title="Google Maps">
            <CardBody>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
                    <Marker position={center} />
                </GoogleMap>
            </CardBody>
        </Card>
    );
};

export default GoogleMaps;

