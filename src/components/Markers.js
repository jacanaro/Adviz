import MarkerComponent from "./MarkerComponent";

const Markers = ({contacts}) => {
    let markers
    markers=contacts.map((contact) => (<MarkerComponent key={contact._id} contact={contact} contactID={contact._id} position={{lat: contact.lat, lng: contact.lng}}/>));


    return(
        <>{markers}</>
    )
}

export default Markers
