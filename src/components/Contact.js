//every contact has a form with update+delete button and a description with only the values
//description is shown on default. onDoubleClick form shows instead of description
//contact-form is a component
import ContactDescription from "./ContactDescription";
import UpdateContactForm from "./UpdateContactForm";
import {useState} from "react";

const Contact = ({contact, updateContacts, deleteContact, loggedInUser}) => {
    const [descriptionIsShown, setDescriptionIsShown] = useState(true)

    return (
        <div>
            {descriptionIsShown || (loggedInUser === 'normalo' && contact.ownerID === 'admina') ?
                <ContactDescription contact={contact} setDescriptionIsShown={setDescriptionIsShown}/> :
                <UpdateContactForm contact={contact} updateContacts={updateContacts}
                                   deleteContact={deleteContact} setDescriptionIsShown={setDescriptionIsShown}/>}
        </div>
    )
}

export default Contact