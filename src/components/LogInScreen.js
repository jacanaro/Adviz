import React, {useState} from "react";

const LogInScreen = ({usersLoginInfo, setLoggedIn, setLoggedInUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorText, setErrorText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const validateLogin = (usersLoginInfo) => {
            for (let i = 0; i < usersLoginInfo.length; i++) {
                if (username === usersLoginInfo[i].userID && password === usersLoginInfo[i].password) {
                    setLoggedIn(true)
                    setLoggedInUser(username)
                    setUsername('')
                    setPassword('')
                    return
                }
            }
            setErrorText('wrong username or password!');
            setUsername('')
            setPassword('')
        }
        validateLogin(usersLoginInfo)
    }
    return (
        <div>
            <h1>Login</h1>

            <form className={'login-form'} onSubmit={onSubmit}>
                <div className={'form-control'}>
                    <input type={'text'}
                           required={true}
                           placeholder={'Username'}
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={'form-control'}>
                    <input type={'password'}
                           placeholder={'Password'}
                           required={true}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <input type={'submit'} value={'log in'} className={'btn btn-block'}/>
            </form>
            <br/>
            <div>{errorText}</div>
        </div>
    )
}

export default LogInScreen