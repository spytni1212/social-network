import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsComponent = props.posts.map(post => <Post message = {post.message} likeCount = {post.likeCount} key = {post.id} id = {post.id} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <button onClick = { onAddPost }>Add post</button>
      </div>
      <div className={s.posts}>
        { postsComponent }
      </div>
    </div>
  );
};

export default MyPosts;
