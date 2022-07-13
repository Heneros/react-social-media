import React from 'react';

function Post({ image, content, textValue, user, currentUser }) {
    const isCurrentUser = currentUser === user;
    return (
        <>
            Image: {image && (
                <img
                    style={{ height: 100, width: 200, objectFit: 'cover' }}
                    src={URL.createObjectURL(image)}
                    alt="Post Image"
                />
            )}
            <div>   Post Name: <p> {content}</p> </div>
            <div>   TextArea: <p> {textValue}</p> </div>
            Author Name: <h5 style={{ color: isCurrentUser && 'green' }}> {user}</h5>
        </>
    )
}


export default Post;