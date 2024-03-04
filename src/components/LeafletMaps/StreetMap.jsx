import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const StreetMap = () => {
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
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default StreetMap;

