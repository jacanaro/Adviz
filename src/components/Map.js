import {
    GoogleMap,
    useLoadScript,
} from "@react-google-maps/api";

import Markers from "./Markers";

const Map = ({contacts}) => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    const mapContainerStyle = {
        width: '68%',
        height: '100vh',
        float: 'right'
    }

    const center = {
        lat: 52.531677,
        lng: 13.381777
    }

    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading map";


    return (
        <>
            <GoogleMap mapContainerStyle={mapContainerStyle}
                       zoom={11}
                       center={center}>
                <Markers contacts={contacts}/>
            </GoogleMap>

        </>
    )
}
export default Map