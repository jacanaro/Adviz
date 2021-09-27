import React, {useState} from "react";
import Button from "./Button";

const UpdateContactForm = ({contact, updateContacts, deleteContact, setDescriptionIsShown}) => {

    const [vorname, setVorname] = useState(contact.Vorname)
    const [nachname, setName] = useState(contact.Name)
    const [StrHsnr, setStrHsnr] = useState(contact.StrHsnr)
    const [PLZ, setPLZ] = useState(contact.PLZ)
    const [Stadt, setStadt] = useState(contact.Stadt)
    const [Land, setLand] = useState(contact.Land)
    const [isPrivate, setIsPrivate] = useState(contact.isPrivate)
    const [ownerID, setOwnerID] = useState(contact.ownerID)
    const [errorText, setErrorText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (vorname === '' || nachname === '' || StrHsnr === '' || PLZ === '' || Stadt === '') {
            setErrorText('Vorname, Nachname, Straße und Stadt müssen ausgefüllt werden!')
            return
        }

        updateContacts(contact._id, vorname, nachname, StrHsnr, PLZ, Stadt, Land, isPrivate, ownerID)
        setDescriptionIsShown(true)
    }

    const onClick = () => {
        deleteContact(contact._id)
        setDescriptionIsShown(true)
    }


    return (

        <div>
            <form className={'contact-form'} onSubmit={onSubmit}>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='Vorname'
                           value={vorname}
                           required={true}
                           onChange={(e) => setVorname(e.target.value)}
                    />
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='Nachname'
                           value={nachname}
                           required={true}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='Straße und Hausnummer'
                           value={StrHsnr}
                           required={true}
                           onChange={(e) => setStrHsnr(e.target.value)}
                    />
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='PLZ'
                           required={true}
                           value={PLZ}
                           onChange={(e) => setPLZ(e.target.value)}
                    />
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           required={true}
                           placeholder='Stadt'
                           value={Stadt}
                           onChange={(e) => setStadt(e.target.value)}
                    />
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='Land'
                           value={Land}
                           onChange={(e) => setLand(e.target.value)}
                    />
                </div>
                <div className={'form-control form-control-check'}>
                    <label>private</label>
                    <input type={'checkbox'} value={isPrivate} checked={isPrivate}
                           onChange={(e) => setIsPrivate(e.currentTarget.checked)}/>
                </div>
                <div className={'form-control'}>
                    <select value={ownerID}
                            onChange={(e) => setOwnerID(e.target.value)}>
                        <option value="admina">admina</option>
                        <option value="normalo">normalo</option>
                    </select>
                </div>

                <input type={'submit'} value={'update'} className={'btn btn-block'}/>
            </form>
            <Button text={'delete'} className={'btn btn-block'} onClick={onClick}/>
            <br/>
        </div>
    )
}

export default UpdateContactForm