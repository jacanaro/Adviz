const ContactDescription = ({contact, setDescriptionIsShown}) => {
    return(
        <div onDoubleClick={()=> setDescriptionIsShown(false)}>
            <h3>{contact.Name} {contact.Vorname}</h3>
            <p>{contact.StrHsnr}</p>
            <p>{contact.PLZ}</p>
            <p>{contact.Stadt}</p>
            <p>{contact.Land}</p>
            <p>{contact.isPrivate ? 'Privater Kontakt' : 'Öffentlicher Kontakt'}</p>
            <p>Owner: {contact.ownerID}</p>
            <br/>
        </div>
    )
}

export default ContactDescription