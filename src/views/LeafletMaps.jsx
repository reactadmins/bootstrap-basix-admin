import "leaflet/dist/leaflet.css";
import Card from "@/components/Card/Card";
import Voyager from "@/components/LeafletMaps/Voyager";
import { CardBody, Col, Container, Row } from "react-bootstrap";
import StreetMap from "@/components/LeafletMaps/StreetMap";
import WorldImagery from "@/components/LeafletMaps/WorldImagery";
import DarkMatter from "@/components/LeafletMaps/DarkMatter";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const LeafletMaps = () => {
    const position = [51.505, -0.09];

    return (
        <Container fluid className="p-0">
            <Row className="gy-4 gx-4 mb-4">
                <Col col={6} lg={6} xl={6}>
                    <Card title="Voyager">
                        <CardBody>
                            <MapContainer
                                style={{ width: "100%", height: "400px" }}
                                center={position}
                                zoom={16}
                                scrollWheelZoom={false}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily
                                        customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </CardBody>
                    </Card>
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <Card title="Street Map">
                        <CardBody>
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
                                        A pretty CSS3 popup. <br /> Easily
                                        customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </CardBody>
                    </Card>
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <Card title="WorldImagery">
                        <CardBody>
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
                                        A pretty CSS3 popup. <br /> Easily
                                        customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </CardBody>
                    </Card>
                </Col>
                <Col col={6} lg={6} xl={6}>
                    <Card title="Dark Matter">
                        <CardBody>
                            <MapContainer
                                style={{ width: "100%", height: "400px" }}
                                center={position}
                                zoom={16}
                                scrollWheelZoom={false}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily
                                        customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LeafletMaps;

