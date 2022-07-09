import React from 'react';

function CreatePost({ user, setPosts, posts }) {
    const [content, setContent] = React.useState('');
    const [textValue, setTextArea] = React.useState('');
    const [image, setImage] = React.useState(null);


    function handleSubmit(event) {
        event.preventDefault();
        const post = { content, image, textValue, user };
        const newPosts = [post, ...posts];
        setPosts(newPosts);
    }


    return (<div>
        <h1>   Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add Post'
                onChange={event => setContent(event.target.value)}
            />
            <textarea onChange={event => setTextArea(event.target.value)} />
            <input
                type="file"
                onChange={event => setImage(event.target.files[0])}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>)
}


export default CreatePost;