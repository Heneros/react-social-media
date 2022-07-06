import React from 'react';

function CreatePost() {
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState(null);


    return (<div>
        <h1>   Create Post</h1>
        <form>
            <input
                type="text"
                placeholder='Add Post'
                onChange={event => setContent(event.target.value)}
            />
            <input
                type="file"
                onChange={event => setImage(event.target.files[0])}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>)
}


export default CreatePost;