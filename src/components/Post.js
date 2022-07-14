import React from 'react';
import { UserContext } from '../App';

function Post({ image, content, textValue, user }) {

    return (
        <UserContext.Consumer>
            {currentUser => (
                <>
                    Image: {
                        image && (
                            <img
                                style={{ height: 100, width: 200, objectFit: 'cover' }}
                                src={URL.createObjectURL(image)}
                                alt="Post Image"
                            />
                        )
                    }
                    <div>   Post Name: <p> {content}</p> </div>
                    <div>   TextArea: <p> {textValue}</p> </div>
                    Author Name: <h5 style={{ color: currentUser === user && 'green' }}> {user}</h5>
                </>
            )}
        </UserContext.Consumer>
    )
}


export default Post;