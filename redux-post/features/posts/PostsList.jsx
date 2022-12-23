import {useSelector} from "react-redux";
import React from 'react';
import {selectAllPosts} from "./postsSlice.js";
import PostAuthor from "./PostAuthor.jsx";
import TimeAgo from "./TimeAgo.jsx";
import ReactionButton from "./ReactionButton.jsx";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post=>(
        <article key={post.id} style={{border:'1px solid black'}}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>
            <ReactionButton post={post}/>
        </article>
    ))
    return (
        <section>
            <h2>posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;