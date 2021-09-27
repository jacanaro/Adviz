import {useEffect, useState} from "react";
import Button from "./Button";

const AddContactForm = ({loggedInUser, addContact, setDisplayAddContactForm}) => {

    const [vorname, setVorname] = useState('')
    const [nachname, setName] = useState('')
    const [StrHsnr, setStrHsnr] = useState('')
    const [PLZ, setPLZ] = useState('')
    const [Stadt, setStadt] = useState('')
    const [Land, setLand] = useState('')
    const [isPrivate, setIsPrivate] = useState(true)
    const [ownerID, setOwnerID] = useState('normalo')

    const onSubmit = (e) => {
        e.preventDefault()
        addContact(vorname, nachname, StrHsnr, PLZ, Stadt, Land, isPrivate, ownerID)
        setVorname('')
        setName('')
        setStrHsnr('')
        setStadt('')
        setLand('')
        setIsPrivate(true)
        setOwnerID('normalo')
        setDisplayAddContactForm(false)
    }

    return (

        <div>
            <form className={'contact-form'} onSubmit={onSubmit}>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='Vorname'
                           required={true}
                           value={vorname}
                           onChange={(e) => setVorname(e.target.value)}
                    />
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           required={true}
                           placeholder='Nachname'
                           value={nachname}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           required={true}
                           placeholder='Straße und Hausnummer'
                           value={StrHsnr}
                           onChange={(e) => setStrHsnr(e.target.value)}
                    />
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           required={true}
                           placeholder='PLZ'
                           value={PLZ}
                           onChange={(e) => setPLZ(e.target.value)}
                    />
                </div>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='Stadt'
                           required={true}
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
                {loggedInUser==='admina' && <div className={'form-control'}>
                    <select value={ownerID}
                            onChange={(e) => setOwnerID(e.target.value)}>
                        <option value="admina">admina</option>
                        <option value="normalo">normalo</option>
                    </select>
                </div>}

                <input type={'submit'} value={'add'} className={'btn btn-block'}/>
                <br/>
            </form>
        </div>
    )
}

export default AddContactForm