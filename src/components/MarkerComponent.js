import {InfoWindow, Marker} from "@react-google-maps/api";
import {useState} from "react";

const MarkerComponent = ({contact, contactID, position}) => {

    const [selected, setSelected] = useState(position)


    return (
        <div>
            <Marker key={contactID} position={position} onClick={() => {
                setSelected(position)
            }}/>
            {selected ? (<InfoWindow position={position} onCloseClick={()=> {
                setSelected(null)}}>
                <div>{contact.Vorname} {contact.Name} {contact.StrHsnr} {contact.Stadt}</div>
            </InfoWindow>) : null}
        </div>
    )
}

export default MarkerComponent