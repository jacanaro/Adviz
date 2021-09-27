import React, {useState} from "react";
import Button from "./Button";
import Contacts from "./Contacts";
import AddContactForm from "./AddContactForm";
import Map from "./Map";
import {getGeocode, getLatLng} from "use-places-autocomplete";

const MainScreen = ({
                        loggedInUser,
                        logOut,
                        contacts,
                        updateContacts,
                        addContact,
                        deleteContact
                    }) => {

    const [allContactsAreShown, setAllContactsAreShown] = useState(false)
    const [displayAddContactForm, setDisplayAddContactForm] = useState(false)

    return (

        <div>
            <div className="header">
                <h1>AdViz</h1>
                <h2>Welcome {loggedInUser}</h2>
                <Button text={'log out'} onClick={logOut}/>
            </div>
                <Button text={'show my contacts'} onClick={() => {
                    setAllContactsAreShown(false)
                }}/>
                <Button text={'show all contacts'} onClick={() => {
                    setAllContactsAreShown(true)
                }}/>
                <Button text={'add contact'} onClick={() => {
                    setDisplayAddContactForm(!displayAddContactForm)
                }}/>

            {displayAddContactForm && <AddContactForm loggedInUser={loggedInUser} addContact={addContact}
                                                      setDisplayAddContactForm={setDisplayAddContactForm}/>}
            <Contacts loggedInUser={loggedInUser}
                      addContact={addContact}
                      contacts={contacts}
                      updateContacts={updateContacts}
                      deleteContact={deleteContact}
                      allContactsAreShown={allContactsAreShown}
            />

        </div>
    )
}

export default MainScreen