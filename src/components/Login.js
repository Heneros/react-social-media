import React from 'react';

function Login({ setUser, user }) {
    const [username, setUsername] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setUser(username)
    }
    function handleValues(event) {
        event.preventDefault();
        console.log('Name ' + setUsername(username));


    }


    return (<div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
                onChange={event => setUsername(event.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
        {/* <p>
            Name {username}
        </p> */}

    </div>)
}




export default Login;