import React, { useState, useEffect } from "react";
import "./feed.css";
import StoryReel from "../Story/StoryReel";
import MessageSender from "../Messageserder/MessageSender";
import Posts from "../Posts/Posts";
import db from "../../firebase";
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />

      {/* Posts */}

      {posts.map((post) => (
        <Posts
          key={post.data && post.data.id}
          profilePic={post.data && post.data.profilePic}
          message={post.data && post.data.message}
          timestamp={post.data.timestamp && post.data.timestamp.seconds}
          username={post.data && post.data.username}
          image={post.data && post.data.image}
        />
      ))}

      {/* <Posts
        profilePic="https://avatars0.githubusercontent.com/u/24625310?s=460&u=a7b9ed3c11c7c7a56502fbb7b9d0498a2d2c17cb&v=4"
        message="This is a testing message just to know wheather its working or not"
        timestamp="Nothing"
        username="vsskamal"
        image="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      />
      <Posts
        profilePic="https://avatars0.githubusercontent.com/u/24625310?s=460&u=a7b9ed3c11c7c7a56502fbb7b9d0498a2d2c17cb&v=4"
        message="This is a testing message just to know wheather its working or not"
        timestamp="Nothing"
        username="vsskamal"
        image="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
      />
      <Posts
        profilePic="https://avatars0.githubusercontent.com/u/24625310?s=460&u=a7b9ed3c11c7c7a56502fbb7b9d0498a2d2c17cb&v=4"
        message="This is a testing message just to know wheather its working or not"
        timestamp="Nothing"
        username="vsskamal"
        image="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
      />
      <Posts
        profilePic="https://avatars0.githubusercontent.com/u/24625310?s=460&u=a7b9ed3c11c7c7a56502fbb7b9d0498a2d2c17cb&v=4"
        message="This is a testing message just to know wheather its working or not"
        timestamp="Nothing"
        username="vsskamal"
        image="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
      /> */}
    </div>
  );
};

export default Feed;
