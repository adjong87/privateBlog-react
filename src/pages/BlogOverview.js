import React from 'react';
import posts from "../data/posts.json"
import {Link} from "react-router-dom";

function BlogOverview() {


    return (
        <>
            <h1>{posts.length} blogs tot nog toe</h1>
            <ul className="blogPostTitleList">
                {posts.map((blogpost) => {
                    return <li key={blogpost.id}>
                        <Link exact to={`blogposts/${blogpost.id}`}>{blogpost.title}</Link>
                    </li>
                })}
            </ul>
        </>
    );
}

export default BlogOverview;