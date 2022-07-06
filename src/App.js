import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

function App() {
    const [user, setUser] = React.useState('');

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please Login";
    }, [user]);

    if (!user) {
        return <div> <Login user={user} setUser={setUser} /> </div>
    }

    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost />
        </>)
}


export default App;