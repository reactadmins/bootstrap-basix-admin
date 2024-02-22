import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly';
import { CardBody } from "react-bootstrap";
import Card from "@site/src/components/Card/Card";
import "leaflet/dist/leaflet.css";
import mIcon from "../../../../static/img/marker-icon.png";

function Leaflet({attr="", url=""}) {

  return (
    <BrowserOnly>
        {() => {
            const { MapContainer, Marker, Popup, TileLayer } = require("react-leaflet") ;
            const L =  require("leaflet");

            const MarkerIcon = L.icon({
                iconUrl: mIcon,
                iconSize: [32, 48],
                iconAnchor: [12, 12],
                popupAnchor: [0, 0],
            });

            return (
                <Card title="Voyager">
                    <CardBody>
                        <MapContainer
                            style={{ width: "100%", height: "400px" }}
                            center={[51.505, -0.09]}
                            zoom={16}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution={attr}
                                url={url}
                                // attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            />
                            <Marker position={[51.505, -0.09]} icon={MarkerIcon}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </CardBody>
                </Card>
            )
        }}
    </BrowserOnly>
  )
}

export default Leaflet;
