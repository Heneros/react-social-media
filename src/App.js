import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

function App() {
    const [user, setUser] = React.useState('');
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please Login";
    }, [user]);

    if (!user) {
        return <div> <Login user={user} setUser={setUser} /> </div>
    }

    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost user={user} setPosts={setPosts} posts={posts} />
            {posts.map((post, i) => (
                <React.Fragment key={i}>
                    Image: {post.image && (
                        <img
                            style={{ height: 100, width: 200, objectFit: 'cover' }}
                            src={URL.createObjectURL(post.image)}
                            alt="Post Image"
                        />
                    )}
                    <span>   Post Name: <p> {post.content}</p> </span>
                    <span>   TextArea: <p> {post.textValue}</p> </span>


                    Author Name: <h5> {user}</h5>
                </React.Fragment>
            ))}
        </>);
}


export default App;