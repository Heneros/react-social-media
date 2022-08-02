import React from 'react';
import { UserContext, PostContext } from '../App';

function Post({ image, content, textValue, user, id }) {
    const currentUser = React.useContext(UserContext);
    const { dispatch } = React.useContext(PostContext)
    const isCurrentUser = currentUser === user;

    function handleDeletePost() {
        // () => dispatch({})
        dispatch({ type: "DELETE_POST", payload: { id } })
    }

    return (
        <>
            {image && (
                <img
                    style={{ height: 100, width: 200, objectFit: 'cover' }}
                    src={URL.createObjectURL(image)}
                    alt="Post Image"
                />
            )}
            <div>   Post Name: <p> {content}</p> </div>
            <div>   TextArea: <p> {textValue}</p> </div>
            Author Name: <h5 style={{ color: isCurrentUser && 'green' }}> {user}</h5>
            <>
                {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
            </>

        </>
    )


}


export default Post;