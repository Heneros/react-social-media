import React from 'react';

function Login({ setUser, user }) {
    const [username, setUsername] = React.useState('');
    const inputRef = React.useRef();

    function handleSubmit(event) {
        event.preventDefault();
        setUser(username)
    }

    function focus() {
        inputRef.current.focus();
    }


    return (<div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                onChange={event => setUsername(event.target.value)}
            />
            <button
                onClick={focus}
                type='submit'>Submit</button>
        </form>
    </div>)
}




export default Login;