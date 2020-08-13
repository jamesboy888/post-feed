import React,{useState} from 'react';
import './App.css';
import Navbar from "./Navbar";
import Input from './Input'
import Post from './Post';

let id = 1;

function App() {
  const [posts,setPosts] = useState([]);

  function addPost(tittle){
    const newPost = {id,tittle}
    setPosts([newPost,...posts]);
    id += 1;
  }

  function deletePost(id){
    const updatedPost = posts.filter((post)=> post.id != id)
    setPosts(updatedPost);
  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post)=><Post key={post.id} id={post.id} tittle={post.tittle} deletePost={deletePost}/>)}
    </div>
  );
}

export default App;
