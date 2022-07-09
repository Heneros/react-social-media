import React from 'react';

function CreatePost({ user, setPosts, posts }) {
    const [content, setContent] = React.useState('');
    const [textValue, setTextArea] = React.useState('');
    const [image, setImage] = React.useState(null);
    const imageInputRef = React.useRef();


    function handleSubmit(event) {
        event.preventDefault();
        const post = { content, image, textValue, user };
        const newPosts = [post, ...posts];
        setPosts(newPosts);
        setContent("");
        setTextArea("");
        imageInputRef.current.value = '';
    }


    return (<div>
        <h1>   Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add Post'
                onChange={event => setContent(event.target.value)}
                value={content}
            />
            <textarea
                onChange={event => setTextArea(event.target.value)}
                value={textValue}
            />
            <input
                type="file"
                onChange={event => setImage(event.target.files[0])}
                ref={imageInputRef}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>)
}


export default CreatePost;