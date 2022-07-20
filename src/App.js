import { useState } from "react";
import { useReducer } from "react";
import React from 'react';
// import Login from './components/Login';
// import Header from './components/Header';
// import CreatePost from './components/CreatePost';
// import PostList from './components/PostList';
// import postReducer from './reducer';

// export const UserContext = React.createContext();
// export const PostContext = React.createContext({
//     posts: []
// });

function reducer() {

}
function App() {

    const [] = useReducer(reducer, { count: 0 });

    // const initialPostState = React.useContext(PostContext);
    // const [state, dispatch] = React.useReducer(postReducer, initialPostState);
    // const [user, setUser] = React.useState('Rustam');

    // const [posts, setPosts] = React.useState([]);

    // React.useEffect(() => {
    //     document.title = user ? `${user}'s Feed` : "Please Login";
    // }, [user]);

    // // function handleAddPost(newPost) {
    // //     setPosts([newPost, ...posts])
    // // }

    // if (!user) {
    //     return <div> <Login user={user} setUser={setUser} /> </div>
    // }

    return (
        <div>
            dsfdsfsdf
        </div>
        // <PostContext.Provider value={{ state, dispatch }}>
        //     <UserContext.Provider value={user}>
        //         <Header user={user} setUser={setUser} />
        //         <CreatePost user={user}
        //         // handleAddPost={handleAddPost} 
        //         />
        //         <PostList posts={state.posts} />
        //     </UserContext.Provider>
        // </PostContext.Provider>
    );
}


export default App;