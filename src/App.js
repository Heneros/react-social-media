import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

const UserContext = React.createContext();

function App() {
    const [user, setUser] = React.useState('');
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please Login";
    }, [user]);

    function handleAddPost(newPost) {
        setPosts([newPost, ...posts])
    }

    if (!user) {
        return <div> <Login user={user} setUser={setUser} /> </div>
    }

    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost user={user} handleAddPost={handleAddPost} />
            <PostList user={user} posts={posts} />
        </>);
}


export default App;