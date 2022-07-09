import React from 'react';

function PostList({ posts }) {
    return posts.map((post, i) => (
        <React.Fragment key={i}>
            Image: {post.image && (
                <img
                    style={{ height: 100, width: 200, objectFit: 'cover' }}
                    src={URL.createObjectURL(post.image)}
                    alt="Post Image"
                />
            )}
            <div>   Post Name: <p> {post.content}</p> </div>
            <div>   TextArea: <p> {post.textValue}</p> </div>
            Author Name: <h5> {post.user}</h5>
        </React.Fragment>
    ))


}


export default PostList;