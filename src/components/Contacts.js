import Contact from "./Contact";
import Map from "./Map";
import React from "react";

const Contacts = ({loggedInUser, contacts, allContactsAreShown, updateContacts, deleteContact}) => {

        let contactList;
        let contactListForMap;

        if (allContactsAreShown) {
            if (loggedInUser === 'admina') {
                contactListForMap=contacts;
                contactList=contacts.map((contact) => (
                    <Contact contact={contact}
                             updateContacts={updateContacts}
                             deleteContact={deleteContact}
                             loggedInUser={loggedInUser}
                    />
                ));
            } else {
                let showAllContactsForNormalo=contacts.filter((contact)=>contact.ownerID === 'normalo' || contact.isPrivate === false)
                contactListForMap=showAllContactsForNormalo;
                contactList=showAllContactsForNormalo.map((contact) => (
                    <Contact key={contact._id}
                             contact={contact}
                             updateContacts={updateContacts}
                             deleteContact={deleteContact}
                             loggedInUser={loggedInUser}
                    />
                ));
            }
        }else{
            let showContactsOfUser=contacts.filter((contact)=>contact.ownerID === loggedInUser)
            contactListForMap=showContactsOfUser
            contactList=showContactsOfUser.map((contact) => (
                <Contact key={contact._id}
                         contact={contact}
                         updateContacts={updateContacts}
                         deleteContact={deleteContact}
                         loggedInUser={loggedInUser}
                />
            ));
        }

    return(
        <div>
            <div style={{float: 'left', width: '20%'}}>{contactList}</div><Map contacts={contactListForMap}/>
        </div>
    )
}

export default Contacts