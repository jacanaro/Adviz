import {useState, useEffect} from "react";
import MainScreen from "./components/MainScreen";
import LogInScreen from "./components/LogInScreen";

const App = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {//useEffect is called when page loads
        const getUsers = async () => {
            const usersFromServer = await fetchUsers()
            setUsers(usersFromServer)
        }
        getUsers()
    }, [])
    const fetchUsers = async () => {
        const res = await fetch('/adviz/loginData')
        const data = await res.json()
        return data
    }
    //handle login on frontend
    const [loggedIn, setLoggedIn] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(
        {
            username: '',
        }
    )

    //get and set contacts
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        const getContacts = async () => {
            const contactsFromServer = await fetchContacts()
            setContacts(contactsFromServer)
        }
        getContacts()
    }, [])
    const fetchContacts = async () => {
        const res = await fetch('/adviz/contacts')
        const data = await res.json()
        return data
    }

    const updateContacts = async (_id, vorname, nachname, StrHsnr, PLZ, Stadt, Land, isPrivate, ownerID) => {

        const newArrayWithContactToUpdate = contacts.filter(contact => contact._id == _id)
        const contactToUpdate = newArrayWithContactToUpdate[0]

        //get lat and long of addr
        var markerReq = new XMLHttpRequest();
        var url = "https://maps.googleapis.com/maps/api/geocode/json?";
        url = url + "address=" + StrHsnr + ", " + Stadt;
        url = url + "&key=AIzaSyB6r6VNSQh_pXayQ1yY3-NOp_0rKzaukZ4";

        markerReq.open("GET", url, true);

        markerReq.onerror = function () {   // Aufruf, wenn ein Fehler auftritt
            alert("Server couldn't connect to " + url + " !\n");
        };

        markerReq.onload = async function (e) {   // Aufruf,wenn die Anfrage erfolgreich war
            var data = this.response;
            var obj = JSON.parse(data);
            console.log(obj);
            if (this.status == 200) {
                if (obj.status != "ZERO_RESULTS") {
                    var lat = obj.results[0].geometry.location.lat;
                    var lng = obj.results[0].geometry.location.lng;

                    const updContact = {
                        ...contactToUpdate, Vorname: vorname, Name: nachname, lat: lat, lng: lng,
                        StrHsnr: StrHsnr, PLZ: PLZ, Stadt: Stadt, Land: Land, isPrivate: isPrivate, ownerID: ownerID
                    }
                    const res = await fetch('/adviz/contacts/id', {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(updContact)
                    })

                    const data = await res.json()
                    console.log(`updated contact: ${data}`)
                    setContacts(contacts.map((contact) => contact._id === _id ? {
                        ...contact,
                        Vorname: updContact.Vorname,
                        Name: updContact.Name,
                        StrHsnr: updContact.StrHsnr,
                        PLZ: updContact.PLZ,
                        Stadt: updContact.Stadt,
                        Land: updContact.Land,
                        lat: updContact.lat,
                        lng: updContact.lng,
                        isPrivate: updContact.isPrivate,
                        ownerID: updContact.ownerID
                    } : contact))
                } else {
                    alert("Error: Address could not be resolved!");
                }
            } else {
                alert("HTTP-status: " + obj.status);
            }
        };
        markerReq.send();
    }


    const addContact = async (vorname, nachname, StrHsnr, PLZ, Stadt, Land, isPrivate, ownerID) => {
        const newContactObject = {
            Titel: '',
            m_w_d: '',
            Vorname: vorname,
            Name: nachname,
            StrHsnr: StrHsnr,
            PLZ: PLZ,
            Stadt: Stadt,
            Land: Land,
            Email: '',
            Sonstiges: '',
            isPrivate: isPrivate,
            lat: 0,
            lng: 0,
            ownerID: ownerID
        }

        //get lat and long of addr
        var markerReq = new XMLHttpRequest();
        var url = "https://maps.googleapis.com/maps/api/geocode/json?";
        url = url + "address=" + newContactObject.StrHsnr + ", " + newContactObject.Stadt;
        url = url + "&key=AIzaSyB6r6VNSQh_pXayQ1yY3-NOp_0rKzaukZ4";

        markerReq.open("GET", url, true);

        markerReq.onerror = function () {   // Aufruf, wenn ein Fehler auftritt
            alert("Server couldn't connect to " + url + " !\n");
        };

        markerReq.onload = async function (e) {   // Aufruf,wenn die Anfrage erfolgreich war
            var data = this.response;
            var obj = JSON.parse(data);
            console.log(obj);
            if (this.status == 200) {
                if (obj.status != "ZERO_RESULTS") {
                    var lat = obj.results[0].geometry.location.lat;
                    var lng = obj.results[0].geometry.location.lng;
                    newContactObject.lat = lat;
                    newContactObject.lng = lng;
                    const res = await fetch('/adviz/contacts', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify(newContactObject)
                    })
                    const data = await res.json()
                    console.log(data)
                    const newContactObjectWithID = {
                        _id: data,
                        Titel: '',
                        m_w_d: '',
                        Vorname: vorname,
                        Name: nachname,
                        StrHsnr: StrHsnr,
                        PLZ: PLZ,
                        Stadt: Stadt,
                        Land: Land,
                        Email: '',
                        Sonstiges: '',
                        isPrivate: isPrivate,
                        lat: lat,
                        lng: lng,
                        ownerID: ownerID
                    }
                    setContacts([...contacts, newContactObjectWithID])
                } else {
                    alert("Error: Address could not be resolved!");
                }
            } else {
                alert("HTTP-status: " + obj.status);
            }
        };
        markerReq.send();
    }

    const deleteContact = async (id) => {
        const idObject = {_id: id}
        await fetch('/adviz/contacts/id', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(idObject)
        })
        setContacts(contacts.filter((contact) => contact._id !== id))
    }

    return (
        <div>
            {loggedIn && <MainScreen loggedInUser={loggedInUser}
                                     logOut={() => {
                                         setLoggedIn(false)
                                         setLoggedInUser({username: '',})
                                     }}
                                     contacts={contacts}
                                     updateContacts={updateContacts}
                                     addContact={addContact}
                                     deleteContact={deleteContact}
            />
            }
            {!loggedIn &&
            <LogInScreen usersLoginInfo={users} setLoggedIn={setLoggedIn} setLoggedInUser={setLoggedInUser}/>}

        </div>
    );
}

export default App;
