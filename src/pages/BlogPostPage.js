import React from "react";
import posts from '../data/posts.json';
import { useParams } from 'react-router-dom';

function BlogPostPage() {
    let { id } = useParams();
    console.log(id);
    const currentPost = posts.find((post) => {
        return post.id === id
    })
    return (
        <>
            <h1>{currentPost.title}</h1>
            <p>{currentPost.content}</p>
            <p>Post date: {currentPost.date}, blogpost ID: {currentPost.id}</p>
        </>
    );
}

export default BlogPostPage;