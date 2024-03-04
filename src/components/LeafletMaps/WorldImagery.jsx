import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const WorldImagery = () => {
    const position = [51.505, -0.09];
    return (
        <MapContainer
            style={{ width: "100%", height: "400px" }}
            center={position}
            zoom={16}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default WorldImagery;

