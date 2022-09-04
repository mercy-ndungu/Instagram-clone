import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "blessingthebobo",
      caption: "Wow, I'm Amazing!",
      imageUrl:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "godtello",
      caption: "Oh, I'm a God!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <button className="text__button">Logout</button>
          <div className="app__headerButtons">
            <button className="primary__button">Log in</button>
            <button className="text__button">Sign up</button>
          </div>
        </div>
      </div>
      {/* <div className="timeline">
        {posts.map((post) => (
          // <Post
          //   username={post.username}
          //   caption={post.caption}
          //   imageUrl={post.imageUrl}
          // />
        ))}
      </div> */}
    </div>
  );
}

export default App;
